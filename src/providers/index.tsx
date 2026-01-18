"use client";

import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import AuthProvider from "./AuthProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
}

export { QueryProvider, AuthProvider };
