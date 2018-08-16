import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


export class Navbar extends Component {
	render() {
		return (
			<div className="_Navbar">
				<nav>
					<div className="nav-wrapper">
						<Link to={"#"}> Hello </Link>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar;
