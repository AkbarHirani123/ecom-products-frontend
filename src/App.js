import React from 'react';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import Home from './components/pages/Home';
import ProductDetailPage from './components/pages/ProductDetailPage';
import CartPage from './components/pages/CartPage';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninPage from './components/pages/SigninPage';
import RegisterPage from './components/pages/RegisterPage';
import { useSelector } from 'react-redux';

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const cartDetails = useSelector(state => state.cartDetails);
    const {cartItems} = cartDetails;

    return (
    <BrowserRouter>
        <div className="App">
            <div className="grid-container">
                <Header cartItems={cartItems} userInfo={userInfo} />
                <main className="main">
                    <section className="section is-medium">
                        <Route path="/signin" component={SigninPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/product/:id" component={ProductDetailPage} />
                        <Route path="/cart/:id?" component={CartPage} />
                        <Route path="/" exact={true} component={Home} />
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App;
