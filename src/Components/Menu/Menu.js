import React, { Component } from 'react';
import Category from './Category';
import data from './data'
import TiDocumentText from 'react-icons/lib/ti/document-text';

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
      </div>
    )
  }
}
