import React, { Component } from 'react';
import Category from './Category';
import data from './data'
import TiDocumentText from 'react-icons/lib/ti/document-text';
import Product from '../Products/Product'

import './Menu.css'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: data
    }
  }

  render() {
    const categories = this.state.categories.map((e,i)=> {
      return (
        <Category key={i} title ={e.title} description={e.description} items={e.items} image={e.image} />
      )
    })
    return (
      <div>
        <section className="hero">
          <article>
            <h1>our menu</h1>
          </article>
        </section>
        <div className={"menu-downloads"}>
          <a href="#"><TiDocumentText className="file-icon"/><span>view full menu</span></a>
          <a href="#"><TiDocumentText className="file-icon"/><span>view downtown menu</span></a>
          <a href="#"><TiDocumentText className="file-icon"/><span>view Atlanta menu</span></a>
          <a href="#"><TiDocumentText className="file-icon"/><span>view orange park menu</span></a>
          <a href="#"><TiDocumentText className="file-icon"/><span>view coral springs menu</span></a>
        </div>
        {categories}
        <div className="sauces">
          <h2>From our family to yours</h2>
          <a><button className=" btn btn-dark">SEE ALL SAUCES</button></a>
        </div>
        <Product heading="4R gift cards" price="$10.00--$100.00" bg="https://4rsmokehouse.com/wp-content/uploads/shopp/cache_1024_1024_0_0_80_16777215_GiftCard_web.jpg" />
        <Product heading="4R signature sauce it up! box" price="$17.99" bg="https://4rsmokehouse.com/wp-content/uploads/shopp/cache_1024_1024_0_0_80_16777215_unnamed.jpg"/>
        <Product heading='4R smokehouse "eat your bbq" tee' price="$15.00" />
      </div>
    )
  }
}
