import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import './Sidenav.css';

export class Sidenav extends Component {
	componentDidMount = () => {
		var elems = document.querySelectorAll('#_Sidenav');
		var instances = M.Sidenav.init(elems);
	};
	render() {
		return (
			<ul className="sidenav _Sidenav" id="_Sidenav">
				<div className="sidenav-header center-align">
					<img className="sidenav-img" src="http://via.placeholder.com/128x128" />
				</div>
				<li><Link to={"/"} className="sidenav-close">Home</Link></li>
				<li><Link to={"menu"} className="sidenav-close">Menu</Link></li>
				<li><Link to={"info"} className="sidenav-close">Store Info</Link></li>
				<li><Link to={"about"} className="sidenav-close">About Us</Link></li>
				<li><Link to={"contact"} className="sidenav-close">Contact</Link></li>
			</ul>
		)
	}
}

export default Sidenav
