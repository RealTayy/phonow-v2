import React, { Component } from 'react'
import { ContentContainer } from '../../components/Container';
import { Carousel } from '../../components/Carousel/Carousel';
import { ContentTitle, ContentWrapper, ContentBody } from '../../components/Content';
import './Info.css';


export class Info extends Component {
  render() {
    console.log(process.env)
    console.log(process.env.REACT_APP_TEST_ME);
    const imagesPath = [
      "http://via.placeholder.com/2048x1365",
      "http://via.placeholder.com/2048x1365",
      "http://via.placeholder.com/2048x1365",
    ]
    return (
      <div className="_Info">
        <ContentContainer
          rightContainerContent={
            <Carousel imagesPath={imagesPath} />
          }
          leftContainerContent={
            <ContentWrapper>
              <ContentTitle className="f-opensans" pretitle="The" title="Restaurant" />
              <ContentBody>
                <div className="info-content">
                  <div className="info-hours row">
                    <div className="small-header col s12">HOURS OF OPERATION</div>
                    <div className="content-body col s12">
                      <div className="row">
                        <div className="col s4">Monday:</div>
                        <div className="col s8">11:00am - 10:00pm</div>
                        <div className="col s4">Tuesday:</div>
                        <div className="col s8">11:00am - 10:00pm</div>
                        <div className="col s4">Wednesday:</div>
                        <div className="col s8">11:00am - 10:00pm</div>
                        <div className="col s4">Thursday:</div>
                        <div className="col s8">11:00am - 10:00pm</div>
                        <div className="col s4">Friday:</div>
                        <div className="col s8">11:00am - 10:00pm</div>
                        <div className="col s4">Saturday:</div>
                        <div className="col s8">11:00am - 10:00pm</div>
                        <div className="col s4">Sunday:</div>
                        <div className="col s8">11:00am - 10:00pm</div>
                      </div>
                    </div>
                  </div>
                  <div className="info-contact row">
                    <div className="small-header col s12">CONTACT & DIRECTIONS</div>
                    <div className="content-body col s12">
                      <div className="row">
                        <div className="col s4"><i className="fas fa-phone-square"></i> Phone:</div>
                        <div className="col s8">281-132-4568</div>
                        <div className="col s4"><i className="fas fa-envelope-square"></i> Email:</div>
                        <div className="col s8">PhoNowTexas@gmail.com</div>
                        <div className="col s4"><i className="fas fa-building"></i> Address:</div>
                        <div className="col s8">1445 Fake Street</div>
                        <div className="col s8 push-s4">Houston, TX, 77498</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ContentBody>
            </ContentWrapper>
          }
        />
      </div>
    )
  }
}

export default Info
