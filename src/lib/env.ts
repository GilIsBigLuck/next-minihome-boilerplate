import { z } from "zod";

/**
 * 클라이언트 사이드 환경변수 스키마
 * NEXT_PUBLIC_* 접두사가 붙은 변수만 클라이언트에서 접근 가능
 * 클라이언트에서는 기본값을 제공하여 검증 실패 시에도 동작하도록 처리
 */
const clientSchema = z.object({
  NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: z
    .string()
    .default("")
    .describe("네이버 지도 API Client ID"),
});

/**
 * 서버 사이드 환경변수 스키마
 * 서버에서만 접근 가능한 민감한 정보
 */
const serverSchema = z.object({
  // NextAuth 관련
  NEXTAUTH_URL: z
    .string()
    .url("올바른 URL 형식이 아닙니다")
    .optional()
    .describe("NextAuth 인증 URL"),
  NEXTAUTH_SECRET: z
    .string()
    .min(1, "NextAuth Secret이 필요합니다")
    .optional()
    .describe("NextAuth 암호화 키"),

  // 데이터베이스
  DATABASE_URL: z
    .string()
    .url("올바른 데이터베이스 URL 형식이 아닙니다")
    .optional()
    .describe("Prisma 데이터베이스 연결 URL"),
});

/**
 * 전체 환경변수 스키마 (서버에서만 사용)
 */
const envSchema = clientSchema.merge(serverSchema);

type ClientEnv = z.infer<typeof clientSchema>;
type ServerEnv = z.infer<typeof serverSchema>;
type Env = z.infer<typeof envSchema>;

/**
 * 환경변수 파싱 및 검증
 * 빌드 타임에 필수 환경변수가 없어도 빌드가 실패하지 않도록 처리
 */
function getEnv(): Env {
  const parsed = envSchema.safeParse({
    // 클라이언트 환경변수
    NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID,

    // 서버 환경변수
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  });

  if (!parsed.success) {
    // 개발 환경에서만 경고 출력
    if (process.env.NODE_ENV === "development") {
      console.warn("⚠️ 환경변수 검증 실패 (일부 기능이 동작하지 않을 수 있습니다):\n");
      parsed.error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        console.warn(`  - ${path}: ${issue.message}`);
      });
      console.warn("\n.env.local 파일을 확인하고 필요한 환경변수를 설정해주세요.\n");
    }

    // 빌드 실패를 방지하기 위해 기본값 반환
    return {
      NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "",
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      DATABASE_URL: process.env.DATABASE_URL,
    } as Env;
  }

  return parsed.data;
}

/**
 * 클라이언트 환경변수 파싱 및 검증
 * 클라이언트에서는 항상 성공하도록 기본값 제공
 */
function getClientEnv(): ClientEnv {
  // 기본값을 제공하여 검증이 항상 성공하도록 처리
  const parsed = clientSchema.parse({
    NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "",
  });

  // 개발 환경에서만 환경변수 누락 경고
  if (!process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID && process.env.NODE_ENV === "development") {
    console.warn("⚠️ NEXT_PUBLIC_NAVER_MAP_CLIENT_ID가 설정되지 않았습니다. 네이버 지도 기능이 동작하지 않을 수 있습니다.");
  }

  return parsed;
}

/**
 * 서버 사이드 환경변수 (빌드 타임에 검증)
 * 서버 컴포넌트나 API 라우트에서만 사용
 */
export const env: Env = typeof window === "undefined" ? getEnv() : ({} as Env);

/**
 * 클라이언트 사이드 환경변수 (타입 안전)
 * 클라이언트 컴포넌트에서 사용
 */
export const clientEnv: ClientEnv = getClientEnv();

/**
 * 타입 추론을 위한 모듈 확장
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
