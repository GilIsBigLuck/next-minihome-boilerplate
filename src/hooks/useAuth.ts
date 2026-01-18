"use client";

import { useMutation } from "@tanstack/react-query";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginInput } from "@/lib/validations";

// Login mutation
export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });
}

// Logout mutation
export function useLogout() {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      await signOut({ redirect: false });
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });
}
