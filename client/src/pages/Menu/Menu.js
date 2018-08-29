import React, { Component } from 'react'
import { ContentContainer } from '../../components/Container';
import { Carousel } from '../../components/Carousel/Carousel';

export class Menu extends Component {

  componentDidMount = () => {
    this.props.setIsHome(false);
  }

  render() {
    const imagesPath = [
      "http://via.placeholder.com/2047x1365",
      "http://via.placeholder.com/2047x1365",
      "http://via.placeholder.com/2047x1365",
    ]
    return (
      <div className="_Menu">
        <ContentContainer
          leftContainerContent={
            <Carousel imagesPath={imagesPath} />
          }
          rightContainerContent={
            <div>Menu</div>
          }
        />
      </div>
    )
  }
}

export default Menu
