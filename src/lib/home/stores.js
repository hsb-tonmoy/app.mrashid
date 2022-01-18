import { writable } from 'svelte/store';

export const selections = writable({
	destination: '',
	degree: ''
});

export const personal_fields = writable();
