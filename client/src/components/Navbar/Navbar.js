import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidenav } from './Sidenav';
import $ from 'jquery';
import './Navbar.css';
import './NavbarHome.css';

import smallLogo from '../../images/smallLogo2.png';

export class Navbar extends Component {

	handleClick = (e) => {
		this.props.setIsHome($(e.target).hasClass('link-home'));
	}

	render() {
		return (
			<div className={`_Navbar${(this.props.isHome) ? 'Home' : ''}`}>
				<nav>
					<div className="nav-wrapper container">
						<Link to="/" className="brand-logo hide-on-med-and-down">
							<img className="logo-img" src={smallLogo} alt="" />
						</Link>
						<a href="#!" data-target="_Sidenav" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							<li><Link className="link-home" onClick={this.handleClick} to={"/"}>Home</Link></li>
							<li><Link className="link-menu" onClick={this.handleClick} to={"/menu"}>Menu</Link></li>
							<li><Link className="link-info" onClick={this.handleClick} to={"/info"}>Store Info</Link></li>
							<li><Link className="link-about" onClick={this.handleClick} to={"/about"}>About Us</Link></li>
							<li><Link className="link-contact" onClick={this.handleClick} to={"/contact"}>Contact</Link></li>
						</ul>
					</div>
				</nav>
				<Sidenav setIsHome={this.props.setIsHome} />
			</div>
		)
	}
}

export default Navbar;
