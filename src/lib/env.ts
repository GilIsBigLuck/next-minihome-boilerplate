import { z } from "zod";

const envSchema = z.object({
  // 네이버 지도 API Client ID (클라이언트에서도 사용 가능)
  NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: z.string().min(1, "네이버 지도 API Client ID가 필요합니다"),
  
  // NextAuth 관련 (서버 사이드만)
  NEXTAUTH_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().optional(),
  
  // 데이터베이스 (Prisma 사용 시, 서버 사이드만)
  DATABASE_URL: z.string().url().optional(),
});

type Env = z.infer<typeof envSchema>;

function getEnv(): Env {
  try {
    return envSchema.parse({
      NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      DATABASE_URL: process.env.DATABASE_URL,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join("\n");
      throw new Error(
        `❌ 환경변수 검증 실패:\n${missingVars}\n\n.env.local 파일을 확인해주세요.`
      );
    }
    throw error;
  }
}

// 서버 사이드에서만 환경변수 검증 (빌드 타임에 검증)
// 클라이언트에서는 process.env.NEXT_PUBLIC_* 직접 사용
export const env = typeof window === "undefined" ? getEnv() : ({} as Env);

// 클라이언트에서 사용할 수 있는 타입 안전한 환경변수 헬퍼
export const clientEnv = {
  NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "",
} as const;
