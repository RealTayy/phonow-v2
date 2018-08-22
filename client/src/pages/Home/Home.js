import React, { Component } from 'react';
import { ContentContainer } from '../../components/Container';
import { Carousel } from '../../components/Carousel/Carousel';
import bigLogo from '../../images/bigLogo2.png';
import './Home.css';

export class Home extends Component {
  render() {
    const imagesPath = [
      "http://via.placeholder.com/2048x1365",
      "http://via.placeholder.com/2048x1365",
      "http://via.placeholder.com/2048x1365",
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
                {/* <img className="carousel-image" src="https://phosho-phonow-production.herokuapp.com/img/main/what-square.png" alt="" /> */}
              </div>
            </div>
          }
        />
      </div>
    )
  }
}

export default Home
