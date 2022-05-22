import React, { Component } from 'react';
import { products } from './Products';
import './Store.css';

export default class ProductList extends Component {

    getProduct(product, index) {
        return (
            <div className={"product_div"} key={index}>
                <img className={"product_img"} src={product.image}/>
                <div className={"product"}>
                    <h3>
                        <a title={product.name + ' details'} href="/" className={"link"}>{product.name}</a>
                    </h3>
                    <p>Description: {product.description}</p>
                    <p>{product.price}€</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <h2 className={"title"}>Products</h2>
                <br/>
                <div className={"prod_object"}>
                    {
                        products.map((product, index) => {
                            return this.getProduct(product, index);
                        })
                    }
                </div>
            </>
        );
    }
}