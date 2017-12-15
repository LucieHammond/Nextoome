
// Product model based on the structure returned by woocommerce API for products
export interface Product {
	title: string,
	id: number,
	created_at: string,
	updated_at: string,
	type: string,
	status: string,
	downloadable: boolean,
	virtual: boolean,
	permalink: string,
	sku: string,
	price: string,
	regular_price: string,
	sale_price: string,
	price_html: string,
	taxable: boolean,
	tax_status: string,
	tax_class: string,
	managing_stock: boolean,
	stock_quantity: number,
	in_stock: number,
	backorders_allowed: boolean,
	backordered: boolean,
	sold_individually: boolean,
	purchaseable: boolean,
	featured: boolean,
	visible: boolean,
	catalog_visibility: string,
	on_sale: boolean,
	weight: string,
	dimensions: {
		length: string,
		width: string,
		height: string,
		unit: string
	},
	shipping_required: boolean,
	shipping_taxable: boolean,
	shipping_class: string,
	shipping_class_id: number,
	description: string,
	short_description: string,
	reviews_allowed: boolean,
	average_rating: string,
	rating_count: number,
	related_ids: number[],
	upsell_ids: number[],
	cross_sell_ids: number[],
	parent_id: number,
	categories: string[],
	tags: string[],
	images: Image[],
	featured_src: string,
	attributes: Attribute[],
	downloads: Download[],
	download_limit: number,
	download_expiry: number,
	download_type: string,
	purchase_note: string,
	total_sales: number,
	variations: Variation[],
	parent: any[],
	grouped_products: any[],
	menu_order: 0
}

interface Image{
	id: number,
	created_at: string,
	updated_at: string,
	src: string,
	title: string,
	alt: string,
	position: number
}

interface Download{
	id: number,
	name: string,
	file: string
}

interface Attribute{
	name: string,
	slug: string,
	position: number,
	visible: boolean,
	variation: boolean,
	options: string[]
}

interface Variation{
	id: number,
	created_at: string,
	updated_at: string,
	downloadable: boolean,
	virtual: boolean,
	permalink: string,
	sku: string,
	price: string,
	regular_price: string,
	sale_price: string,
	taxable: boolean,
	tax_status: string,
	tax_class: string,
	managing_stock: boolean,
	stock_quantity: number,
	in_stock: number,
	backordered: boolean,
	sold_individually: boolean,
	purchaseable: boolean,
	visible: boolean,
	on_sale: boolean,
	weight: string,
	dimensions: {
		length: string,
		width: string,
		height: string,
		unit: string
	},
	shipping_class: string,
	shipping_class_id: number,
	images: Image[],
	attributes: DefaultAttribute[],
	downloads: Download[],
	download_limit: number,
	download_expiry: number
}

interface DefaultAttribute{
	name: string,
	slug: string,
	option: string
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
	image: string,
	count: number
}

// ProductShippingClass model based on the structure returned by woocommerce API for product shipping classes
export interface ProductShippingClass{
	id: number,
	name: string,
	slug: string,
	parent: number,
	description: string,
	count: number
}

// ProductTag model based on the structure returned by woocommerce API for product tags
export interface ProductTag{
	id: number,
	name: string,
	parent: number,
	description: string,
	count: number
}
