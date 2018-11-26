import React, { Component } from 'react';
import Header from './Header.js';
import Meta from './Meta.js';   

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {/* This is what allows us to display our pages, like home and sell, but how do they end up in this.props.children?*/}
        {this.props.children}
      </div>
    )
  }
}
