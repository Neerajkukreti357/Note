// schema/noteSchema.ts
import { isEditorEmpty } from '@/utils';
import { z } from 'zod';

const AssetSchema = z.object({
  uri: z.string().optional(),
  fileName: z.string().optional(),
  type: z.string().optional(),
  fileSize: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  duration: z.number().optional(),
  bitrate: z.number().optional(),
  timestamp: z.string().optional(),
  id: z.string().optional(),
});

export const simpleNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  description: z
    .string()
    .refine(val => !isEditorEmpty(val), {
      message: 'Description is required',
    })
    .min(1, 'Description is required')
    .max(4000, 'Description too long'),
  type: z.number().int().min(1).max(3),
  priority: z.enum(['high', 'medium', 'low'], {
    error: 'Priority is required',
  }),
});

export const checkListNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  type: z.number().int().min(1).max(3),
  priority: z.enum(['high', 'medium', 'low'], {
    error: 'Priority is required',
  }),
  checkList: z.string().refine(
    value => {
      try {
        const parsed = JSON.parse(value);

        return Array.isArray(parsed) && parsed.length > 0;
      } catch {
        return false;
      }
    },
    {
      message: 'Please make at least one checklist.',
    },
  ),
});

export const MediaNoteSchema = z
  .object({
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

    media: z.array(z.enum(['1', '2'])).min(1, 'Media is required'),

    // Not always required
    audioPath: z.string().optional(),

    // Not always required
    imageList: z.array(AssetSchema).optional(),
  })
  .superRefine((data, ctx) => {
    // Audio selected
    if (data.media.includes('1')) {
      if (!data.audioPath || data.audioPath.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['audioPath'],
          message: 'Audio recording is required',
        });
      }
    }

    // Image selected
    if (data.media.includes('2')) {
      if (!data.imageList || data.imageList.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['imageList'],
          message: 'At least one image is required',
        });
      }
    }
  });

export type SimpleNoteFormData = z.infer<typeof simpleNoteSchema>;
export type CheckNoteFormData = z.infer<typeof checkListNoteSchema>;
export type MediaNoteFormData = z.infer<typeof MediaNoteSchema>;
export type Priority = SimpleNoteFormData['priority'];
