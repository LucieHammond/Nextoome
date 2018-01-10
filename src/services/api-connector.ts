import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Coupon } from '../models/coupons';
import { User } from '../models/users';
import { Order, OrderNote, OrderRefund } from '../models/orders';
import { Product, ProductAttribute, ProductAttributeTerm } from '../models/products'
import { Example } from '../models/examples'


@Injectable()
export class ApiConnectorService {
	example: Example = new Example();

	apiUrl: string = 'http://lagny.nextoome.fr/wc-api/v3/';

	constructor(public http: HttpClient) {
		console.log('Hello Api Connector Service');
	}

	/*getIndex(): Observable<any> {
		return this.http.get(`${this.apiUrl}`).map(res => res.json( ));
	}*/

	getIndexWithOauth(): Observable<any> {
		return
	}

	createCoupon(data): Coupon {
		return <Coupon> this.example.coupons[0];
	}

	getCoupon(id, code=null): Coupon {
		return <Coupon> this.example.coupons[0];
	}

	getCouponsList(): Coupon[] {
		return <Coupon[]> this.example.coupons;
	}

	updateCoupon(id, data): Coupon {
		return <Coupon> this.example.coupons[0];
	}

	updateMultipleCoupons(data): Coupon[] {
		return <Coupon[]> this.example.coupons;
	}

	deleteCoupon(id): boolean {
		return true;
	}

	getCouponsCount(): number {
		return 3;
	}

	createUser(userData): User {
		let data = {"customer": userData};
		return <User> this.example.users[0];
	}

	getUser(id, email=null): User {
		return <User> this.example.users[0];
	}

	getUsersList(): User[] {
		return <User[]> this.example.users;
	}

	updateUser(id, userData): User {
		let data = {"customer": userData};
		return <User> this.example.users[0];
	}

	updateMultipleUsers(data): User[] {
		return <User[]> this.example.users;
	}

	deleteUser(id): boolean {
		return true;
	}

	getUserOrders(id): Order[] {
		return <Order[]> this.example.orders;
	}

	getUsersCount(): number {
		return 10;
	}

	createOrder(data): Order {
		return <Order> this.example.orders[0];
	}

	getOrder(id): Order {
		return <Order> this.example.orders[0];
	}

	getOrdersList(): Order[] {
		return <Order[]> this.example.orders;
	}

	updateOrder(id, data): Order {
		return <Order> this.example.orders[0];
	}

	updateMultipleOrders(data): Order[] {
		return <Order[]> this.example.orders;
	}

	deleteOrder(id): boolean {
		return true;
	}

	getOrdersCount(): number {
		return 2;
	}

	getOrderStatuses(): string[] {
		return ["Pending Payment", "Processing", "On Hold", "Completed", "Cancelled", "Refunded", "Failed"];
	}

	createNoteForOrder(order_id, data): OrderNote {
		return <OrderNote> this.example.orderNotes[0];
	}

	getOrderNote(order_id, note_id): OrderNote {
		return <OrderNote> this.example.orderNotes[0];
	}

	getNotesListFromOrder(order_id): OrderNote[] {
		return <OrderNote[]> this.example.orderNotes;
	}

	updateOrderNote(order_id, note_id, data): OrderNote {
		return <OrderNote> this.example.orderNotes[0];
	}

	deleteOrderNote(order_id, note_id): boolean {
		return true;
	}

	createRefundForOrder(order_id, data): OrderRefund {
		return <OrderRefund> this.example.orderRefunds[0];
	}

	getOrderRefund(order_id, refund_id): OrderRefund {
		return <OrderRefund> this.example.orderRefunds[0];
	}

	getRefundsListFromOrder(order_id): OrderRefund[] {
		return <OrderRefund[]> this.example.orderRefunds;
	}

	updateOrderRefund(order_id, refund_id, data): OrderRefund {
		return <OrderRefund> this.example.orderRefunds[0];
	}

	deleteOrderRefund(order_id, refund_id): boolean {
		return true;
	}

	createProduct(data): Product {
		return <Product> this.example.products[0];
	}

	getProduct(id): Product {
		return <Product> this.example.products[0];
	}

	getProductsList(): Product[] {
		return <Product[]> this.example.products;
	}

	updateProduct(id, data): Product {
		return <Product> this.example.products[0];
	}

	updateMultipleProducts(data): Product[] {
		return <Product[]> this.example.products;
	}

	deleteProduct(id): boolean {
		return true;
	}

	getProductsCount(): number {
		return 2;
	}

	getProductOrders(id): Order[] {
		return <Order[]> this.example.orders;
	}

	createProductAttribute(data): ProductAttribute {
		return this.example.productAttributes[0];
	}

	getProductAttribute(id): ProductAttribute {
		return this.example.productAttributes[0];
	}

	getProductAttributesList(): ProductAttribute[] {
		return this.example.productAttributes;
	}

	updateProductAttribute(id): ProductAttribute {
		return this.example.productAttributes[0];
	}

	deleteProductAttribute(id): boolean {
		return true;
	}

	createProductAttributeTerm(data): ProductAttributeTerm {
		return this.example.productAttributeTerms[0];
	}

	getProductAttributeTerm(id): ProductAttributeTerm {
		return this.example.productAttributeTerms[0];
	}

	getProductAttributeTermsList(): ProductAttributeTerm[] {
		return this.example.productAttributeTerms;
	}

	updateProductAttributeTerm(id): ProductAttributeTerm {
		return this.example.productAttributeTerms[0];
	}

	deleteProductAttributeTerm(id): boolean {
		return true;
	}
}
