// schema/noteSchema.ts
import { isEditorEmpty } from '@/utils';
import { z } from 'zod';

export const simpleNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  description: z
    .string()
    .refine(val => !isEditorEmpty(val), {
      message: 'Description is required',
    })
    .min(1, 'Description is required')
    .max(1000, 'Description too long'),
  type: z.number().int().min(1).max(3),
  priority: z.enum(['high', 'medium', 'low'], {
    error: 'Priority is required',
  }),
});

export type SimpleNoteFormData = z.infer<typeof simpleNoteSchema>;
export type Priority = SimpleNoteFormData['priority'];
