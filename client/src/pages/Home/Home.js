import React, { Component } from 'react';
import { ContentContainer } from '../../components/Container';
import logo from '../../images/home/sLogo.png';
import pho from '../../images/home/pho.png';
import eggroll from '../../images/home/eggroll.png';
import './Home.css';
import { AnimatedCarousel } from '../../components/AnimatedCarousel/AnimatedCarousel';
import { maiTextDyn, maiStalkerDiv } from '../../assets/javascript/maiHelpers';
import $ from 'jquery';

export class Home extends Component {

  componentDidMount = () => {
    this.props.setActiveTab('/');
    maiTextDyn();
    maiStalkerDiv();
    $('.mai-stalkerDiv-wrapper').maiStalkerDiv([
      {
        selector: '#home-bg',
        zoom: 3,
        offset: 3,
        speed: 1,
        easing: 'Power1.easeOut'
      }
    ])
  }

  render() {
    const imagesPath = [
      pho,
      eggroll,
    ]
    return (
      <div className="_Home animated">
        <div id="home-bg" className="bg-img"></div>
        <ContentContainer
          singleContainerContent={
            <div className="home-section">
              <div className="mai-stalkerDiv-wrapper"></div>
              <div className="home-header center-align">
                <img className="header-image" src={logo} alt="" />
                <div className="header-text">
                  <div className="text-main mai-textDyn f-2">PHO NOW</div>
                  <div className="text-sub mai-textDyn f-1">VIETNAMESE NOODLE & GRILL</div>
                </div>
              </div>
              <div className="home-nav">
                <div className="nav-list center-align f-3">
                  <span className="nav-button">LOCALLY CRAFTED + MADE WITH LOVE</span>
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
