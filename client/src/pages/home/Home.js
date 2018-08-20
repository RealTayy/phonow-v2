import React, { Component } from 'react'
import { ContentContainer } from '../../components/Container';
import { Carousel } from '../../components/Carousel/Carousel';

export class Home extends Component {
  render() {
    const images = [
      "http://via.placeholder.com/2048x1365",      
      "http://via.placeholder.com/2048x1365",      
      "http://via.placeholder.com/2048x1365",      
    ]
    return (
      <div className="_Home">
        <ContentContainer
          leftContainerContent={
            <Carousel images={images} />
          }
          rightContainerContent={
            <div>hi</div>
          }
        />
      </div>
    )
  }
}

export default Home
