import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import $ from 'jquery';
import './Sidenav.css';
import logo from './images/logo.png'
import maiLogo from '../../images/maicoding-b.png';

export class Sidenav extends Component {

	componentDidMount = () => {
		// Initializes _Sidenav
		M.Sidenav.init(document.querySelectorAll('#_Sidenav'))
		// Initialize collapsible inside of _Sidenav
		M.Collapsible.init(document.querySelectorAll('.sidenav-collapsible'));
		;
	};

	handleClick = (e) => {
		if (e.target.pathname === this.props.activeTab) {
			this.props.setActiveCategory('all');
			return e.preventDefault() 
		}
		if ($(".page-container").children().length > 1) return e.preventDefault()
		else {						
			this.props.setActiveCategory('all');
			this.transitionPage();
		}
	}

	handleMenuClick = (e) => {		
		let category = $(e.target).data('category');
		category = category.toLowerCase().replace(/ /g, '')
		this.props.setActiveCategory(category);
	}

	transitionPage = (oldPage, newPage) => {
		$('.page-container').children().addClass('fadeOut');
	}

	render() {
		return (
			<ul className="_Sidenav sidenav" id="_Sidenav">
				<h2 className="sidenav-header center-align">
					<Link to="/" className="sidenav-close">
						<img className="sidenav-img" src={logo} alt="" />
					</Link>
					<div className="f-2">
						PHO NOW
					</div>
				</h2>
				<li><Link to={"/"} onClick={this.handleClick} className="link-home sidenav-close">Home</Link></li>
				<li className="no-padding">
					<ul className="collapsible collapsible-accordion sidenav-collapsible">
						<li>
							<a className="collapsible-header">Menu</a>
							<div className="collapsible-body">
								<ul>
									<li><Link to={"/menu"} onClick={this.handleClick} className="link-menu sidenav-close">All Items</Link></li>
									{this.props.categories.map((category) => {
										return <li key={category.id}><Link className="link-menu sidenav-close" data-category={category.id} to={`/menu`} onClick={this.handleMenuClick}>{category.display}</Link></li>
									})}
								</ul>
							</div>
						</li>
					</ul>
				</li>
				<li><Link to={"/info"} onClick={this.handleClick} className="link-info sidenav-close">Store Info</Link></li>
				<li><Link to={"/about"} onClick={this.handleClick} className="link-about sidenav-close">About Us</Link></li>
				<li><Link to={"/contact"} onClick={this.handleClick} className="link-contact sidenav-close">Contact</Link></li>
				<li className="sidenav-close">
					<a href="http://www.maicoding.me/" target="_blank" rel="noopener noreferrer">
						<div className="credit-text left">Made by: maiCoding</div>
						<img className="credit-logo right" src={maiLogo} alt="" />
					</a>
				</li>
			</ul>
		)
	}
}

export default Sidenav
