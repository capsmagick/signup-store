import { writable, derived, type Writable } from 'svelte/store';
import { page } from '$app/stores';

export const currentRoute = writable(page);
