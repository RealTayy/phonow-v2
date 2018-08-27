import React, { Component } from 'react';
import { ContentContainer } from '../../components/Container';
import logo from '../../images/home/sLogo.png';
import rice from '../../images/home/rice.png';
import pho from '../../images/home/pho.png';
import eggroll from '../../images/home/eggroll.png';
import './Home.css';
import { AnimatedCarousel } from '../../components/AnimatedCarousel/AnimatedCarousel';

export class Home extends Component {
  render() {
    const imagesPath = [
      pho,
      rice,
      eggroll,
    ]
    return (
      <div className="_Home">
        <ContentContainer
          singleContainerContent={
            <div className="home-section">
              <div className="home-header center-align">
                <img className="header-image" src={logo} alt="" />
                <div className="header-text">
                  <div className="text-main mai-textdyn">PHO NOW</div>
                  <div className="text-sub mai-textdyn">VIETNAMESE NOODLE & GRILL</div>
                </div>
              </div>
              <div className="home-nav">
                <div className="nav-list center-align">
                  <span>FOOD</span><span>  •  </span>
                  <span>RESTAURANT</span><span>  •  </span>
                  <span>STORY</span><span>  •  </span>
                  <span>CONTACT</span>
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
