/**
 * Created by Lucie on 20/12/2017.
 */

import { Coupon } from './coupons'
import { User } from './users'
import { Order, OrderNote, OrderRefund } from './orders'
import { Product, ProductAttribute, ProductAttributeTerm, ProductCategory, ProductShippingClass, ProductTag }
	from './products'


export class Example {
	coupons: Coupon[] = [
		{
			"id": 529,
			"code": "new-coupon",
			"type": "percent",
			"created_at": "2015-01-20T19:05:27Z",
			"updated_at": "2015-01-20T19:05:27Z",
			"amount": "10.00",
			"individual_use": true,
			"product_ids": [],
			"exclude_product_ids": [],
			"usage_limit": null,
			"usage_limit_per_user": null,
			"limit_usage_to_x_items": 0,
			"usage_count": 0,
			"expiry_date": null,
			"enable_free_shipping": false,
			"product_category_ids": [],
			"exclude_product_category_ids": [],
			"exclude_sale_items": true,
			"minimum_amount": "100.00",
			"maximum_amount": "0.00",
			"customer_emails": [],
			"description": ""
		},
		{
			"id": 527,
			"code": "free-shipping",
			"type": "fixed_cart",
			"created_at": "2015-01-20T18:35:59Z",
			"updated_at": "2015-01-20T18:35:59Z",
			"amount": "0.00",
			"individual_use": true,
			"product_ids": [],
			"exclude_product_ids": [],
			"usage_limit": null,
			"usage_limit_per_user": null,
			"limit_usage_to_x_items": 0,
			"usage_count": 0,
			"expiry_date": null,
			"enable_free_shipping": true,
			"product_category_ids": [],
			"exclude_product_category_ids": [],
			"exclude_sale_items": true,
			"minimum_amount": "50.00",
			"maximum_amount": "0.00",
			"customer_emails": [],
			"description": ""
		},
		{
			"id": 526,
			"code": "christmas-promo",
			"type": "percent",
			"created_at": "2015-01-20T18:10:58Z",
			"updated_at": "2015-01-20T18:10:58Z",
			"amount": "10.00",
			"individual_use": true,
			"product_ids": [],
			"exclude_product_ids": [],
			"usage_limit": null,
			"usage_limit_per_user": 1,
			"limit_usage_to_x_items": 0,
			"usage_count": 0,
			"expiry_date": "2014-12-25T00:00:00Z",
			"enable_free_shipping": false,
			"product_category_ids": [],
			"exclude_product_category_ids": [],
			"exclude_sale_items": true,
			"minimum_amount": "200.00",
			"maximum_amount": "0.00",
			"customer_emails": [],
			"description": "Discount for Christmas for orders over $ 200"
		}
	];

	users: User[] = [
		{
			"id": 2,
			"created_at": "2015-01-05T18:34:19Z",
			"email": "john.doe@example.com",
			"first_name": "John",
			"last_name": "Doe",
			"username": "john.doe",
			"last_order_id": 123,
			"last_order_date": "2015-01-14T16:47:30Z",
			"orders_count": 10,
			"total_spent": "1034.58",
			"avatar_url": "https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=96",
			"billing_address": {
				"first_name": "John",
				"last_name": "Doe",
				"company": "",
				"address_1": "969 Market",
				"address_2": "",
				"city": "San Francisco",
				"state": "CA",
				"postcode": "94103",
				"country": "US",
				"email": "john.doe@example.com",
				"phone": "(555) 555-5555"
			},
			"shipping_address": {
				"first_name": "John",
				"last_name": "Doe",
				"company": "",
				"address_1": "969 Market",
				"address_2": "",
				"city": "San Francisco",
				"state": "CA",
				"postcode": "94103",
				"country": "US"
			}
		},
		{
			"id": 3,
			"created_at": "2015-01-10T14:25:39Z",
			"email": "joao.silva@example.com",
			"first_name": "João",
			"last_name": "Silva",
			"username": "joao.silva",
			"last_order_id": 120,
			"last_order_date": "2015-01-10T14:26:30Z",
			"orders_count": 1,
			"total_spent": "429.00",
			"avatar_url": "https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=96",
			"billing_address": {
				"first_name": "João",
				"last_name": "Silva",
				"company": "",
				"address_1": "Av. Brasil, 432",
				"address_2": "",
				"city": "Rio de Janeiro",
				"state": "RJ",
				"postcode": "12345-000",
				"country": "BR",
				"email": "joao.silva@example.com",
				"phone": "(55) 5555-5555"
			},
			"shipping_address": {
				"first_name": "João",
				"last_name": "Silva",
				"company": "",
				"address_1": "Av. Brasil, 432",
				"address_2": "",
				"city": "Rio de Janeiro",
				"state": "RJ",
				"postcode": "12345-000",
				"country": "BR"
			}
		}
	];

