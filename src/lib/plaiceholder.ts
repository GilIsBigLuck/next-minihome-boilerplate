import { getPlaiceholder } from "plaiceholder";
import path from "path";
import fs from "fs";

/**
 * 이미지 경로에서 블러 placeholder 생성
 * @param imagePath - public 폴더 기준 경로 (예: "/dummy/image.jpg") 또는 절대 경로
 * @returns base64 인코딩된 블러 이미지
 */
export async function getBlurDataURL(imagePath: string): Promise<string> {
  try {
    // public 폴더 경로 처리
    let filePath: string;
    
    if (imagePath.startsWith("/")) {
      // public 폴더 기준 경로인 경우
      filePath = path.join(process.cwd(), "public", imagePath);
    } else if (imagePath.startsWith("http")) {
      // 원격 이미지인 경우 (URL) - fetch로 가져와서 Buffer로 변환
      try {
        const response = await fetch(imagePath);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const { base64 } = await getPlaiceholder(buffer);
        return base64;
      } catch (error) {
        console.error("원격 이미지 블러 생성 실패:", error);
        return getFallbackBlur();
      }
    } else {
      // 절대 경로인 경우
      filePath = imagePath;
    }

    // 파일 존재 확인
    if (!fs.existsSync(filePath)) {
      console.warn(`이미지 파일을 찾을 수 없습니다: ${filePath}`);
      return getFallbackBlur();
    }

    // 파일을 Buffer로 읽어서 plaiceholder에 전달
    const fileBuffer = fs.readFileSync(filePath);
    const { base64 } = await getPlaiceholder(fileBuffer);
    return base64;
  } catch (error) {
    console.error("블러 이미지 생성 실패:", error);
    return getFallbackBlur();
  }
}

/**
 * 여러 이미지의 blurDataURL을 한번에 생성
 */
export async function getBlurDataURLs(imagePaths: string[]): Promise<Record<string, string>> {
  const results: Record<string, string> = {};
  
  await Promise.all(
    imagePaths.map(async (imagePath) => {
      results[imagePath] = await getBlurDataURL(imagePath);
    })
  );
  
  return results;
}

/**
 * Fallback 블러 이미지
 */
function getFallbackBlur(): string {
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
}
