"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateMemberInput, UpdateMemberInput } from "@/lib/validations";

export interface Member {
  id: string;
  name: string;
  position: string | null;
  bio: string | null;
  image: string | null;
  userId: number;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    username: string;
    displayName: string | null;
    email: string;
  };
}

// Fetch all members
export function useMembers() {
  return useQuery<Member[]>({
    queryKey: ["members"],
    queryFn: async () => {
      const response = await fetch("/api/members");
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      return response.json();
    },
  });
}

// Fetch single member
export function useMember(id: string) {
  return useQuery<Member>({
    queryKey: ["members", id],
    queryFn: async () => {
      const response = await fetch(`/api/members/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch member");
      }
      return response.json();
    },
    enabled: !!id,
  });
}

// Create member
export function useCreateMember() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateMemberInput) => {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create member");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
    },
  });
}

// Update member
export function useUpdateMember() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateMemberInput }) => {
      const response = await fetch(`/api/members/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update member");
      }

      return response.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      queryClient.invalidateQueries({ queryKey: ["members", variables.id] });
    },
  });
}

// Delete member
export function useDeleteMember() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/members/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to delete member");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
    },
  });
}
