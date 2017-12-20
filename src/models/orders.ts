
import { User } from './users'

// Order model based on the structure returned by woocommerce API for orders
export interface Order {
	id: number,
	order_number: number,
	created_at: string,
	updated_at: string,
	completed_at: string,
	status: string,
	currency: string,
	total: string,
	subtotal: string,
	total_line_items_quantity: number,
	total_tax: string,
	total_shipping: string,
	cart_tax: string,
	shipping_tax: string,
	total_discount: string,
	shipping_methods: string,
	payment_details: {
		method_id: string,
		method_title: string,
		paid: boolean
	},
	billing_address: {
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
	},
	shipping_address: {
		first_name: string,
		last_name: string,
		company: string,
		address_1: string,
		address_2: string,
		city: string,
		state: string,
		postcode: string,
		country: string
	},
	note: string,
    customer_ip: string,
    customer_user_agent: string,
    customer_id: number,
    view_order_url: string,
	line_items: LineItem[],
	shipping_lines: ShippingLine[],
	tax_lines: TaxLine[],
	fee_lines: FeeLine[],
	coupon_lines: CouponLine[],
	customer: User
}

interface LineItem{
	id: number,
	subtotal: string,
	subtotal_tax: string,
	total: string,
	total_tax: string,
	price: string,
	quantity: number,
	tax_class: string,
	name: string,
	product_id: number,
	sku: string,
	meta: MetaData[]
}

interface ShippingLine{
	id: number,
	method_title: string,
	method_id: string,
	total: string,
}

interface TaxLine{
	id: number,
	code: string,
	rate_id: number,
	title: string,
	compound: boolean,
	total: string
}

interface FeeLine{
	id: number,
	title: string,
	taxable: boolean,
	tax_class: string,
	total: string,
	total_tax: string
}

interface CouponLine{
	id: number,
	code: string,
	amount: string
}

interface MetaData{
	id: number,
	label: string,
	value: string
}

// OrderNotes model based on the structure returned by woocommerce API for order notes
export interface OrderNote{
	id: number,
	created_at: string,
	note: string,
	customer_note: boolean
}

// OrderRefund model based on the structure returned by woocommerce API for order refunds
export interface OrderRefund{
	id: number,
	created_at: string,
	amount: string,
	reason: string,
	line_items: LineItem[]
}
