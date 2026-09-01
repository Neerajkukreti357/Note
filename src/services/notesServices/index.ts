import { db } from '../db';

export const createTables = async () => {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      noteType INTEGER NOT NULL,
      priority TEXT NOT NULL DEFAULT 'medium'
        CHECK(priority IN ('high','medium','low')),
      title TEXT,
      checklist TEXT DEFAULT NULL,
      description TEXT,
      is_completed INTEGER NOT NULL DEFAULT 0,
      is_partial_completed INTEGER NOT NULL DEFAULT 0,
      is_deleted INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      deleted_at TEXT
    );
  `);
};
