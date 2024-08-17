import { checkPassword, createUser } from '$lib/server/auth';
import type { Actions } from './$types';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('login_email');
		const password = data.get('login_password');

		const isMatch = await checkPassword(email as string, password as string);
		return {
			error: isMatch ? undefined : 'Invalid username or password.',
			success: isMatch,
		};
	},
	register: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('register_username');
		const email = data.get('register_email');
		const password = data.get('register_password');

		createUser(username as string, email as string, password as string);
	},
} as Actions;
