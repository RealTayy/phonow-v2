import React, { Component } from 'react'
import { SingleContainer } from '../../components/Container';
import { ContentTitle, ContentWrapper, ContentBody } from '../../components/Content';
import bg from '../../images/about/bg.jpg';
import fog from '../../images/about/fog.png';
import fogr from '../../images/about/fog-r.png';
import './About.css';
import { maiStalkerDiv } from '../../assets/javascript/maiHelpers';
import $ from 'jquery';
import { TweenLite } from 'gsap/TweenMax';

export class About extends Component {

  componentDidMount = () => {
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
      <div className="_About">
        <SingleContainer bgImg={bg}>
          <div className="fog mai-stalkerDiv-wrapper">
            <div id="fog-one" className="mai-stalkerDiv-img" style={{ background: `url(${fog}` }}></div>
            <div id="fog-two" className="mai-stalkerDiv-img" style={{ background: `url(${fogr}` }}></div>
          </div>
          <ContentWrapper className="z-depth-2">
            <ContentTitle title="The Story" />
            <ContentBody className={"row"}>
              <p className="col s12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              <p className="col s12">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
              <p className="col s12">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </ContentBody>
          </ContentWrapper>
        </SingleContainer>
      </div >
    )
  }
}

export default About
