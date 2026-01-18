import { z } from "zod";

export const createMemberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

export const updateMemberSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  position: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

export type CreateMemberInput = z.infer<typeof createMemberSchema>;
export type UpdateMemberInput = z.infer<typeof updateMemberSchema>;
