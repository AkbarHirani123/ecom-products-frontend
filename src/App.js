import React from 'react';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import Home from './components/pages/Home';
import ProductDetailPage from './components/pages/ProductDetailPage';
import CartPage from './components/pages/CartPage';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <div className="grid-container">
                <Header />
                <main className="main">
                    <section className="section is-medium">
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
