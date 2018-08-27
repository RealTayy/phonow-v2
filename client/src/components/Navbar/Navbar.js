import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Sidenav } from './Sidenav';
import smallLogo from '../../images/smallLogo2.png'
import './Navbar.css';
import './NavbarHome.css';


export class Navbar extends Component {
	render() {
		console.log(this.props);
		return (
			<div className={`_Navbar${(this.props.isHome) ? 'Home' : ''}`}>
				<nav>
					<div className="nav-wrapper container">
						<Link to="#!" className="brand-logo">
							<img className="logo-img" src={smallLogo} alt="" />
						</Link>
						<a href="#!" data-target="_Sidenav" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							<li><Link to={"/"}>Home</Link></li>
							<li><Link to={"/menu"}>Menu</Link></li>
							<li><Link to={"/info"}>Store Info</Link></li>
							<li><Link to={"/about"}>About Us</Link></li>
							<li><Link to={"/contact"}>Contact</Link></li>
						</ul>
					</div>
				</nav>
				<Sidenav />
			</div>
		)
	}
}

export default Navbar;
