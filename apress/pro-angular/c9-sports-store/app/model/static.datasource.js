"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_model_1 = require("./product.model");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
var StaticDataSource = (function () {
    function StaticDataSource() {
        this.products = [
            new product_model_1.Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
            new product_model_1.Product(2, "Product 2", "Category 1", "Product 1 (Category 1)", 100),
            new product_model_1.Product(3, "Product 3", "Category 1", "Product 1 (Category 1)", 100),
            new product_model_1.Product(4, "Product 4", "Category 1", "Product 1 (Category 1)", 100),
            new product_model_1.Product(5, "Product 5", "Category 1", "Product 1 (Category 1)", 100),
            new product_model_1.Product(6, "Product 6", "Category 2", "Product 1 (Category 2)", 100),
            new product_model_1.Product(7, "Product 7", "Category 2", "Product 1 (Category 2)", 100),
            new product_model_1.Product(8, "Product 8", "Category 2", "Product 1 (Category 2)", 100),
            new product_model_1.Product(9, "Product 9", "Category 2", "Product 1 (Category 2)", 100),
            new product_model_1.Product(10, "Product 10", "Category 2", "Product 1 (Category 2)", 100),
            new product_model_1.Product(11, "Product 11", "Category 3", "Product 1 (Category 3)", 100),
            new product_model_1.Product(12, "Product 12", "Category 3", "Product 1 (Category 3)", 100),
            new product_model_1.Product(13, "Product 13", "Category 3", "Product 1 (Category 3)", 100),
            new product_model_1.Product(14, "Product 14", "Category 3", "Product 1 (Category 3)", 100),
            new product_model_1.Product(15, "Product 15", "Category 3", "Product 1 (Category 3)", 100)
        ];
        this.orders = [];
    }
    StaticDataSource.prototype.getProducts = function () {
        return Observable_1.Observable.from([this.products]);
    };
    StaticDataSource.prototype.saveProduct = function (product) {
        return Observable_1.Observable.from([product]);
    };
    StaticDataSource.prototype.updateProduct = function (product) {
        return Observable_1.Observable.from([product]);
    };
    StaticDataSource.prototype.deleteProduct = function (id) {
        return Observable_1.Observable.from([this.products.find(function (p) { return p.id == id; })]);
    };
    StaticDataSource.prototype.getOrders = function () {
        return Observable_1.Observable.from([this.orders]);
    };
    StaticDataSource.prototype.saveOrder = function (order) {
        // console.log(JSON.stringify(order))
        return Observable_1.Observable.from([order]);
    };
    StaticDataSource.prototype.updateOrder = function (order) {
        return Observable_1.Observable.from([order]);
    };
    StaticDataSource.prototype.deleteOrder = function (id) {
        return Observable_1.Observable.from([this.orders.find(function (o) { return o.id == id; })]);
    };
    return StaticDataSource;
}());
StaticDataSource = __decorate([
    core_1.Injectable()
], StaticDataSource);
exports.StaticDataSource = StaticDataSource;
