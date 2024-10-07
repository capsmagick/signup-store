import { type Collection, type ProductDetails } from '$lib';
export const dummyCollections: Collection[] = [
	{
		id: 1,
		name: 'Summer Collection',
		description: 'A vibrant summer collection with light fabrics and bright colors.',
		feature_image: new File([], 'summer.jpg'), // Assuming file is created or uploaded
		tags: ['summer', 'bright', 'new arrivals'],
		is_in_home_page: true
	},
	{
		id: 2,
		name: 'Winter Collection',
		description: 'A cozy winter collection featuring warm and stylish outfits.',
		feature_image: new File([], 'winter.jpg'),
		tags: ['winter', 'warm', 'cozy'],
		is_in_home_page: true
	},
	{
		id: 3,
		name: 'Classic Collection',
		description: 'Timeless designs that never go out of style.',
		feature_image: new File([], 'classic.jpg'),
		tags: ['classic', 'timeless', 'elegant'],
		is_in_home_page: false
	},
	{
		id: 4,
		name: 'Minimal Collection',
		description: 'A collection focusing on simplicity and elegance.',
		feature_image: new File([], 'minimal.jpg'),
		tags: ['minimal', 'elegance', 'simplicity'],
		is_in_home_page: false
	}
];

export const dummyProducts: ProductDetails[] = [
	{
		id: 1,
		name: 'Product 1',
		short_description: 'This is product 1',
		description: 'This is a detailed description of product 1',
		sku: 'P1SKU',
		price: 100.0,
		selling_price: 90.0,
		condition: 'New',
		categories: [
			{ id: 1, name: 'Category 1' },
			{ id: 2, name: 'Category 2' }
		],
		//   brand: { id: 1, name: 'Brand 1' },
		is_disabled: false,
		hsn_code: 'HSN001',
		tags: ['electronics', 'gadgets'],
		//   dimension: { id: 1, length: 10, width: 5, height: 3, unit: 'cm' },
		rating: '4.5',
		no_of_reviews: 10
	},
	{
		id: 2,
		name: 'Product 2',
		short_description: 'This is product 2',
		description: 'This is a detailed description of product 2',
		sku: 'P2SKU',
		price: 200.0,
		selling_price: 180.0,
		condition: 'Used',
		categories: [{ id: 3, name: 'Category 3' }],
		//   brand: { id: 2, name: 'Brand 2' },
		is_disabled: false,
		hsn_code: 'HSN002',
		tags: ['furniture', 'home'],
		//   dimension: { id: 2, length: 20, width: 10, height: 5, unit: 'cm' },
		rating: '4.0',
		no_of_reviews: 5
	},
	{
		id: 3,
		name: 'Product 3',
		short_description: 'This is product 3',
		description: 'This is a detailed description of product 3',
		sku: 'P3SKU',
		price: 300.0,
		selling_price: 270.0,
		condition: 'New',
		categories: [{ id: 4, name: 'Category 4' }],
		//   brand: { id: 3, name: 'Brand 3' },
		is_disabled: true,
		hsn_code: 'HSN003',
		tags: ['appliances', 'kitchen'],
		//   dimension: { id: 3, length: 15, width: 7, height: 4, unit: 'cm' },
		rating: '3.8',
		no_of_reviews: 8
	}
];
