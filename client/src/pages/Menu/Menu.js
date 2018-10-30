import React, { Component } from 'react';
import { ContentContainer } from '../../components/Container';
import { Carousel } from '../../components/Carousel/Carousel';
import './Menu.css';
import images from './images';

export class Menu extends Component {
  componentDidMount = () => {
    this.props.setActiveTab('/menu');
  }

  filterCategories = (filter, categories) => {
    if (filter === 'all' || '') return categories;
    else return categories.filter((category) => category.id === filter);
  }

  render() {
    const imagesPath = images;
    const category = this.props.category || 'all';
    const filteredMenu = this.filterCategories(category, this.props.categories);
    return (
      <div className="_Menu animated">
        <ContentContainer
          leftContainerContent={
            <Carousel imagesPath={imagesPath} />
          }
          rightContainerContent={
            <div className="menu-wrapper">
              <div className="menu-content">
                {filteredMenu.map((category) => {
                  return (
                    <div className="category" key={category.id} data-categoryid={category.id}>
                      <div className="category-name f-2"><span>{category.display}</span></div>
                      <div className="category-items">
                        {category.items.map((item) => {

                          // Set price
                          let displayPrice = '';
                          if (typeof item.price === 'object') {
                            for (const key in item.price) {
                              if (item.price.hasOwnProperty(key)) {
                                const element = item.price[key];
                                displayPrice = `${displayPrice} ${key.charAt(0)}:$${element.toFixed(2)}`
                              }
                            }
                          }
                          else displayPrice = `$${item.price.toFixed(2)}`

                          return (
                            <div className="item" key={item.name}>
                              {/* Name/Price */}
                              <div className="item-name">
                                {item.name} • {displayPrice}
                              </div>
                              {/* Details */}
                              {(item.details) ?
                                <div className="item-details">
                                  {item.details}
                                </div> : ''
                              }
                              {/* Options */}
                              {(item.options) ?
                                <ul className="item-options">
                                  {item.options.map((option) => {
                                    return (
                                      <li className="option" key={option}>
                                        - {option}
                                      </li>
                                    )
                                  })}
                                </ul> : ''
                              }
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          }
          rightClasses={""}
        />
      </div>
    )
  }
}

export default Menu
