import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from './checkout/CheckoutSteps';
import './CartCheckoutCSS.css';

function ReviewPage(props) {

    const cartDetails = useSelector(state => state.cartDetails);
    const { cartItems, shipping, payment } = cartDetails;
    console.log(shipping);
    if(!shipping.address) {
        props.history.push("/shipping");
    } else if(!payment.paymentMethod) {
        props.history.push("/payment");
    }

    const subtotalPrice = cartItems.reduce((a, c) => (Number(a) + (Number(c.price) * Number(c.qty))).toFixed(2), 0);
    const shippingPrice = subtotalPrice > 100 ? Number(0.00).toFixed(2) : Number(10.00).toFixed(2);
    const taxPrice = (0.15 * subtotalPrice).toFixed(2);
    const totalPrice = (Number(subtotalPrice) + Number(shippingPrice) + Number(taxPrice)).toFixed(2);

    const dispatch = useDispatch();


    useEffect(() => {
        
    }, []);

    const handleSubmitOrder = () => {
        props.history.push("/signin?redirect=shipping");
    }

    return <div className="container review">
        <section className="section review-order-details">
            <div className="columns is-centered is-multiline is-mobile">
                <div className="column is-four-fifths-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
                    <section className="section">
                        <div className="container">
                            <CheckoutSteps step={4} />
                        </div>
                    </section>
                </div>
            </div>
            <div className="columns is-multiline is-mobile">
                <div className="column is-three-quarter">
                    <div className="container">
                        <h3 className="title">Shipping</h3>
                        <div>
                            <p className="heading is-size-7 mb-3">Shipping Address</p>
                            {shipping.address}, {shipping.city}<br />
                            {shipping.zipCode}, {shipping.country}
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="title">Payment</h3>
                        <div>
                            <p className="heading is-size-7 mb-3">Shipping Method:</p>
                            {payment.paymentMethod}
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="title">Order Items</h3>
                        <div className="cart-list-container">
                            {
                                cartItems.length === 0 ?
                                <div className="empty">
                                    Your cart is empty.
                                </div>
                                :
                                cartItems.map( item =>
                                    <div key={item.product}>
                                        <div className="columns">
                                            <div className="column is-one-fifths">
                                                <Link to={"/product/"+item.product}><img src={item.img} alt={item.name} /></Link>
                                            </div>
                                            <div className="column is-three-fifths">
                                                <Link to={"/product/"+item.product}><b className="is-6">{item.name}</b></Link><br /><br />
                                                <div className="field is-horizontal">
                                                    <div className="field-label is-normal has-text-left">
                                                        <label className="label">Qty: <span>{item.qty}</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-one-fifths">
                                                <h4 className="title is-5">${(item.qty*item.price).toFixed(2)}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="column is-one-quarter is-flex">
                    <div className="container color-background">
                        <button onClick={handleSubmitOrder} type="button" className="button is-primary has-text-white is-fullwidth mb-5" disabled={cartItems.length === 0}>Submit Order</button>
                        
                        <h3 className="title is-4">
                            Order Summary
                        </h3>
                        <table className="has-background-none">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>${subtotalPrice}</td>
                                </tr>
                                <tr>
                                    <td>Shipping:</td>
                                    <td>${shippingPrice}</td>
                                </tr>
                                <tr>
                                    <td>Tax:</td>
                                    <td>${taxPrice}</td>
                                </tr>
                                <tr>
                                    <td><h4 className="is-size-5 is-primary has-text-weight-bold">Order Total:</h4></td>
                                    <td><h4 className="is-size-5 is-primary has-text-weight-bold">${totalPrice}</h4></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
                
}

export default ReviewPage;