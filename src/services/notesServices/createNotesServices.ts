import { Note } from '@/store/type';
import { db } from '../db';
import { Priority } from './type';

export const createNote = async (
  title: string,
  description: string,
  noteType: number,
  priority: Priority,
) => {
  const now = Date.now();

  await db.execute(
    `
      INSERT INTO notes
      (
        title,
        description,
        noteType,
        priority,
        is_deleted,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [title, description, noteType, priority, 0, now, now],
  );
};

export const getAllNotes = async () => {
  const result = await db.execute(
    `SELECT * FROM notes WHERE is_deleted = 0 ORDER BY created_at DESC`,
  );
  return result.rows as unknown as Note[];
};
