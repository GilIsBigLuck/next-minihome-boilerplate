# next-minihome-boilerplate
minihome's boilerplate

## Setup

Next.js 15.5.7 프로젝트가 설정되었습니다.

### 사용된 CLI 명령어

프로젝트 설정 시 사용된 명령어들:

```bash 
npx create-next-app@15.5.7 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes

# 의존성 설치 (실행 필요)
npm install
```

### 프로젝트 구조

- `src/app/` - App Router 기반 페이지 및 레이아웃
- `src/app/layout.tsx` - 루트 레이아웃
- `src/app/page.tsx` - 홈 페이지
- `src/app/globals.css` - 전역 스타일 (Tailwind CSS)
- `next.config.ts` - Next.js 설정
- `tsconfig.json` - TypeScript 설정
- `tailwind.config.ts` - Tailwind CSS 설정
- `.eslintrc.json` - ESLint 설정

### 실행 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 실행
npm run lint
```

### 참고사항

- Next.js 버전: 15.5.7
- TypeScript 사용
- Tailwind CSS 사용
- ESLint 설정 완료
- App Router 사용 (`src/app` 디렉토리)
- Import alias: `@/*` → `./src/*`
 