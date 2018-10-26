import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import $ from 'jquery';
import './Sidenav.css';

export class Sidenav extends Component {

	componentDidMount = () => {
		// Initializes _Sidenav
		M.Sidenav.init(document.querySelectorAll('#_Sidenav'))
		// Initialize collapsible inside of _Sidenav
		M.Collapsible.init(document.querySelectorAll('.sidenav-collapsible'));
		;
	};

	handleClick = (e) => {
		if ($(".page-container").children().length > 1) return e.preventDefault();
	}

	handleMenuClick = (e) => {
		let category = $(e.target).data('category');
		category = category.toLowerCase().replace(/ /g, '')
		this.props.setActiveCategory(category);
	}

	render() {
		return (
			<ul className="_Sidenav sidenav" id="_Sidenav">
				<div className="sidenav-header center-align">
					<Link to="/" className="sidenav-close">
						<img className="sidenav-img" src="http://via.placeholder.com/128x128" alt="" />
					</Link>
				</div>
				<li><Link to={"/"} onClick={this.handleClick} className="link-home sidenav-close">Home</Link></li>
				<li className="no-padding">
					<ul className="collapsible collapsible-accordion sidenav-collapsible">
						<li>
							<a className="collapsible-header">Menu</a>
							<div className="collapsible-body">
								<ul>
									<li><Link to={"/menu"} onClick={this.handleClick} className="link-menu sidenav-close">All Items</Link></li>
									{this.props.categories.map((category) => {
										return <li key={category}><Link data-category={category} to={`/menu`} onClick={this.handleMenuClick} className="link-menu sidenav-close">{category}</Link></li>
									})}
								</ul>
							</div>
						</li>
					</ul>
				</li>
				<li><Link to={"/info"} onClick={this.handleClick} className="link-info sidenav-close">Store Info</Link></li>
				<li><Link to={"/about"} onClick={this.handleClick} className="link-about sidenav-close">About Us</Link></li>
				<li><Link to={"/contact"} onClick={this.handleClick} className="link-contact sidenav-close">Contact</Link></li>
			</ul>
		)
	}
}

export default Sidenav
