import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Coupon } from '../models/coupons';
import { User } from '../models/users';
import { Order } from '../models/orders';

@Injectable()
export class ApiConnectorService {
	coupons = [
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
	users = [
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
	orders = [
		{
			"id": 531,
			"order_number": 531,
			"created_at": "2015-01-21T12:02:13Z",
			"updated_at": "2015-01-21T12:02:13Z",
			"completed_at": "2015-01-21T12:02:13Z",
			"status": "on-hold",
			"currency": "USD",
			"total": "30.00",
			"subtotal": "20.00",
			"total_line_items_quantity": 1,
			"total_tax": "0.00",
			"total_shipping": "10.00",
			"cart_tax": "0.00",
			"shipping_tax": "0.00",
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
			"customer_user_agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0",
			"customer_id": 2,
			"view_order_url": "https://example.com/my-account/view-order/531",
			"line_items": [
				{
					"id": 417,
					"subtotal": "20.00",
					"subtotal_tax": "0.00",
					"total": "20.00",
					"total_tax": "0.00",
					"price": "20.00",
					"quantity": 1,
					"tax_class": null,
					"name": "Premium Quality",
					"product_id": 19,
					"sku": "",
					"meta": []
				}
			],
			"shipping_lines": [
				{
					"id": 418,
					"method_id": "flat_rate",
					"method_title": "Flat Rate",
					"total": "10.00"
				}
			],
			"tax_lines": [],
			"fee_lines": [],
			"coupon_lines": [],
			"customer": {
				"id": 2,
				"created_at": "2014-11-19T18:34:19Z",
				"email": "john.doe@example.com",
				"first_name": "",
				"last_name": "",
				"username": "john.doe",
				"last_order_id": "531",
				"last_order_date": "2015-01-21T12:02:13Z",
				"orders_count": 1,
				"total_spent": "0.00",
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

	apiUrl: string = 'http://lagny.nextoome.fr/wc-api/v3/';

	constructor(public http: HttpClient) {
		console.log('Hello Api Connector Service');
	}

getIndex(): Observable<any> {
		return this.http.get(`${this.apiUrl}`).map(res => res.json());
	}

	getIndexWithOauth(): Observable<any> {

	}

	createCoupon(data): Coupon {
		return <Coupon> this.coupons[0];
	}

	getCoupon(id): Coupon {
		return <Coupon> this.coupons[0];
	}

	getCouponsList(): Coupon[] {
		return <Coupon[]> this.coupons;
	}

	updateCoupon(id, data): Coupon {
		return <Coupon> this.coupons[0];
	}

	updateMultipleCoupons(data): Coupon[] {
		return <Coupon[]> this.coupons;
	}

	deleteCoupon(id): void {
	}

	getCouponsCount(): number {
		return 3;
	}

	createUser(): User {
		return this.users[0];
	}

	getUser(id, email=null): User {
		return <User> this.users[0];
	}

	getUsersList(): User[] {
		return <User[]> this.users;
	}

	updateUser(id, data): User {
		return <User> this.users[0];
	}

	updateMultipleUsers(data): User[] {
		return <User[]> this.users;
	}

	deleteUser(id): void {
	}

	getUserOrders(id): Order[] {
		return this.orders;
	}

	getUsersCount(): number {
		return 10;
	}

}
