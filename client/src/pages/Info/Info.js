import React, { Component } from 'react';
import { SingleContainer } from '../../components/Container';
import { ContentTitle, ContentWrapper, ContentBody } from '../../components/Content';
import GoogleMapReact from 'google-map-react';
import './Info.css';
import mapstyle from './mapstyle.json';
import smallLogo from '../../images/navlogo1.png'


const MapMarker = () => {
  return (
    <div className="map-marker z-depth-2">
      <div className="marker-text">PhoNow</div>
      <img className="marker-logo z-depth-2" src={smallLogo} alt="smallLogo" />
    </div>
  )
};
export class Info extends Component {

  static defaultProps = {
    center: {
      lat: 29.845087,
      lng: -95.391206
    },
    zoom: 16,
    options: {
      styles: mapstyle
    }
  };

  componentDidMount = () => {

  }

  render() {
    return (
      <div className="_Info">
        <div className="row">
          <div className="info-col col m12 l5">
            <div className="info-card z-depth-2 col s12 m4 l12 push-m8">
              <div className="info-header row f-2">
                <div className="material-icons">location_on</div>
                <div>CONTACT & DIRECTIONS</div>
              </div>
              <div className="info-body row">
                <div className="col s4 m12 l4"><i className="fas fa-phone-square"></i> Phone:</div>
                <div className="col s8 m12 l8">281-132-4568</div>
                <div className="col s4 m12 l4"><i className="fas fa-envelope-square"></i> Email:</div>
                <div className="col s8 m12 l8">PhoNowTexas@gmail.com</div>
                <div className="col s4 m12 l4"><i className="fas fa-building"></i> Address:</div>
                <div className="col s8 m12 l8">1445 Fake Street</div>
                <div className="col s8 m12 l8 push-s4 push-l4">Houston, TX, 77498</div>
              </div>
            </div>
            <div className="info-card z-depth-2 col s12 m4 l12 pull-m4">
              <div className="info-header row f-2">
                <div className="material-icons">store</div>
                <div>HOURS OF OPERATION</div>
              </div>
              <div className="info-body row">
                <div className="col s4 m12 l4">Monday:</div>
                <div className="col s8 m12 l8">11:00am - 10:00pm</div>
                <div className="col s4 m12 l4">Tuesday:</div>
                <div className="col s8 m12 l8">11:00am - 10:00pm</div>
                <div className="col s4 m12 l4">Wednesday:</div>
                <div className="col s8 m12 l8">11:00am - 10:00pm</div>
                <div className="col s4 m12 l4">Thursday:</div>
                <div className="col s8 m12 l8">11:00am - 10:00pm</div>
                <div className="col s4 m12 l4">Friday:</div>
                <div className="col s8 m12 l8">11:00am - 10:00pm</div>
                <div className="col s4 m12 l4">Saturday:</div>
                <div className="col s8 m12 l8">11:00am - 10:00pm</div>
                <div className="col s4 m12 l4">Sunday:</div>
                <div className="col s8 m12 l8">11:00am - 10:00pm</div>
              </div>
            </div>
          </div>
        </div>
        <div id="info-map" className="info-map" >
          <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              options={this.props.options}
            >
              <MapMarker
                lat={this.props.center.lat}
                lng={this.props.center.lng}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    )
  }
}

export default Info
