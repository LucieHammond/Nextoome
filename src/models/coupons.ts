
// Coupon model based on the structure returned by woocommerce API for coupons
export interface Coupon {
	id: number,
	code: string,
	type: string,
	created_at: string,
	updated_at: string,
	amount: string,
	individual_use: boolean,
	product_ids: number[],
	exclude_product_ids: number[],
	usage_limit: number,
	usage_limit_per_user: number,
	limit_usage_to_x_items: number,
	usage_count: number,
	expiry_date: string,
	enable_free_shipping: boolean,
	product_category_ids: number[],
	exclude_product_category_ids: number[],
	exclude_sale_items: boolean,
	minimum_amount: string,
	maximum_amount: string,
	customer_emails: string[],
	description: string
}
