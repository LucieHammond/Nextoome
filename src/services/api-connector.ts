import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Observable } from 'rxjs/Rx';

import { Coupon } from '../models/coupons';
import { User } from '../models/users';
import { Order, OrderNote, OrderRefund } from '../models/orders';
import { Product, ProductAttribute, ProductAttributeTerm, ProductCategory, ProductShippingClass, ProductTag } from '../models/products';


@Injectable()
export class ApiConnectorService {
	apiUrl: string = 'https://lagny.nextoome.fr/wp-json/wc/v2';
	username: string = 'ck_9c116cc353369069c9fdcaf3eedac6564721dba9';
	password: string = 'cs_5c445837f5381f4b8eacfae69408582c10b58efe';
	auth = {consumer_key: this.username, consumer_secret: this.password};

	constructor(public http: HTTP) {
		console.log('Hello Api Connector Service');
	}

	getIndex(): Observable<any> {
		return Observable.fromPromise(this.http.get(this.apiUrl, {}, {}).then(data => JSON.parse(data.data)));
	}

	createCoupon(couponData): Observable<Coupon> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/coupons`, couponData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getCoupon(id): Observable<Coupon> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/coupons/${id}`, {}, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getCouponsList(params={}): Observable<Coupon[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/coupons`, params, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateCoupon(id, couponData): Observable<Coupon> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/coupons/${id}`, couponData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteCoupon(id, force=false): Observable<Coupon> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/coupons/${id}`, {force: force},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createUser(userData): Observable<User> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/customers`, userData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getUser(id): Observable<User> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/customers/${id}`, {}, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getUsersList(params={}): Observable<User[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/customers`, params, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateUser(id, userData): Observable<User> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/customers/${id}`, userData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log('bite'); console.log(error.error); }));
	}

	deleteUser(id): Observable<User> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/customers/${id}`, {force: true},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createOrder(orderData): Observable<Order> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/orders`, orderData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getOrder(id): Observable<Order> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/orders/${id}`, {}, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getOrdersList(params={}): Observable<Order[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/orders`, params, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateOrder(id, orderData): Observable<Order> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/orders/${id}`, orderData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteOrder(id, force=false): Observable<Order> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/orders/${id}`, {force: force},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createNoteForOrder(order_id, noteData): Observable<OrderNote> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/orders/${order_id}/notes`, noteData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getOrderNote(order_id, note_id): Observable<OrderNote> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/orders/${order_id}/notes/${note_id}`, {},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getNotesListFromOrder(order_id, params={}): Observable<OrderNote[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/orders/${order_id}/notes`, params,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteOrderNote(order_id, note_id): Observable<OrderNote> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/orders/${order_id}/notes/${note_id}`, {force: true},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createRefundForOrder(order_id, refundData): Observable<OrderRefund> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/orders/${order_id}/refunds`, refundData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getOrderRefund(order_id, refund_id): Observable<OrderRefund> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/orders/${order_id}/refunds/${refund_id}`, {},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getRefundsListFromOrder(order_id, params={}): Observable<OrderRefund[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/orders/${order_id}/refunds`, params,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteOrderRefund(order_id, refund_id): Observable<OrderRefund> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/orders/${order_id}/refunds/${refund_id}`, {force: true},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createProduct(productData): Observable<Product> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/products`, productData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProduct(id): Observable<Product> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/${id}`, this.auth, {})
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductsList(params={}): Observable<Product[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products`, this.auth, {})
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateProduct(id, productData): Observable<Product> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/products/${id}`, productData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteProduct(id, force=false): Observable<Product> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/products/${id}`, {force: force},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createProductAttribute(attData): Observable<ProductAttribute> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/products/attributes`, attData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductAttribute(id): Observable<ProductAttribute> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/attributes/${id}`, {},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductAttributesList(): Observable<ProductAttribute[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/attributes`, {}, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateProductAttribute(id, attData): Observable<ProductAttribute> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/products/attributes/${id}`, attData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteProductAttribute(id): Observable<ProductAttribute> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/products/attributes/${id}`, {force: true},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createProductAttributeTerm(att_id, attTermData): Observable<ProductAttributeTerm> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/products/attributes/${att_id}/terms`, attTermData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductAttributeTerm(att_id, term_id): Observable<ProductAttributeTerm> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/attributes/${att_id}/terms/${term_id}`, {},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductAttributeTermsList(att_id, params={}): Observable<ProductAttributeTerm[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/attributes/${att_id}/terms`, params,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateProductAttributeTerm(att_id, term_id, attTermData): Observable<ProductAttributeTerm> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/products/attributes/${att_id}/terms/${term_id}`, attTermData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteProductAttributeTerm(att_id, term_id): Observable<ProductAttributeTerm> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/products/attributes/${att_id}/terms/${term_id}`, {force: true},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createProductCategory(categoryData): Observable<ProductCategory> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/products/categories`, categoryData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductCategory(id): Observable<ProductCategory> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/categories/${id}`, {},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductCategoriesList(params={}): Observable<ProductCategory[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/categories`, params, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateProductCategory(id, categoryData): Observable<ProductCategory> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/products/categories/${id}`, categoryData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteProductCategory(id): Observable<ProductCategory> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/products/categories/${id}`, {force: true},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createProductShippingClass(classData): Observable<ProductShippingClass> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/products/shipping_classes`, classData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductShippingClass(id): Observable<ProductShippingClass> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/shipping_classes/${id}`, {},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductShippingClassesList(params={}): Observable<ProductShippingClass[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/shipping_classes`, params,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateProductShippingClass(id, classData): Observable<ProductShippingClass> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/products/shipping_classes/${id}`, classData,
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteProductShippingClass(id): Observable<ProductShippingClass> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/products/tags/${id}`, {force: true},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	createProductTag(tagData): Observable<ProductTag> {
		return Observable.fromPromise(
			this.http.post(`${this.apiUrl}/products/tags`, tagData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductTag(id): Observable<ProductTag> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/tags/${id}`, {}, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	getProductTagsList(params={}): Observable<ProductTag[]> {
		return Observable.fromPromise(
			this.http.get(`${this.apiUrl}/products/tags`, params, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	updateProductTag(id, tagData): Observable<ProductTag> {
		return Observable.fromPromise(
			this.http.put(`${this.apiUrl}/products/tags/${id}`, tagData, this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}

	deleteProductTag(id): Observable<ProductTag> {
		return Observable.fromPromise(
			this.http.delete(`${this.apiUrl}/products/tags/${id}`, {force: true},
				this.http.getBasicAuthHeader(this.username, this.password))
				.then(data => JSON.parse(data.data))
				.catch(error => { console.log(error.error); }));
	}
}
