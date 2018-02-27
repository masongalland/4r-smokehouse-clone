import React, { Component } from 'react';
import Category from './Category'
import image from './assets/old_school_menu.jpg'

import './Menu.css'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          title: "old school",
          description: "options include: sandwhich | sandwhich + 2 sides | dinner portion, 3sides, + biscuit | a la carte",
          image: `url(${image})`,
          items: [
            {
              title: "brisket",
              description: null
            },
            {
              title: "pulled pork",
              description: null
            },
            {
              title: "sliced pork",
              description: null
            },
            {
              title: "pulled chicken",
              description: null
            },
            {
              title: "burnt-ends",
              description: "4r signature brisket shredded with pulled pork, smothered with signature sauce and re-smoked to perfection."
            },
            {
              title: "smoked turkey (warm)",
              description: null
            },
            {
              title: "sausage",
              description: "classic or jalepeno"
            },
            {
              title: "tri-tip",
              description: "served with smokehouse chimichurri sauce"
            },
            {
              title: "prime rib",
              description: "*subject to location"
            },
            {
              title: "smoked chicken",
              description: "quarter bird | half bird | full bird | plus your choice of red or white BBQ sauce"
            },
            {
              title: "st. louis ribs",
              description: "quarter rack | half rack | full rack"
            },
            {
              title: "brontosaurus beef rib",
              description: null
            },
            {
              title: "texas two-step",
              description: "your choice of 2 meats + 2 sides (brisket, pulled pork, burnt ends, pulled chicken"
            },
            {
              title: "pitmaster combo",
              description: "sampler of 4 different meats, 2 sides & a biscuit"
            },
            {
              title: "happy herd",
              description: "sampler of 4 different meats, 2 sides, 4 biscuits or cornbread (excluding beef rib)--feeds a family of 4"
            },
            {
              title: "chicken wings",
              description: "6pc | 10pc | 30pc | 50pc"
            },
            {
              title: "smoked jalapenos",
              description: "6pc | 10pc | 30pc | 50pc"
            },
            {
              title: "pigskin pickins package",
              description: "wings | 50pc | feeds 10 | $42.99"
            },
            {
              title: "pigskin pickins package",
              description: "sliders | 24pc | feeds 10 | $59.99"
            }
          ]
        },
        {
          title: "from the farm",
          description: "homemade dressings: ranch, blue cheese, honey mustard, balsamic vinaigrette or smoked tomato vinaigrette",
          image: `url(${image})`,
          items: [
            {
              title: "smoked portabello",
              description: "caramelized onions, tomato, arugula, melted provolone and chipotle aioli on ciabatta."
            },
            {
              title: "vegetarian quesadilla",
              description: "seasonal vegetables, cheddar cheese, drizzled with chipotle aioli on a tortilla and grilled to perfection."
            },
            {
              title: "veggie plate",
              description: "seasonal vegetables over baked cheese grits and topped with a smoked tomato chimichurrie vinaigrette"
            },
            {
              title: "vegetarian sideboard",
              description: "biscuit + 3 sides: corn on the cob, mac & cheese, coleslaw, sweet potato casserole, bread pudding, potato salad, baked cheese grits, cornbread, fries, fried okra, or fried pickles"
            },
            {
              title: "smokehouse salad",
              description: "spring mix and romain lettuce topped with cheddar cheese, carrots, onions, cucumbers, grilled cornbread croutons"
            }
          ]
        }
      ]
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
        {categories}
        <div style={{height: "100vh", width: "100%", backgroundColor: "gray"}}></div>
      </div>
    )
  }
}
