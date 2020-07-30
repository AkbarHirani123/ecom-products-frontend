import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import data from './data';
import './ProductDetailPage.css';

class ProductDeailPage extends Component {
    largeImage(img) {
        return img.slice(0, -3)+"560";
    }

    render() {
        const product = data.products.find(x => x._id === this.props.match.params.id);

        return (
            <div className="container pdp">
                <div className="back">
                    <Link to="/" className="is-primary">&#x2039; Back to results</Link>
                </div>
                <h1 className="title">{product.name}</h1>
                <section className="section product-details">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-three-fifths">
                            <img src={this.largeImage(product.img)} alt={product.name} />
                        </div>
                        <div className="column is-two-fifths">
                            <div className="container">
                                
                                <ul>
                                    <li><h3 className="title is-6">{product.name}</h3></li>
                                    <li><p className="is-6"><b>Team: </b>{product.team}</p></li>
                                    <li><p className="is-6"><b>Description: </b>{product.category}</p></li>
                                    <li><p>{product.rating} Stars</p></li>
                                </ul>
                                <hr />
                                    <ul>
                                        <li><p className=" is-5">Price: <span className="title is-5">${product.price}</span></p></li>
                                        <li>Status: {product.status}</li>
                                        <li> 
                                            <div className="field is-horizontal">
                                                <div className="field-label is-normal has-text-left">
                                                    <label className="label">Qty:</label>
                                                </div>
                                                <div className="field-body">
                                                    <div className="control">
                                                        <div className="select is-primary">
                                                            <select>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><button className="button is-fullwidth is-primary">Add To Cart</button></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </section>
          </div>  
        );
    }
}

export default ProductDeailPage;