	orders: Order[] = [
		{
			"id": 645,
			"order_number": 645,
			"created_at": "2015-01-26T20:00:21Z",
			"updated_at": "2015-01-26T20:00:21Z",
			"completed_at": "2015-01-26T20:00:21Z",
			"status": "processing",
			"currency": "USD",
			"total": "79.87",
			"subtotal": "63.97",
			"total_line_items_quantity": 3,
			"total_tax": "5.90",
			"total_shipping": "10.00",
			"cart_tax": "5.40",
			"shipping_tax": "0.50",
			"total_discount": "0.00",
			"shipping_methods": "Flat Rate",
			"payment_details": {
				"method_id": "bacs",
				"method_title": "Direct Bank Transfer",
				"paid": true
			},
			"billing_address": {
				"first_name": "John",
				"last_name": "Doe",
				"company": "",
				"address_1": "969 Market",
				"address_2": "",
				"city": "San Francisco",
				"state": "CA",
				"postcode": "94103",
				"country": "US",
				"email": "john.doe@example.com",
				"phone": "(555) 555-5555"
			},
			"shipping_address": {
				"first_name": "John",
				"last_name": "Doe",
				"company": "",
				"address_1": "969 Market",
				"address_2": "",
				"city": "San Francisco",
				"state": "CA",
				"postcode": "94103",
				"country": "US"
			},
			"note": "",
			"customer_ip": "127.0.0.1",
			"customer_user_agent": "WordPress/4.1; http://example.com",
			"customer_id": 2,
			"view_order_url": "https://example.com/my-account/view-order/645",
			"line_items": [
				{
					"id": 504,
					"subtotal": "43.98",
					"subtotal_tax": "4.40",
					"total": "43.98",
					"total_tax": "4.40",
					"price": "21.99",
					"quantity": 2,
					"tax_class": "reduced-rate",
					"name": "Premium Quality",
					"product_id": 546,
					"sku": "",
					"meta": []
				},
				{
					"id": 505,
					"subtotal": "19.99",
					"subtotal_tax": "1.00",
					"total": "19.99",
					"total_tax": "1.00",
					"price": "19.99",
					"quantity": 1,
					"tax_class": null,
					"name": "Ship Your Idea",
					"product_id": 613,
					"sku": "",
					"meta": [
						{
							"key": "pa_color",
							"label": "Color",
							"value": "Black"
						}
					]
				}
			],
			"shipping_lines": [
				{
					"id": 506,
					"method_id": "flat_rate",
					"method_title": "Flat Rate",
					"total": "10.00"
				}
			],
			"tax_lines": [
				{
					"id": 507,
					"rate_id": "5",
					"code": "US-CA-TAX-1",
					"title": "Tax",
					"total": "4.40",
					"compound": false
				},
				{
					"id": 508,
					"rate_id": "4",
					"code": "US-STANDARD-1",
					"title": "Standard",
					"total": "1.50",
					"compound": false
				}
			],
			"fee_lines": [],
			"coupon_lines": [],
			"customer": {
				"id": 2,
				"created_at": "2014-11-19T18:34:19Z",
				"email": "john.doe@example.com",
				"first_name": "",
				"last_name": "",
				"username": "john.doe",
				"last_order_id": "645",
				"last_order_date": "2015-01-26T20:00:21Z",
				"orders_count": 2,
				"total_spent": "19.00",
				"avatar_url": "https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=96",
				"billing_address": {
					"first_name": "John",
					"last_name": "Doe",
					"company": "",
					"address_1": "969 Market",
					"address_2": "",
					"city": "San Francisco",
					"state": "CA",
					"postcode": "94103",
					"country": "US",
					"email": "john.doe@example.com",
					"phone": "(555) 555-5555"
				},
				"shipping_address": {
					"first_name": "John",
					"last_name": "Doe",
					"company": "",
					"address_1": "969 Market",
					"address_2": "",
					"city": "San Francisco",
					"state": "CA",
					"postcode": "94103",
					"country": "US"
				}
			}
		},
		{
			"id": 644,
			"order_number": 644,
			"created_at": "2015-01-26T19:33:42Z",
			"updated_at": "2015-01-26T19:33:42Z",
			"completed_at": "2015-01-26T19:33:42Z",
			"status": "on-hold",
			"currency": "USD",
			"total": "44.14",
			"subtotal": "30.99",
			"total_line_items_quantity": 2,
			"total_tax": "3.15",
			"total_shipping": "10.00",
			"cart_tax": "2.65",
			"shipping_tax": "0.50",
			"total_discount": "0.00",
			"shipping_methods": "Flat Rate",
			"payment_details": {
				"method_id": "bacs",
				"method_title": "Direct Bank Transfer",
				"paid": false
			},
			"billing_address": {
				"first_name": "John",
				"last_name": "Doe",
				"company": "",
				"address_1": "969 Market",
				"address_2": "",
				"city": "San Francisco",
				"state": "CA",
				"postcode": "94103",
				"country": "US",
				"email": "john.doe@example.com",
				"phone": "(555) 555-5555"
			},
			"shipping_address": {
				"first_name": "John",
				"last_name": "Doe",
				"company": "",
				"address_1": "969 Market",
				"address_2": "",
				"city": "San Francisco",
				"state": "CA",
				"postcode": "94103",
				"country": "US"
			},
			"note": "",
			"customer_ip": "127.0.0.1",
			"customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.91 Safari/537.36",
			"customer_id": 2,
			"view_order_url": "https://example.com/my-account/view-order/644",
			"line_items": [
				{
					"id": 499,
					"subtotal": "21.99",
					"subtotal_tax": "2.20",
					"total": "21.99",
					"total_tax": "2.20",
					"price": "21.99",
					"quantity": 1,
					"tax_class": "reduced-rate",
					"name": "Premium Quality",
					"product_id": 546,
					"sku": "",
					"meta": []
				},
				{
					"id": 500,
					"subtotal": "9.00",
					"subtotal_tax": "0.45",
					"total": "9.00",
					"total_tax": "0.45",
					"price": "9.00",
					"quantity": 1,
					"tax_class": null,
					"name": "Woo Album #4",
					"product_id": 96,
					"sku": "",
					"meta": []
				}
			],
			"shipping_lines": [
				{
					"id": 501,
					"method_id": "flat_rate",
					"method_title": "Flat Rate",
					"total": "10.00"
				}
			],
			"tax_lines": [
				{
					"id": 502,
					"rate_id": "5",
					"code": "US-CA-TAX-1",
					"title": "Tax",
					"total": "4.40",
					"compound": false
				},
				{
					"id": 503,
					"rate_id": "4",
					"code": "US-STANDARD-1",
					"title": "Standard",
					"total": "1.50",
					"compound": false
				}
			],
			"fee_lines": [],
			"coupon_lines": [],
			"customer": {
				"id": 2,
				"created_at": "2014-11-19T18:34:19Z",
				"email": "john.doe@example.com",
				"first_name": "",
				"last_name": "",
				"username": "john.doe",
				"last_order_id": "645",
				"last_order_date": "2015-01-26T20:00:21Z",
				"orders_count": 2,
				"total_spent": "19.00",
				"avatar_url": "https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=96",
				"billing_address": {
					"first_name": "John",
					"last_name": "Doe",
					"company": "",
					"address_1": "969 Market",
					"address_2": "",
					"city": "San Francisco",
					"state": "CA",
					"postcode": "94103",
					"country": "US",
					"email": "john.doe@example.com",
					"phone": "(555) 555-5555"
				},
				"shipping_address": {
					"first_name": "John",
					"last_name": "Doe",
					"company": "",
					"address_1": "969 Market",
					"address_2": "",
					"city": "San Francisco",
					"state": "CA",
					"postcode": "94103",
					"country": "US"
				}
			}
		}
	];

