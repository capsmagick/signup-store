// place files you want to import through the `$lib` alias in this folder.
import { goto } from '$app/navigation';
// Common Interfaces
// Interfaces
export interface NavLink {
	title: string;
	value: string;
	link: string;
}

export function gotoPageFunction(url: string) {
	try {
		goto(url);
	} catch (error) {
		console.log('Navigation failed:', error);
	}
}
