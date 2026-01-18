"use client";

import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
// import AuthProvider from "./AuthProvider"; // API 비활성화로 인해 주석 처리

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    // <AuthProvider>
      <QueryProvider>{children}</QueryProvider>
    // </AuthProvider>
  );
}

export { QueryProvider };
// export { QueryProvider, AuthProvider };