	orderNotes: OrderNote[] = [
		{
			"id": "416",
			"created_at": "2015-01-26T20:56:44Z",
			"note": "Order ok!!!",
			"customer_note": false
		},
		{
			"id": "415",
			"created_at": "2015-01-26T20:16:14Z",
			"note": "Order status changed from Processing to Completed.",
			"customer_note": false
		},
		{
			"id": "412",
			"created_at": "2015-01-26T20:00:21Z",
			"note": "Order item stock reduced successfully.",
			"customer_note": false
		},
		{
			"id": "411",
			"created_at": "2015-01-26T20:00:09Z",
			"note": "Order status changed from Pending Payment to Processing.",
			"customer_note": false
		}
	];

	orderRefunds: OrderRefund[] = [
		{
			"id": 649,
			"created_at": "2015-01-26T19:29:32Z",
			"amount": "10.00",
			"reason": "",
			"line_items": []
		},
		{
			"id": 647,
			"created_at": "2015-01-26T19:19:06Z",
			"amount": "21.99",
			"reason": "",
			"line_items": [
				{
					"id": 514,
					"subtotal": "-21.99",
					"subtotal_tax": "0.00",
					"total": "-21.99",
					"total_tax": "0.00",
					"price": "-21.99",
					"quantity": 1,
					"tax_class": "reduced-rate",
					"name": "Premium Quality",
					"product_id": 546,
					"sku": "",
					"meta": []
				},
				{
					"id": 515,
					"subtotal": "0.00",
					"subtotal_tax": "0.00",
					"total": "0.00",
					"total_tax": "0.00",
					"price": "0.00",
					"quantity": 0,
					"tax_class": null,
					"name": "Ship Your Idea",
					"product_id": 613,
					"sku": "",
					"meta": []
				}
			]
		}
	];

