import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').unique().notNull(),
	password: text('password').notNull(),
	createdAt: text('created_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.notNull(),
});

export const links = sqliteTable('links', {
	id: integer('id').primaryKey(),
	title: text('title').notNull(),
	url: text('content').notNull(),
	userId: integer('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	createdAt: text('created_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.notNull(),
	updateAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertLink = typeof links.$inferInsert;
export type SelectLink = typeof links.$inferSelect;
