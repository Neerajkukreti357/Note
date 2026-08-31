import { db } from '../db';
import { Priority } from './type';

export const createNote = async (
  title: string,
  description: string,
  noteType: string,
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
    [title, description, priority, noteType, 0, now, now],
  );
};
