// Sale model based on the structure returned by woocommerce API for sales
export interface Sale {
	total_sales: string,
	net_sales: string,
	average_sales: string,
	total_orders: number,
	total_items: number,
	total_tax: string,
	total_shipping: string,
	total_refunds: number,
	total_discount: number,
	totals_grouped_by: string,
	totals: any[]
}


// Seller model based on the structure returned by woocommerce API for sellers in top sellers response
export interface Seller {
	title: string,
	product_id: number,
	quantity: number
}
