import React, { Component } from 'react';
import { SingleContainer } from '../../components/Container';
import { ContentTitle, ContentWrapper, ContentBody } from '../../components/Content';
import bg from '../../images/about/bg.jpg';
import fog from '../../images/about/fog.png';
import fogr from '../../images/about/fog-r.png';
import './About.css';
import { maiStalkerDiv } from '../../assets/javascript/maiHelpers';
import $ from 'jquery';

class About extends Component {
  componentDidMount = () => {
    this.props.setActiveTab('/about');
    maiStalkerDiv();
    $('.fog').maiStalkerDiv([
      {
        selector: '#fog-one',
        zoom: 30,
        offset: 30,
        speed: 1.5,
        easing: 'Power1.easeOut'
      },
      {
        selector: '#fog-two',
        zoom: 10,
        offset: 10,
        speed: 1,
        easing: 'Power1.easeOut'
      },
      {
        selector: '.bg-image',
        zoom: 5,
        offset: 5,
        speed: 2,
        easing: 'Power1.easeOut'
      }
    ]);
  }

  render() {
    return (
      <div className="_About animated">
        <SingleContainer bgImg={bg} className={`${this.props.className}`}>
          <div className="fog mai-stalkerDiv-wrapper"> </div>
          <div id="fog-one" className="mai-stalkerDiv-bg-img" style={{ background: `url(${fog}` }}></div>
          <div id="fog-two" className="mai-stalkerDiv-bg-img" style={{ background: `url(${fogr}` }}></div>
          <ContentWrapper className="z-depth-2 animated fadeInUp">
            <ContentTitle className="f-opensans" pretitle="The" title="Story" />
            <div className="small-divider-white drop-shadow-1"></div>
            <ContentBody className="row">
              <p className="col s12">
                Opening in 2018, Pho Now is a family owned Vietnamese restaurant serving authentic cuisine from the heart of Saigon. We have two stores open currently, one located in Houston on the intersection of North FWY and Tidwell. The other located in Spring on the intersection of Cypressswood and I-45.
			  </p>
              <p className="col s12">
                From our mothers kitchen to your table. Our menu is filled with fresh ingredients & traditional dishes straight from the city of Saigon, including one of the most world wide known bowl, PHO, also known as Vietnamese Beef Soup Noodle. Pho is a Vietnamese rice noodle soup, accompanied with sweet basil, lime or lemon, chili peppers, bean sprouts and other herbs/ Slow-cooked for several hours, this comfort food has always resulted in a clear beef broth and slim slices of beef and/or chicken. Pho Now was born out of a love and craving for the soup. Here at Pho Now our chef applies authentic Vietnamese flavors and techniques that allow the ingredients to be expressed without boundaries.
			  </p>
			  <p className="col s12">
				Cooked for over 6 hours, our broth is rich and flavorful made with pure bone broth. We are thrilled to share with you the most iconic dishes from the streets of Saigon, Vietnam. Come visit us soon to experience the flavors of Vietnam from the other side of the world.
              </p>
            </ContentBody>
          </ContentWrapper>
        </SingleContainer>
      </div >
    )
  }
}

export default About
