import { Note } from '@/store/type';
import { db } from '../db';
import { Priority, UpdateNoteFields } from './type';

export const createSimpleNote = async (
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

export const createCheckListNote = async (
  title: string,
  checklist: string,
  noteType: number,
  priority: Priority,
) => {
  const now = Date.now();

  await db.execute(
    `
      INSERT INTO notes
      (
        title,
        checklist,
        noteType,
        priority,
        is_deleted,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [title, checklist, noteType, priority, 0, now, now],
  );
};

export const createMediaNote = async (
  title: string,
  description: string,
  noteType: number,
  priority: Priority,
  audio_path: string,
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
        audio_path,
        is_deleted,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?,?)
    `,
    [title, description, noteType, priority, audio_path, 0, now, now],
  );
};

export const createMediaNoteWithImage = async (
  title: string,
  description: string,
  noteType: number,
  priority: Priority,
  imageList: string,
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
        imageList,
        is_deleted,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?,?)
    `,
    [title, description, noteType, priority, imageList, 0, now, now],
  );
};

export const updateNote = async (
  id: number | string,
  fields: UpdateNoteFields,
) => {
  const now = Date.now();

  const entries = Object.entries(fields).filter(
    ([, value]) => value !== undefined,
  );

  if (entries.length === 0) {
    return; // nothing to update
  }

  const setClause = entries.map(([key]) => `${key} = ?`).join(', ');
  const values = entries.map(([, value]) => value);

  await db.execute(
    `
      UPDATE notes
      SET ${setClause}, updated_at = ?
      WHERE id = ?
    `,
    [...values, now, id],
  );
};

export const getAllNotes = async () => {
  const result = await db.execute(
    `SELECT * FROM notes WHERE is_deleted = 0 ORDER BY created_at DESC`,
  );
  return result.rows as unknown as Note[];
};
