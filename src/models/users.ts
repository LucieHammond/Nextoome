
// User model based on the structure returned by woocommerce API for customers
export interface User {
	id: number,
	date_created: string,
	date_created_gmt: string,
	date_modified: string,
	date_modified_gmt: string,
	email: string,
	fisrt_name: string,
	last_name: string,
	role: string,
	username: string,
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
	},
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
	is_paying_customer: boolean,
	orders_count: number,
	total_spent: string,
	avatar_url: string,
	meta_data: MetaData[]
}

interface MetaData{
	id: string,
	key: string,
	value: string
}


