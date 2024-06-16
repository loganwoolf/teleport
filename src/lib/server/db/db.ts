import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from '$env/static/private';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

export const db = drizzle(
	createClient({
		url: TURSO_DATABASE_URL,
		authToken: TURSO_AUTH_TOKEN
	})
);
