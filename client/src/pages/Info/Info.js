import React, { Component } from 'react'
import { ContentContainer } from '../../components/Container';
import { ContentTitle, ContentWrapper, ContentBody } from '../../components/Content';
import GoogleMapReact from 'google-map-react';
import './Info.css';


const MapMarker = ({ text }) => <div>{text}</div>;
export class Info extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
    options: {
      // styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]

    }
  };

  componentDidMount = () => {

  }

  render() {
    return (
      <div className="_Info">
        <ContentContainer
          rightContainerContent={
            <div id="info-map" className="info-map">
              <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                  options={this.props.options}
                >
                  <MapMarker
                    lat={59.955413}
                    lng={30.337844}
                    text={'Pho Now'}
                  />
                </GoogleMapReact>
              </div>
            </div>
          }
          leftClasses="valign-wrapper z-depth-2"
          leftContainerContent={
            <ContentWrapper>
              <div>
                <ContentTitle className="f-opensans" pretitle="The" title="Restaurant" />
                <ContentBody>
                  <div className="info-content">
                    <div className="info-hours row">
                      <div className="small-header col s12 center-align">HOURS OF OPERATION</div>
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
                      <div className="small-header col s12 center-align">CONTACT & DIRECTIONS</div>
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
              </div>
            </ContentWrapper>
          }
        />
      </div>
    )
  }
}

export default Info
