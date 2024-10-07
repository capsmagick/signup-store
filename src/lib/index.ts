// place files you want to import through the `$lib` alias in this folder.
import { goto } from '$app/navigation';
// Common Interfaces
// Interfaces
export interface NavLink {
	title: string;
	value: string;
	link: string;
}

export interface ProductDetails {
	id: number; // Assuming id is available as a default primary key
	name: string;
	short_description?: string;
	description?: string;
	sku?: string;
	price: number;
	selling_price: number;
	condition?: string;
	categories: any[]; // Array of related categories
	//   brand: Brand;
	is_disabled: boolean;
	hsn_code?: string;
	tags: string[]; // Array of tags
	//   dimension?: Dimension;
	rating?: string;
	no_of_reviews?: number;
}

export interface Collection {
	id: number; // Assuming id is available as a default primary key
	name: string;
	description?: string;
	feature_image?: File;
	tags: string[];
	is_in_home_page: boolean;
}

export function gotoPageFunction(url: string) {
	try {
		goto(url);
	} catch (error) {
		console.log('Navigation failed:', error);
	}
}
