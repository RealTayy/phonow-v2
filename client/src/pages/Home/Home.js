import React, { Component } from 'react';
import { ContentContainer } from '../../components/Container';
import logo from '../../images/home/sLogo.png';
import rice from '../../images/home/rice.png';
import pho from '../../images/home/pho.png';
import eggroll from '../../images/home/eggroll.png';
import './Home.css';
import { AnimatedCarousel } from '../../components/AnimatedCarousel/AnimatedCarousel';
import { maiTextDyn, maiStalkerDiv } from '../../assets/javascript/maiHelpers';
import $ from 'jquery';

export class Home extends Component {

  componentDidMount = () => {
    this.props.setIsHome(true);
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

  componentWillUnmount = () => {
    this.props.setIsHome(false);
  }

  render() {
    const imagesPath = [
      pho,
      rice,
      eggroll,
    ]
    return (
      <div className="_Home">
        <div id="home-bg" className="bg-img"></div>
        <ContentContainer
          singleContainerContent={
            <div className="home-section">
              <div className="home-header center-align">
                <img className="header-image" src={logo} alt="" />
                <div className="header-text">
                  <div className="text-main mai-textDyn f-opensans">PHO NOW</div>
                  <div className="text-sub mai-textDyn f-oleo">VIETNAMESE NOODLE & GRILL</div>
                </div>
              </div>
              <div className="home-nav">
                <div className="nav-list center-align f-raleway">
                  <span className="nav-button">FOOD</span><span>  •  </span>
                  <span className="nav-button">RESTAURANT</span><span>  •  </span>
                  <span className="nav-button">STORY</span><span>  •  </span>
                  <span className="nav-button">CONTACT</span>
                  <div className="mai-stalkerDiv-wrapper"></div>
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
