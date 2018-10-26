import React, { Component } from 'react';
import { ContentContainer } from '../../components/Container';
import { Carousel } from '../../components/Carousel/Carousel';
import './Menu.css';

export class Menu extends Component {
  componentDidMount = () => {
    this.props.setActiveTab('/menu');
  }

  filterMenuByCategory = (category, menu) => {    
    if (category === 'all' || '') return menu;
    else return menu.filter((item) => item.category === category);
  }

  formatMenu = () => {

  }

  render() {
    const imagesPath = [
      "http://via.placeholder.com/2047x1365",
      "http://via.placeholder.com/2047x1366",
      "http://via.placeholder.com/2047x1367",
    ]
    const category = this.props.category || 'all';
    const filteredMenu = this.filterMenuByCategory(category, this.props.menu);
    console.log(filteredMenu);
    return (
      <div className="_Menu">
        <ContentContainer
          leftContainerContent={
            <Carousel imagesPath={imagesPath} />
          }
          rightContainerContent={
            <div>
              <div>{this.props.category || 'all'}</div>
            </div>
          }
          rightClasses={"scrollable"}
        />
      </div>
    )
  }
}

export default Menu
