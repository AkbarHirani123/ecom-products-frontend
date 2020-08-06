import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";



class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);
    }
        
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {

        let menuActive = this.state.isToggleOn ? 'is-active' : '';
        const {userInfo, cartItems} = this.props;
        let user;
        if(userInfo) user = userInfo.name;
        else user = false;

        return (
            <header className="navbar header">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/"  className="navbar-item">MyCompany</Link>
                        <a className={"navbar-burger burger "+menuActive} onClick={this.handleClick}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className={'navbar-end navbar-menu '+menuActive}>
                        <div className="navbar-start"></div>
                        <div className="navbar-end">    
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link r-item">
                                Product Categories
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        Jerseys
                                    </a>
                                    <a className="navbar-item">
                                        Hats
                                    </a>
                                    <a className="navbar-item">
                                        Masks
                                    </a>
                                </div>
                            </div>
                            
                            <Link to="/cart" className="navbar-item r-item">Cart ({cartItems ? cartItems.reduce((a, c) => (Number(a) + Number(c.qty)), 0): 0})</Link>
                            
                            <div className="navbar-item">
                                <p className="control">
                                    {
                                        user ? 
                                        <span><Link to="/profile" className="is-primary is-outlined"><span>Hi {userInfo.name}!</span></Link> <Link to="/" className="is-primary content is-small">(Logout)</Link> </span>:
                                        <Link to="/signin" className="button is-primary is-outlined"><span>Sign in</span></Link>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
