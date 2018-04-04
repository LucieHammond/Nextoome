
// Product model based on the structure returned by woocommerce API for products
export interface Product {
	id: number,
	name: string,
	slug: string,
	permalink: string,
	date_created: string,
	date_created_gmt: string,
	date_modified: string,
	date_modified_gmt: string,
	type: string,
	status: string,
	featured: boolean,
	catalog_visibility: string,
	description: string,
	short_description: string,
	sku: string,
	price: string,
	regular_price: string,
	sale_price: string,
	date_on_sale_from: string,
	date_on_sale_from_gmt: string,
	date_on_sale_to: string,
	date_on_sale_to_gmt: string,
	price_html: string,
	on_sale: boolean,
	purchasable: boolean,
	total_sales: number,
	virtual: boolean,
	downloadable: boolean,
	downloads: Download[],
	download_limit: number,
	download_expiry: number,
	external_url: string,
	button_text: string,
	tax_status: string,
	tax_class: string,
	manage_stock: boolean,
	stock_quantity: number,
	in_stock: boolean,
	backorders: string,
	backorders_allowed: boolean,
	backordered: boolean,
	sold_individually: boolean,
	weight: string,
	dimensions: {
		length: string,
		width: string,
		height: string
	},
	shipping_required: boolean,
	shipping_taxable: boolean,
	shipping_class: string,
	shipping_class_id: number,
	reviews_allowed: boolean,
	average_rating: string,
	rating_count: number,
	related_ids: number[],
	upsell_ids: number[],
	cross_sell_ids: number[],
	parent_id: number,
	purchase_note: string,
	categories: Category[],
	tags: Category[],
	images: Image[],
	attributes: Attribute[],
	default_attributes: DefaultAttribute[],
	variations: number[],
	grouped_products: number[],
	menu_order: 0,
	meta_data: MetaData[],
	quantite_panier: number;
}

interface Download{
	id: number,
	name: string,
	file: string
}

interface Category{
	id: number,
	name: string,
	slug: string
}

interface Image{
	id: number,
	date_created: string,
	date_created_gmt: string,
	date_modified: string,
	date_modified_gmt: string,
	src: string,
	name: string,
	alt: string,
	position: number
}

interface Attribute{
	id: number,
	name: string,
	position: number,
	visible: boolean,
	variation: boolean,
	options: string[]
}

interface DefaultAttribute{
	id: number,
	name: string,
	option: string
}

interface MetaData {
	id: number,
	key: string,
	value: string
}


// ProductAttribute model based on the structure returned by woocommerce API for product attributes
export interface ProductAttribute{
	id: number,
	name: string,
	slug: string,
	type: string,
	order_by: string,
	has_archives: boolean
}


// ProductAttributeTerm model based on the structure returned by woocommerce API for product attribute terms
export interface ProductAttributeTerm{
	id: number,
	name: string,
	slug: string,
	description: string,
	menu_order: number,
	count: number,
}


// ProductCategory model based on the structure returned by woocommerce API for product categories
export interface ProductCategory{
	id: number,
	name: string,
	slug: string,
	parent: number,
	description: string,
	display: string,
	image: {
		id: number,
		date_created: string,
		date_created_gmt: string,
		date_modified: string,
		date_modified_gmt: string,
		src: string,
		title: string,
		alt: string
	},
	menu_order: number,
	count: number
}


// ProductShippingClass model based on the structure returned by woocommerce API for product shipping classes
export interface ProductShippingClass{
	id: number,
	name: string,
	slug: string,
	description: string,
	count: number
}


// ProductTag model based on the structure returned by woocommerce API for product tags
export interface ProductTag{
	id: number,
	name: string,
	slug: string,
	description: string,
	count: number
}

// Product recap (what is stored in wishlists for example)
export interface WishlistItem{
	id: number,
	name: string,
	quantity: number,
	image: string
}
