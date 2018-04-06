// Coupon model based on the structure returned by woocommerce API for coupons
export interface Coupon {
	id: number,
	code: string,
	amount: string,
	date_created: string,
	date_created_gmt: string,
	date_modified: string,
	date_modified_gmt: string,
	discount_type: string,
	description: string,
	date_expires: string,
	date_expires_gmt: string,
	usage_count: number
	individual_use: boolean,
	product_ids: number[],
	exclude_product_ids: number[],
	usage_limit: number,
	usage_limit_per_user: number,
	limit_usage_to_x_items: number,
	free_shipping: boolean,
	product_categories: number[],
	excluded_product_categories: number[],
	exclude_sale_items: boolean,
	minimum_amount: string,
	maximum_amount: string,
	email_restrictions: string[],
	used_by: number[],
	meta_data: MetaData[]
}

interface MetaData {
	id: string,
	key: string,
	value: string
}
