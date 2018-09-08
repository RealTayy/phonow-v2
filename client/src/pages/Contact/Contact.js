import React, { Component } from 'react'
import { ContentContainer } from '../../components/Container';
import './Contact.css'
import bg from '../../images/contact/bg.jpg';
import formbg from '../../images/contact/form-bg.png';
import uyen from '../../images/contact/uyen.jpg';
import { maiStalkerDiv } from '../../assets/javascript/maiHelpers';
import { ContentTitle, ContentWrapper, ContentBody } from '../../components/Content';
import $ from 'jquery';

export class Contact extends Component {
  componentDidMount = () => {
    maiStalkerDiv();
    $('.mai-stalkerDiv-wrapper').maiStalkerDiv([
      {
        selector: '.contact-bg-img',
        zoom: 3,
        offset: 3,
        speed: 2,
        easing: 'Power1.easeOut'
      }
    ])
  }

  render() {
    return (
      <div className="_Contact">
        <div className="mai-stalkerDiv-wrapper"></div>
        <div className="mai-stalkerDiv-bg-img contact-bg-img" style={{ background: `url(${bg})` }}></div>
        <ContentContainer
          leftClasses="valign-wrapper"
          leftContainerContent={
            <ContentWrapper>
              <div className="message-container container">
                <ContentTitle className="f-opensans" pretitle="The" title="Message" />
                <div className="small-divider drop-shadow-1"></div>
                <ContentBody>
                  <div className="message-intro col s12 center-align">
                    <div className="intro-picture"><img src={uyen} /></div>
                    <div className="intro-header">A message from Uyen Tran</div>
                    <div className="intro-subheader">PHO NOW FOUNDER AND OWNER</div>
                    <div className="small-divider drop-shadow-1"></div>
                    <div className="intro-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Reiciendis ea esse dolorum vitae tempora veniam, illum iusto, labore soluta modi reprehenderit asperiores sequi doloribus unde voluptate in enim.</div>
                    <div className="intro-thanks">Thank You!</div>
                  </div>
                  <div className="message-contactcol s12">                </div>
                </ContentBody>
              </div>
            </ContentWrapper>
          }
          rightClasses="valign-wrapper"
          rightContainerContent={
            <div className="form-container">
              <div className="form-bg-img"></div>
              <div className="form-wrapper">
                <div className="form-header f-opensans center-align drop-shadow-1">
                  CONTACT US
                </div>
                <div className="form-header f-opensans center-align drop-shadow-1">
                  CONTACT US
                </div>
                <div className="form-header f-opensans center-align drop-shadow-1">
                  CONTACT US
                </div>
                <div className="form-header f-opensans center-align drop-shadow-1">
                  CONTACT US
                </div>
                <div className="form-header f-opensans center-align drop-shadow-1">
                  CONTACT US
                </div>
                <div className="form-header f-opensans center-align drop-shadow-1">
                  CONTACT US
                </div>
                <div className="form-header f-opensans center-align drop-shadow-1">
                  CONTACT US
                </div>
                <div className="form-header f-opensans center-align drop-shadow-1">
                  CONTACT US
                </div>
              </div>
            </div>
          }
        />
      </div >
    )
  }
}

export default Contact
