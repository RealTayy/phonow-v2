import React, { Component } from 'react';
import { ContentContainer } from '../../components/Container';
import bigLogo from '../../images/bigLogo2.png';
import './Home.css';
import { AnimatedCarousel } from '../../components/AnimatedCarousel/AnimatedCarousel';

export class Home extends Component {
  render() {
    const imagesPath = [
      "http://via.placeholder.com/800x700",
      "http://via.placeholder.com/1001x701",
      "http://via.placeholder.com/602x702"
    ]
    return (
      <div className="_Home">
        <ContentContainer
          singleContainerContent={
            <div className="home-section">
              <div className="home-header center-align">
                <img className="header-image" src={bigLogo} alt="" />
              </div>
              <div className="home-nav">
                <div className="nav-list center-align">
                  <span> Food </span> •
                  <span> Restaurant </span> •
                  <span> Story </span> •
                  <span> Contact  </span>
                </div>
              </div>
              <div className="home-carousel center-align">
                <AnimatedCarousel
                  imagesPath={imagesPath}
                  parentClass="home-carousel"
                />
              </div>
            </div>
          }
        />
      </div>
    )
  }
}

export default Home
