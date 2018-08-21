import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Sidenav } from './Sidenav';
import './NavbarHome.css'


export class Navbar extends Component {
	render() {
		return (
			<div className="_Navbar _NavbarHome">
				<nav>
					<div className="nav-wrapper container">
						<Link to={"#!"} className="brand-logo">
							<img className="logo-img" src="http://via.placeholder.com/128x128" />
						</Link>
						<a href="#" data-target="_Sidenav" className="sidenav-trigger">
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
