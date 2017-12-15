
// User model based on the structure returned by woocommerce API for customers
export interface User {
	id: number,
	created_at: string,
	email: string,
	first_name: string,
	last_name: string,
	username: string,
	last_order_id: number,
    last_order_date: string,
    orders_count: number,
    total_spent: string,
    avatar_url: string,
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
	}
}

