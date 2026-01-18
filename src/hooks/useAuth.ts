"use client";

import { useMutation } from "@tanstack/react-query";
// import { signIn, signOut } from "next-auth/react"; // API 비활성화로 인해 주석 처리
import { useRouter } from "next/navigation";
import { LoginInput } from "@/lib/validations";

// Login mutation (API 비활성화로 인해 stub 구현)
export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      // API 비활성화로 인해 항상 에러 반환
      throw new Error("로그인 기능이 현재 비활성화되어 있습니다.");
      
      // 원래 코드 (주석 처리)
      // const result = await signIn("credentials", {
      //   email: data.email,
      //   password: data.password,
      //   redirect: false,
      // });
      // if (result?.error) {
      //   throw new Error(result.error);
      // }
      // return result;
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });
}

// Logout mutation (API 비활성화로 인해 stub 구현)
export function useLogout() {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      // API 비활성화로 인해 아무 작업도 하지 않음
      // 원래 코드 (주석 처리)
      // await signOut({ redirect: false });
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });
}