	products: Product[] = [
		{
			"title": "Premium Quality",
			"id": 546,
			"created_at": "2015-01-22T19:46:16Z",
			"updated_at": "2015-01-22T19:46:16Z",
			"type": "simple",
			"status": "publish",
			"downloadable": false,
			"virtual": false,
			"permalink": "https://example.com/product/premium-quality/",
			"sku": "",
			"price": "21.99",
			"regular_price": "21.99",
			"sale_price": null,
			"price_html": "<span class=\"amount\">&#36;&nbsp;21.99</span>",
			"taxable": true,
			"tax_status": "taxable",
			"tax_class": "",
			"managing_stock": false,
			"stock_quantity": 0,
			"in_stock": true,
			"backorders_allowed": false,
			"backordered": false,
			"sold_individually": false,
			"purchaseable": true,
			"featured": false,
			"visible": true,
			"catalog_visibility": "visible",
			"on_sale": false,
			"weight": null,
			"dimensions": {
				"length": "",
				"width": "",
				"height": "",
				"unit": "cm"
			},
			"shipping_required": true,
			"shipping_taxable": true,
			"shipping_class": "",
			"shipping_class_id": null,
			"description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
			"short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
			"reviews_allowed": true,
			"average_rating": "0.00",
			"rating_count": 0,
			"related_ids": [
				37,
				47,
				31,
				19,
				22
			],
			"upsell_ids": [],
			"cross_sell_ids": [],
			"parent_id": 0,
			"categories": [
				"Clothing",
				"T-shirts"
			],
			"tags": [],
			"images": [
				{
					"id": 547,
					"created_at": "2015-01-22T19:46:16Z",
					"updated_at": "2015-01-22T19:46:16Z",
					"src": "http://example.com/wp-content/uploads/2015/01/premium-quality-front.jpg",
					"title": "",
					"alt": "",
					"position": 0
				},
				{
					"id": 548,
					"created_at": "2015-01-22T19:46:17Z",
					"updated_at": "2015-01-22T19:46:17Z",
					"src": "http://example.com/wp-content/uploads/2015/01/premium-quality-back.jpg",
					"title": "",
					"alt": "",
					"position": 1
				}
			],
			"featured_src": "http://example.com/wp-content/uploads/2015/01/premium-quality-front.jpg",
			"attributes": [],
			"downloads": [],
			"download_limit": 0,
			"download_expiry": 0,
			"download_type": "",
			"purchase_note": "",
			"total_sales": 0,
			"variations": [],
			"parent": [],
			"grouped_products": [],
			"menu_order": 0
		},
		{
			"title": "Ship Your Idea",
			"id": 604,
			"created_at": "2015-01-22T20:37:14Z",
			"updated_at": "2015-01-22T20:37:14Z",
			"type": "variable",
			"status": "publish",
			"downloadable": false,
			"virtual": false,
			"permalink": "https://example/product/ship-your-idea/",
			"sku": "",
			"price": "19.99",
			"regular_price": "0.00",
			"sale_price": null,
			"price_html": "<span class=\"amount\">&#36;&nbsp;19.99</span>",
			"taxable": true,
			"tax_status": "taxable",
			"tax_class": "",
			"managing_stock": false,
			"stock_quantity": 0,
			"in_stock": true,
			"backorders_allowed": false,
			"backordered": false,
			"sold_individually": false,
			"purchaseable": true,
			"featured": false,
			"visible": true,
			"catalog_visibility": "visible",
			"on_sale": false,
			"weight": null,
			"dimensions": {
				"length": "",
				"width": "",
				"height": "",
				"unit": "cm"
			},
			"shipping_required": true,
			"shipping_taxable": true,
			"shipping_class": "",
			"shipping_class_id": null,
			"description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
			"short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
			"reviews_allowed": true,
			"average_rating": "0.00",
			"rating_count": 0,
			"related_ids": [
				40,
				37,
				47,
				577,
				34
			],
			"upsell_ids": [],
			"cross_sell_ids": [],
			"parent_id": 0,
			"categories": [
				"Clothing",
				"T-shirts"
			],
			"tags": [],
			"images": [
				{
					"id": 605,
					"created_at": "2015-01-22T20:37:14Z",
					"updated_at": "2015-01-22T20:37:14Z",
					"src": "http://example/wp-content/uploads/2015/01/ship-your-idea-black-front.jpg",
					"title": "",
					"alt": "",
					"position": 0
				},
				{
					"id": 606,
					"created_at": "2015-01-22T20:37:15Z",
					"updated_at": "2015-01-22T20:37:15Z",
					"src": "http://example/wp-content/uploads/2015/01/ship-your-idea-black-back.jpg",
					"title": "",
					"alt": "",
					"position": 1
				},
				{
					"id": 607,
					"created_at": "2015-01-22T20:37:15Z",
					"updated_at": "2015-01-22T20:37:15Z",
					"src": "http://example/wp-content/uploads/2015/01/ship-your-idea-green-front.jpg",
					"title": "",
					"alt": "",
					"position": 2
				},
				{
					"id": 608,
					"created_at": "2015-01-22T20:37:16Z",
					"updated_at": "2015-01-22T20:37:16Z",
					"src": "http://example/wp-content/uploads/2015/01/ship-your-idea-green-back.jpg",
					"title": "",
					"alt": "",
					"position": 3
				}
			],
			"featured_src": "http://example/wp-content/uploads/2015/01/ship-your-idea-black-front.jpg",
			"attributes": [
				{
					"name": "Color",
					"slug": "color",
					"position": 0,
					"visible": false,
					"variation": true,
					"options": [
						"Black",
						"Green"
					]
				}
			],
			"downloads": [],
			"download_limit": 0,
			"download_expiry": 0,
			"download_type": "",
			"purchase_note": "",
			"total_sales": 0,
			"variations": [
				{
					"id": 609,
					"created_at": "2015-01-22T20:37:14Z",
					"updated_at": "2015-01-22T20:37:14Z",
					"downloadable": false,
					"virtual": false,
					"permalink": "https://example/product/ship-your-idea-10/?attribute_pa_color=black",
					"sku": "",
					"price": "19.99",
					"regular_price": "19.99",
					"sale_price": null,
					"taxable": true,
					"tax_status": "taxable",
					"tax_class": "",
					"managing_stock": false,
					"stock_quantity": 0,
					"in_stock": true,
					"backordered": false,
					"purchaseable": true,
					"visible": true,
					"on_sale": false,
					"weight": null,
					"dimensions": {
						"length": "",
						"width": "",
						"height": "",
						"unit": "cm"
					},
					"shipping_class": "",
					"shipping_class_id": null,
					"image": [
						{
							"id": 610,
							"created_at": "2015-01-22T20:37:18Z",
							"updated_at": "2015-01-22T20:37:18Z",
							"src": "http://example/wp-content/uploads/2015/01/ship-your-idea-black-front.jpg",
							"title": "",
							"alt": "",
							"position": 0
						}
					],
					"attributes": [
						{
							"name": "Color",
							"slug": "color",
							"option": "black"
						}
					],
					"downloads": [],
					"download_limit": 0,
					"download_expiry": 0
				},
				{
					"id": 611,
					"created_at": "2015-01-22T20:37:14Z",
					"updated_at": "2015-01-22T20:37:14Z",
					"downloadable": false,
					"virtual": false,
					"permalink": "https://example/product/ship-your-idea-10/?attribute_pa_color=green",
					"sku": "",
					"price": "19.99",
					"regular_price": "19.99",
					"sale_price": null,
					"taxable": true,
					"tax_status": "taxable",
					"tax_class": "",
					"managing_stock": false,
					"stock_quantity": 0,
					"in_stock": true,
					"backordered": false,
					"purchaseable": true,
					"visible": true,
					"on_sale": false,
					"weight": null,
					"dimensions": {
						"length": "",
						"width": "",
						"height": "",
						"unit": "cm"
					},
					"shipping_class": "",
					"shipping_class_id": null,
					"image": [
						{
							"id": 612,
							"created_at": "2015-01-22T20:37:19Z",
							"updated_at": "2015-01-22T20:37:19Z",
							"src": "http://example/wp-content/uploads/2015/01/ship-your-idea-green-front.jpg",
							"title": "",
							"alt": "",
							"position": 0
						}
					],
					"attributes": [
						{
							"name": "Color",
							"slug": "color",
							"option": "green"
						}
					],
					"downloads": [],
					"download_limit": 0,
					"download_expiry": 0
				}
			],
			"parent": [],
			"grouped_products": [],
			"menu_order": 0
		}
	];

