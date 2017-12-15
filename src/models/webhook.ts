
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
	created_at: string,
	updated_at: string
}

// WebhookDelivery model based on the structure returned by woocommerce API for webhook deliveries
export interface WebhookDelivery{
	id: number,
	duration: string,
	summary: string,
	request_method: string,
	request_url: string,
	request_headers: any,
	request_body: string,
	response_code: string,
	response_message: string,
	response_headers: any,
	response_body: string,
	created_at: string
}
