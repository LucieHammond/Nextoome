import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Observable } from 'rxjs/Rx';

import { Coupon } from '../models/coupons';
import { User } from '../models/users';
import { Order, OrderNote, OrderRefund } from '../models/orders';
import { Product, ProductAttribute, ProductAttributeTerm, ProductCategory, ProductShippingClass, ProductTag } from '../models/products';


@Injectable()
export class ApiConnectorService {
	// TODO: personnaliser le nom de la ville
	apiUrl: string = 'https://lagny.nextoome.fr/wp-json/wc/v2';
	username: string = 'ck_9c116cc353369069c9fdcaf3eedac6564721dba9';
	password: string = 'cs_5c445837f5381f4b8eacfae69408582c10b58efe';
	auth = {consumer_key: this.username, consumer_secret: this.password};

	constructor(public http: HTTP) {
		console.log('Hello Api Connector Service');
	}

	_get(url, parameters) {
		// Version avec Basic Auth
		return this.http.get(url, parameters, this.http.getBasicAuthHeader(this.username, this.password))
			.then(data => JSON.parse(data.data))
			.catch(error => { console.log(error.error); });

		// Version avec paramètres dans l'URL
		/*return this.http.get(url, Object.assign(parameters, this.auth), {})
			.then(data => JSON.parse(data.data))
			.catch(error => { console.log(error.error); });*/
	}

	_post(url, parameters) {
		// Version avec Basic Auth
		return this.http.post(url, parameters, this.http.getBasicAuthHeader(this.username, this.password))
			.then(data => JSON.parse(data.data))
			.catch(error => { console.log(error.error); });

		// Version avec paramètres dans l'URL
		/*let auth_url = `${url}?consumer_key=${this.username}&consumer_secret=${this.password}`;
		return this.http.post(auth_url, parameters, {})
			.then(data => JSON.parse(data.data))
			.catch(error => { console.log(error.error); });*/
	}

	_put(url, parameters) {
		// Version avec Basic Auth
		return this.http.put(url, parameters, this.http.getBasicAuthHeader(this.username, this.password))
			.then(data => JSON.parse(data.data))
			.catch(error => { console.log(error.error); });

		// Version avec paramètres dans l'URL
		/*let auth_url = `${url}?consumer_key=${this.username}&consumer_secret=${this.password}`;
		return this.http.put(auth_url, parameters, {})
			.then(data => JSON.parse(data.data))
			.catch(error => { console.log(error.error); });*/
	}

	_delete(url, parameters) {
		// Version avec Basic Auth
		return this.http.delete(url, parameters, this.http.getBasicAuthHeader(this.username, this.password))
			.then(data => JSON.parse(data.data))
			.catch(error => { console.log(error.error); });

		// Version avec paramètres dans l'URL
		/*return this.http.delete(url, Object.assign(parameters, this.auth), {})
			.then(data => JSON.parse(data.data))
			.catch(error => { console.log(error.error); });*/
	}

	testConnection(): Observable<any> {
		return Observable.fromPromise(this.http.get(this.apiUrl, {}, {})
			.then(data => data.headers)
			.catch(error => { console.log(error.error); })
		);
	}

