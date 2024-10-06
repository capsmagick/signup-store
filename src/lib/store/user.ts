import { writable, derived, type Writable } from 'svelte/store';
// Interfaces
export interface IsLoggedInStore extends Writable<boolean> {}
// Store Data
export const isLoggedIn: IsLoggedInStore = writable(false);
export const customerProductsCart = writable([]);
export const customerCartItems = writable([]);

// Getter-like derived store for cart item count
export const cartItemCount = derived(customerCartItems, ($customerCartItems) => {
	return $customerCartItems ? $customerCartItems.length : 0;
});
