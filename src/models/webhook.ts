
// Webhook model based on the structure returned by woocommerce API for webhooks
export interface Webhook {
	id: number,
	name: string,
	status: string,
	topic: string,
	resource: string,
	event: string,
	hooks: string[],
	delivery_url: string,
	secret: string,
	date_created: string,
	date_created_gmt: string,
	date_modified: string,
	date_modified_gmt: string
}


// WebhookDelivery model based on the structure returned by woocommerce API for webhook deliveries
export interface WebhookDelivery{
	id: number,
	duration: string,
	summary: string,
	request_url: string,
	request_headers: any[],
	request_body: string,
	response_code: string,
	response_message: string,
	response_headers: any[],
	response_body: string,
	date_created: string,
	date_created_gmt: string
}