	createCoupon(couponData): Observable<Coupon> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/coupons`, couponData));
	}

	getCoupon(id): Observable<Coupon> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/coupons/${id}`, {}));
	}

	getCouponsList(params={}): Observable<Coupon[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/coupons`, params));
	}

	updateCoupon(id, couponData): Observable<Coupon> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/coupons/${id}`, couponData));
	}

	deleteCoupon(id, force=false): Observable<Coupon> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/coupons/${id}`,{force: force}));
	}

	createUser(userData): Observable<User> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/customers`, userData,));
	}

	getUser(id): Observable<User> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/customers/${id}`, {}));
	}

	getUsersList(params={}): Observable<User[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/customers`, params));
	}

	updateUser(id, userData): Observable<User> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/customers/${id}`, userData));
	}

	deleteUser(id): Observable<User> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/customers/${id}`,{force: true}));
	}

	getUserOrders(id): Observable<Order[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/customers/${id}/orders`,{}));
	}

	createOrder(orderData): Observable<Order> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/orders`, orderData));
	}

	getOrder(id): Observable<Order> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/orders/${id}`,{}));
	}

	getOrdersList(params={}): Observable<Order[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/orders`, params));
	}

	updateOrder(id, orderData): Observable<Order> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/orders/${id}`, orderData));
	}

	deleteOrder(id, force=false): Observable<Order> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/orders/${id}`,{force: force}));
	}

	createNoteForOrder(order_id, noteData): Observable<OrderNote> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/orders/${order_id}/notes`, noteData));
	}

	getOrderNote(order_id, note_id): Observable<OrderNote> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/orders/${order_id}/notes/${note_id}`, {}));
	}

	getNotesListFromOrder(order_id, params={}): Observable<OrderNote[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/orders/${order_id}/notes`, params));
	}

	deleteOrderNote(order_id, note_id): Observable<OrderNote> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/orders/${order_id}/notes/${note_id}`,{force: true}));
	}

	createRefundForOrder(order_id, refundData): Observable<OrderRefund> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/orders/${order_id}/refunds`, refundData));
	}

	getOrderRefund(order_id, refund_id): Observable<OrderRefund> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/orders/${order_id}/refunds/${refund_id}`, {}));
	}

	getRefundsListFromOrder(order_id, params={}): Observable<OrderRefund[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/orders/${order_id}/refunds`, params));
	}

	deleteOrderRefund(order_id, refund_id): Observable<OrderRefund> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/orders/${order_id}/refunds/${refund_id}`,{force: true}));
	}

	createProduct(productData): Observable<Product> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/products`, productData));
	}

	getProduct(id): Observable<Product> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/${id}`, {}));
	}

	getProductsList(params={}): Observable<Product[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products`, params));
	}

	updateProduct(id, productData): Observable<Product> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/products/${id}`, productData));
	}

	deleteProduct(id, force=false): Observable<Product> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/products/${id}`,{force: force}));
	}

	createProductAttribute(attData): Observable<ProductAttribute> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/products/attributes`, attData));
	}

	getProductAttribute(id): Observable<ProductAttribute> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/attributes/${id}`, {}));
	}

	getProductAttributesList(): Observable<ProductAttribute[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/attributes`,{}));
	}

	updateProductAttribute(id, attData): Observable<ProductAttribute> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/products/attributes/${id}`, attData));
	}

	deleteProductAttribute(id): Observable<ProductAttribute> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/products/attributes/${id}`,{force: true}));
	}

	createProductAttributeTerm(att_id, attTermData): Observable<ProductAttributeTerm> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/products/attributes/${att_id}/terms`, attTermData));
	}

	getProductAttributeTerm(att_id, term_id): Observable<ProductAttributeTerm> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/attributes/${att_id}/terms/${term_id}`, {}));
	}

	getProductAttributeTermsList(att_id, params={}): Observable<ProductAttributeTerm[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/attributes/${att_id}/terms`, params));
	}

	updateProductAttributeTerm(att_id, term_id, attTermData): Observable<ProductAttributeTerm> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/products/attributes/${att_id}/terms/${term_id}`, attTermData));
	}

	deleteProductAttributeTerm(att_id, term_id): Observable<ProductAttributeTerm> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/products/attributes/${att_id}/terms/${term_id}`,{force: true}));
	}

	createProductCategory(categoryData): Observable<ProductCategory> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/products/categories`, categoryData));
	}

	getProductCategory(id): Observable<ProductCategory> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/categories/${id}`, {}));
	}

	getProductCategoriesList(params={}): Observable<ProductCategory[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/categories`, params));
	}

	updateProductCategory(id, categoryData): Observable<ProductCategory> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/products/categories/${id}`, categoryData));
	}

	deleteProductCategory(id): Observable<ProductCategory> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/products/categories/${id}`,{force: true}));
	}

	createProductShippingClass(classData): Observable<ProductShippingClass> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/products/shipping_classes`, classData));
	}

	getProductShippingClass(id): Observable<ProductShippingClass> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/shipping_classes/${id}`,{}));
	}

	getProductShippingClassesList(params={}): Observable<ProductShippingClass[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/shipping_classes`, params));
	}

	updateProductShippingClass(id, classData): Observable<ProductShippingClass> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/products/shipping_classes/${id}`, classData));
	}

	deleteProductShippingClass(id): Observable<ProductShippingClass> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/products/tags/${id}`,{force: true}));
	}

	createProductTag(tagData): Observable<ProductTag> {
		return Observable.fromPromise(
			this._post(`${this.apiUrl}/products/tags`, tagData));
	}

	getProductTag(id): Observable<ProductTag> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/tags/${id}`, {}));
	}

	getProductTagsList(params={}): Observable<ProductTag[]> {
		return Observable.fromPromise(
			this._get(`${this.apiUrl}/products/tags`, params));
	}

	updateProductTag(id, tagData): Observable<ProductTag> {
		return Observable.fromPromise(
			this._put(`${this.apiUrl}/products/tags/${id}`, tagData));
	}

	deleteProductTag(id): Observable<ProductTag> {
		return Observable.fromPromise(
			this._delete(`${this.apiUrl}/products/tags/${id}`,{force: true}));
	}
}
