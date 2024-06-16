import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: `.env.${process.env.NODE_ENV === 'production' ? 'production' : 'development'}` });

export default defineConfig({
	schema: './src/db/schema.ts',
	out: './src/db/migrations',
	dialect: 'sqlite',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_DATABASE_URL!,
		authToken: process.env.TURSO_AUTH_TOKEN!,
	},
});
