
// Tax model based on the structure returned by woocommerce API for taxes
export interface Tax {
	id: number,
	country: string,
	state: string,
	postcode: string,
	city: string,
	rate: string,
	name: string,
	priority: number,
	compound: boolean,
	shipping: boolean,
	order: number,
	class: string
}


// TaxClass model based on the structure returned by woocommerce API for tax classes
export interface TaxClass {
	slug: string,
	name: string
}
