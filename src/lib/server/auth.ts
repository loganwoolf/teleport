import bcrypt from 'bcrypt';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { users } from './db/schema';

export async function checkPassword(email: string, password: string) {
	const [{ password: hashedPassword }] = await db
		.select({ password: users.password })
		.from(users)
		.where(eq(users.email, email));
	try {
		const isMatch = await bcrypt.compare(password, hashedPassword);
		return isMatch;
	} catch (error) {
		console.error('Password checking failed');
	}
}

export async function hashPassword(password: string) {
	try {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		return hashedPassword;
	} catch {
		console.error('Password hashing failed');
	}
}

export async function createUser(name: string, email: string, password: string) {
	const hashedPassword = await hashPassword(password);
	if (!hashedPassword) return;

	await db.insert(users).values({
		name,
		email,
		password: hashedPassword,
	});
}
