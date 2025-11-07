// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: UserInterface | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface UserInterface {
		user_id: string;
		name: string;
		nat_id: string;
		xForwardedFor: string;
		userAgent: string;
		ip: string;
	}
}

export {};
