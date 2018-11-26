import React, { Component } from 'react';
import Nav from './Nav.js';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="bar">
                    <a href="">Sick Fits</a>
                </div>
                <Nav />
                <div className="sub-bar">
                    <p>Search</p>
                </div>
                <div>
                    <p>Cart</p>
                </div>
            </div>
        )
    }
}
