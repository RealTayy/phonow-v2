import React, { Component } from 'react'
import { ContentContainer } from '../../components/Container';
import './Contact.css'
import bg from '../../images/contact/bg.jpg';
import formbg from '../../images/contact/form-bg.png';
import uyen from '../../images/contact/uyen.jpg';
import { maiStalkerDiv } from '../../assets/javascript/maiHelpers';
import { ContentTitle, ContentWrapper, ContentBody } from '../../components/Content';
import $ from 'jquery';
import M from 'materialize-css';

export class Contact extends Component {
  componentDidMount = () => {
    // Initialize moving background
    maiStalkerDiv();
    $('.mai-stalkerDiv-wrapper').maiStalkerDiv([
      {
        selector: '.contact-bg-img',
        zoom: 4,
        offset: 4,
        speed: 2,
        easing: 'Power1.easeOut'
      }
    ])

    // Initilize Select menu    
    M.FormSelect.init(document.querySelectorAll('select'));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = {
      name: $('#name').val(),
      email: $('#email').val(),
      tel: $('#tel').val(),
      inquiry: $('#inquiry').val(),
      message: $('#message').val()
    }    
	if (!(email.name
		&&email.email
		&&email.inquiry
		&&email.message)) return this.helpText('Please fill out required fields', 'error', 2000);
  }

  helpText = (message, type, ms) => {
	  console.log('hihi')
	$('.helper-text').removeClass('fadeOut')
	let color = (() => {
      switch (type) {
        case 'error': return 'red'; break;
        case 'success': return 'green'; break;
        default: return 'white';
      };
    })
    $('.helper-text').css({ color: color })
    $('.helper-text').text(message);
	setTimeout(() => { $('.helper-text').addClass('fadeOut')}, ms||3000);	
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
                <div className="container">
                  <div className="form-header center-align f-2 drop-shadow-1">
                    CONTACT US
                  </div>
                  <div className="row">
                    <form className="contact-form">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="name" type="text" className="validate" />
                        <label htmlFor="name">Name *</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email *</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input id="tel" type="tel" className="validate" />
                        <label htmlFor="tel">Phone Number</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="material-icons prefix">assignment</i>
                        <select id="inquiry" defaultValue="Feedback">
                          <option value="Feedback">Feedback</option>
                          <option value="Catering">Catering</option>
                          <option value="Employement">Employement</option>
                          <option value="Marketing">Marketing</option>
                        </select>
                        <label>Inquiry Type *</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="material-icons prefix">message</i>
                        <textarea id="message" className="materialize-textarea validate" rows="5"></textarea>
                        <label htmlFor="message">Message *</label>
                      </div>
                      <div className="form-submit center-align">
                        <div className="helper-text animated">se</div>
                        <button className="waves-effect waves-light btn" type="submit" onClick={this.handleSubmit}>
                          <i className="material-icons right">send</i>
                          <span>SUBMIT</span>
                        </button>
                      </div>
                    </form>
                  </div>
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
