import React, { Component } from 'react';
import data from './data';
import ProductCard from '../common/ProductCard';

class Home extends Component {
    render() {
        console.log(data.products);
        return (
            <div className="container home">
                <h1 className="title is-2">Products</h1>
                <div className="columns is-multiline is-mobile">
                    {
                        data.products.map(product =>
                            <ProductCard key={product._id} product={product} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Home;