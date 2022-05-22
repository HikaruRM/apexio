import React, { Component } from 'react';
import { products } from './Products';
import './Store.css';

/*const NotFound= () =>{
    return (
        <div >

        </div>
    );
}

export default NotFound;*/
export default class ProductList extends Component {

    getProduct(product, index) {
        return (
            <div key={index}>
                <h3>
                    <a title={product.name + ' details'} href="/" className={"link"}>{product.name}</a>
                </h3>
                <p>Description: {product.description}  {product.price}€</p>
            </div>
        )
    }

    render() {
        return (
            <>
                <h2 className={"title"}>Products</h2>
                <br/>
                <div className={"div-text"}>
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