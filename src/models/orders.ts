
// Order model based on the structure returned by woocommerce API for orders
export interface Order {
	id: number,
	parent_id: number,
	number: string,
	order_key: string,
	created_via: string,
	version: number,
	status: string,
	currency: string,
	date_created: string,
	date_created_gmt: string,
	date_modified: string,
	date_modified_gmt: string,
	discount_total: string,
	discount_tax: string,
	cart_tax: string,
	total: string,
	total_tax: string,
	prices_include_tax: boolean,
	customer_id: number,
	customer_ip_address: string,
	customer_user_agent: string,
	customer_note: string,
	billing: {
		first_name: string,
		last_name: string,
		company: string,
		address_1: string,
		address_2: string,
		city: string,
		state: string,
		postcode: string,
		country: string,
		email: string,
		phone: string
	}
	shipping: {
		first_name: string,
		last_name: string,
		company: string,
		address_1: string,
		address_2: string,
		city: string,
		state: string,
		postcode: string,
		country: string
	}
	payment_method: string,
	payment_method_title: string,
	transaction_id: string,
	date_paid: string,
	date_paid_gmt: string,
	date_completed: string,
	date_completed_gmt: string,
	cart_hash: string,
	meta_data: MetaData[],
	line_items: LineItem[],
	tax_lines: TaxLine[],
	shipping_lines: ShippingLine[],
	fee_lines: FeeLine[],
	coupon_lines: CouponLine[],
	refunds: Refund[],
	set_paid: boolean
}

interface MetaData{
	id: string,
	key: string,
	value: string
}

interface LineItem {
	id: number,
	name: string,
	product_id: number,
	variation_id: number,
	quantity: number,
	tax_class: number,
	subtotal: string,
	subtotal_tax: string,
	total: string,
	total_tax: string,
	taxes: any[],
	meta_data: MetaData[],
	sku: string,
	price: string
}

interface TaxLine{
	id: number,
	rate_code: string,
	rate_id: string,
	label, string,
	compound: boolean,
	tax_total: string,
	shipping_tax_total: string,
	meta_data: MetaData[]
}

interface ShippingLine{
	id: number,
	method_title: string,
	method_id: string,
	total: string,
	total_tax: string,
	taxes: any[],
	meta_data: MetaData[]
}

interface FeeLine{
	id: number,
	title: string,
	tax_class: string,
	tax_status: string,
	total: string,
	total_tax: string,
	taxes: any[],
	meta_data: MetaData[]
}

interface CouponLine{
	id: number,
	code: string,
	discount: string,
	discount_tax: string,
	meta_data: MetaData[]
}

interface Refund {
	id: number,
	reason: string,
	total: string
}

interface MetaData{
	key: string,
	label: string,
	value: string
}


// OrderNotes model based on the structure returned by woocommerce API for order notes
export interface OrderNote{
	id: number,
	date_created: string,
	date_created_gmt: string,
	note: string,
	customer_note: boolean
}


// OrderRefund model based on the structure returned by woocommerce API for order refunds
export interface OrderRefund{
	id: number,
	date_created: string,
	date_created_gmt: string,
	amount: string,
	reason: string,
	refund_by: number,
	meta_data: MetaData[],
	line_items: LineItem[],
	api_refund: boolean
}
