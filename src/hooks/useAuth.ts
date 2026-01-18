"use client";

import { useMutation } from "@tanstack/react-query";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginInput, RegisterInput } from "@/lib/validations";

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

// Register mutation
export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: RegisterInput) => {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Registration failed");
      }

      return response.json();
    },
    onSuccess: async (_, variables) => {
      // Auto login after registration
      await signIn("credentials", {
        email: variables.email,
        password: variables.password,
        redirect: false,
      });
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
