import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Info.css';
import mapstyle from './mapstyle.json';
import smallLogo from '../../images/navlogo1.png'


const MapMarker = (props) => {
  return (
    <a href={props.addressUrl} rel="noopener noreferrer" target="_blank">
      <div className="map-marker z-depth-2 pulse">
        <div className="marker-text f-2">PHO NOW</div>
        <div className="marker-frame pulse">
          <img className="marker-logo z-depth-2" src={smallLogo} alt="smallLogo" />
        </div>
      </div >
    </a >
  )
};
export class Info extends Component {

  componentDidMount = () => {
    this.props.setActiveTab('/info');
  }

  static defaultProps = {
    center: {
      lat: 29.944848,
      lng: -95.468276,
    },
    zoom: 11,
    options: {
      styles: mapstyle
    }
  };

  render() {
    const tidwelGoogleMapsUrl = 'https://www.google.com/maps/place/Pho+Now/@29.8448389,-95.3911813,20z/data=!4m13!1m7!3m6!1s0x8640b80bb37a29cf:0xc3eaa47294c996f0!2s536+E+Tidwell+Rd,+Houston,+TX+77022!3b1!8m2!3d29.8450861!4d-95.3912148!3m4!1s0x8640b9e4b118b06d:0xc72512c11b51b8a3!8m2!3d29.8451271!4d-95.391055';
    const cypresswoodGoogleMapsUrl = 'https://www.google.com/maps/place/210+Cypresswood+Dr,+Spring,+TX+77388/@30.0516519,-95.4389163,17z/data=!3m1!4b1!4m5!3m4!1s0x864734d5eeef15e1:0x2a22324f48d25a75!8m2!3d30.0516473!4d-95.4367276';

    return (
      <div className="_Info animated fadeIn">
        <div className="info-row row">
          <div className="info-col col s12 m5 animated fadeInUp">
            <div className="info-card z-depth-2 col s12">
              <div className="info-header row f-2">
                <div className="material-icons">location_on</div>
                <div>CONTACT & DIRECTIONS</div>
              </div>
              <div className="info-title f-2">HOUSTON/TIDWELL</div>
              <div className="info-body row">
                <div className="col s4 m12 l4"><i className="fas fa-phone-square"></i> Phone:</div>
                <div className="col s8 m12 l8">713-699-4444</div>
                <div className="col s4 m12 l4"><i className="fas fa-envelope-square"></i> Email:</div>
                <div className="col s8 m12 l8">PhoNowTexas@gmail.com</div>
                <div className="col s4 m12 l4"><i className="fas fa-building"></i> Address:</div>
                <div className="col s8 m12 l8">536 E Tidwell Rd</div>
                <div className="col s8 m12 l8 push-s4 push-l4">Houston, TX, 77022</div>
              </div>
              <a href={tidwelGoogleMapsUrl} rel="noopener noreferrer" target="_blank">
                <div className="info-button-container">
                  <button className="info-button waves-effect waves-light btn z-depth-0">
                    <i className="fas fa-map" style={{position:'relative', marginRight: 8}}/>
                    <span>Google Maps</span>
                  </button>
                </div>
              </a>
              <div className="info-button-container">
                <button className="info-button waves-effect waves-light btn z-depth-0 disabled">
                  <i className="fas fa-utensils" style={{position:'relative', marginRight: 8}}/>
                  <span>Online carryout not availble</span>
                </button>
              </div>
              <div className="f-2 info-title">-----</div>
              <div className="info-title f-2">SPRING/CYPRESSWOOD</div>
              <div className="info-body row">
                <div className="col s4 m12 l4"><i className="fas fa-phone-square"></i> Phone:</div>
                <div className="col s8 m12 l8">281-968-2222</div>
                <div className="col s4 m12 l4"><i className="fas fa-envelope-square"></i> Email:</div>
                <div className="col s8 m12 l8">PhoNowTexas@gmail.com</div>
                <div className="col s4 m12 l4"><i className="fas fa-building"></i> Address:</div>
                <div className="col s8 m12 l8">210 Cyprsswood Dr</div>
                <div className="col s8 m12 l8 push-s4 push-l4">Spring, TX, 77388</div>
              </div>
              <a href={cypresswoodGoogleMapsUrl} rel="noopener noreferrer" target="_blank">
                <div className="info-button-container">
                  <button className="info-button waves-effect waves-light btn z-depth-0">
                    <i className="fas fa-map" style={{position:'relative', marginRight: 8}}/>
                    <span>Google Maps</span>
                  </button>
                </div>
              </a>
              <a href={'https://www.clover.com/online-ordering/little-pho-now-spring'} rel="noopener noreferrer" target="_blank">
                <div className="info-button-container">
                  <button className="info-button waves-effect waves-light btn z-depth-0">
                    <i className="fas fa-utensils" style={{position:'relative', marginRight: 8}}/>
                    <span>Order carryout</span>
                  </button>
                </div>
              </a>
              <div>{`\u00a0`}</div>
            </div>
            <div className="info-card z-depth-2 col s12">
              <div className="info-header row f-2">
                <div className="material-icons">store</div>
                <div>HOURS OF OPERATION</div>
              </div>
              <div className="info-body row">
                <div className="col s4 m12 l4">Monday:</div>
                <div className="col s8 m12 l8">CLOSED</div>
                <div className="col s4 m12 l4">Tuesday:</div>
                <div className="col s8 m12 l8">10:30am - 09:00pm</div>
                <div className="col s4 m12 l4">Wednesday:</div>
                <div className="col s8 m12 l8">10:30am - 09:00pm</div>
                <div className="col s4 m12 l4">Thursday:</div>
                <div className="col s8 m12 l8">10:30am - 09:00pm</div>
                <div className="col s4 m12 l4">Friday:</div>
                <div className="col s8 m12 l8">10:30am - 09:00pm</div>
                <div className="col s4 m12 l4">Saturday:</div>
                <div className="col s8 m12 l8">10:30am - 09:00pm</div>
                <div className="col s4 m12 l4">Sunday:</div>
                <div className="col s8 m12 l8">10:30am - 09:00pm</div>
              </div>
            </div>
          </div>
        </div>
        <div id="info-map" className="info-map" >
          <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact className=""
              bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              options={this.props.options}
            >
              <MapMarker
                addressUrl={tidwelGoogleMapsUrl}
                lat={29.845087}
                lng={-95.391206}
              />
              <MapMarker
                addressUrl={cypresswoodGoogleMapsUrl}
                lat={30.051786580859943}
                lng={-95.4366739570241}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    )
  }
}

export default Info