	productAttributes: ProductAttribute[] = [
		{
			"id": 1,
			"name": "Color",
			"slug": "pa_color",
			"type": "select",
			"order_by": "menu_order",
			"has_archives": true
		},
		{
			"id": 2,
			"name": "Size",
			"slug": "pa_size",
			"type": "select",
			"order_by": "menu_order",
			"has_archives": false
		}
	];

	productAttributeTerms: ProductAttributeTerm[] = [
		{
			"id": 18,
			"slug": "black",
			"name": "Black",
			"count": 5
		},
		{
			"id": 20,
			"slug": "blue",
			"name": "Blue",
			"count": 4
		},
		{
			"id": 19,
			"slug": "green",
			"name": "Green",
			"count": 4
		},
		{
			"id": 24,
			"slug": "pink",
			"name": "Pink",
			"count": 3
		},
		{
			"id": 22,
			"slug": "red",
			"name": "Red",
			"count": 3
		},
		{
			"id": 21,
			"slug": "white",
			"name": "White",
			"count": 3
		},
		{
			"id": 23,
			"slug": "yellow",
			"name": "Yellow",
			"count": 3
		}
	];

	productCategories: ProductCategory[] = [
		{
			"id": 15,
			"name": "Albums",
			"slug": "albums",
			"parent": 11,
			"description": "",
			"display": "default",
			"image": "",
			"count": 4
		},
		{
			"id": 9,
			"name": "Clothing",
			"slug": "clothing",
			"parent": 0,
			"description": "",
			"display": "default",
			"image": "",
			"count": 23
		},
		{
			"id": 10,
			"name": "Hoodies",
			"slug": "hoodies",
			"parent": 9,
			"description": "",
			"display": "default",
			"image": "",
			"count": 6
		},
		{
			"id": 11,
			"name": "Music",
			"slug": "music",
			"parent": 0,
			"description": "",
			"display": "default",
			"image": "",
			"count": 6
		},
		{
			"id": 12,
			"name": "Posters",
			"slug": "posters",
			"parent": 0,
			"description": "",
			"display": "default",
			"image": "",
			"count": 5
		},
		{
			"id": 13,
			"name": "Singles",
			"slug": "singles",
			"parent": 11,
			"description": "",
			"display": "default",
			"image": "",
			"count": 2
		},
		{
			"id": 14,
			"name": "T-shirts",
			"slug": "t-shirts",
			"parent": 9,
			"description": "",
			"display": "default",
			"image": "",
			"count": 17
		}
	];

	productShippingClasses: ProductShippingClass[] = [
		{
			"id": 30,
			"name": "Express",
			"slug": "express",
			"parent": 0,
			"description": "",
			"count": 1
		},
		{
			"id": 35,
			"name": "Priority",
			"slug": "priority",
			"parent": 0,
			"description": "",
			"count": 0
		}
	];

	productTags: ProductTag[] = [
		{
			"id": 37,
			"name": "Leather Shoes",
			"slug": "leather-shoes",
			"description": "",
			"count": 0
		},
		{
			"id": 38,
			"name": "Oxford Shoes",
			"slug": "oxford-shoes",
			"description": "",
			"count": 0
		}
	];

}
