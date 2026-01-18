# Public Folder

이 폴더는 Next.js의 정적 파일을 저장하는 공용 폴더입니다.

## 폴더 구조

- `dummy/` - 더미 이미지 및 테스트용 파일을 저장하는 폴더
- `favicon/` - 파비콘 및 아이콘 파일을 저장하는 폴더

## 사용 방법

### 이미지 사용 예시

```tsx
// public/dummy/image.jpg 파일을 사용하는 경우
<Image src="/dummy/image.jpg" alt="Description" width={500} height={300} />

// public/favicon/icon.png 파일을 사용하는 경우
<link rel="icon" href="/favicon/icon.png" />
```

### 주의사항

- `public` 폴더의 파일은 루트 경로(`/`)에서 직접 접근 가능합니다
- 예: `public/dummy/image.jpg` → `/dummy/image.jpg`
- Next.js의 `Image` 컴포넌트를 사용할 때는 `/`로 시작하는 경로를 사용하세요
