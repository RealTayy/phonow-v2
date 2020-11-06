import React, { Component } from 'react';
import { ContentContainer } from '../../components/Container';
import { Carousel } from '../../components/Carousel/Carousel';
import './Menu.css';
import images from './images';
import $ from 'jquery';

export class Menu extends Component {
  componentDidMount = () => {
    this.props.setActiveTab('/menu');
  }

  componentDidUpdate = (prevProps, prevState) => {
    const $categories = $('.category');
    for (let i = 0; i < $categories.length; i++) {
      const category = $categories[i];
      $(category).height(category.scrollHeight);
    }
    this.animateFilter(this.props.category);
  }

  animateFilter = (filter) => {
    const $categories = $('.category');
    if (filter === 'all' || '') {
      for (let i = 0; i < $categories.length; i++) {
        const category = $categories[i];
        $(category).removeClass('fadeOut');
        $(category).addClass('fadeIn');
        $(category).height(category.scrollHeight);
      }
    }
    else {
      const $category = $(`.category[data-categoryid='${filter}']`)
      if (!$category[0]) return
      else {
        for (let i = 0; i < $categories.length; i++) {
          const category = $categories[i];
          if ($(category).data('categoryid') === filter) {
            $(category).removeClass('fadeOut fadeIn');
            $(category).addClass('fadeIn');
            $(category).height(`${$category[0].scrollHeight}px`)
          }
          else {
            $(category).removeClass('fadeIn fadeOut')
            $(category).addClass('fadeOut')
            $(category).height('0px')
          }
        }
      }
    }
  }

  render() {
    const imagesPath = images;
    return (
      <div className="_Menu animated">
        <ContentContainer
          leftClasses="animated fadeInLeft"
          leftContainerContent={
            <Carousel imagesPath={imagesPath} />
          }
          rightContainerContent={
            <div className="menu-wrapper animated fadeInRight">
              <div className="menu-content">
                {this.props.categories.map((category) => {
                  return (
                    <div className="category animated fadeIn" key={category.id} data-categoryid={category.id}>
                      <div className="category-name f-2"><span>{category.display}</span></div>
                      <div className="category-items f-3">
                        {category.items.map((item) => {

                          // Set price
                          let displayPrice = '';
                          if (typeof item.price === 'object') {
                            for (const key in item.price) {
                              if (item.price.hasOwnProperty(key)) {
                                const element = item.price[key];
                                displayPrice = `${displayPrice} ${key}: $${element.toFixed(2)} •`
                              }
                            }
                            displayPrice = displayPrice.substr(0, displayPrice.length - 2)
                          }
                          else displayPrice = `$${item.price.toFixed(2)}`

                          return (
                            <div className="item" key={item.name}>
                              {/* Name/Price */}
                              <div className="item-name f-2">
                                {item.name} {typeof item.price !== 'object' && `• ${displayPrice}`}
                              </div>
                              {/* Price */}
                              {typeof item.price === 'object' && <div className="item-price f-2">
                                {displayPrice}
                              </div>}
                              {/* Details */}
                              {(item.details) ?
                                <div className="item-details f-3">
                                  {item.details}
                                </div> : ''
                              }
                              {/* Options */}
                              {(item.options) ?
                                <ul className="item-options f-3">
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
