import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidenav } from './Sidenav';
import $ from 'jquery';
import './Navbar.css';
import './NavbarHome.css';
import smallLogo from '../../images/navlogo1.png'

export class Navbar extends Component {
	state = {
		activeTab: this.props.activeTab
	}

	handleClick = (e) => {		
		if(e.target.pathname === this.props.activeTab) return e.preventDefault()
		if ($(".page-container").children().length > 1) return e.preventDefault()
		else {
			this.props.setActiveCategory('all');			
			this.transitionPage();
		}
	}

	componentDidMount = () => {
		const breadcrumb = this.props.activeTab.split('/');
		const clickedTab = breadcrumb[1] || 'home';
		const $activeTab = $('.nav-links').find(`[data-tabid="${clickedTab}"]`);
		this.animateActiveTab($activeTab);
	}

	componentDidUpdate = (prevProps, prevState) => {
		// If clicking on same tab do nothing
		if (prevProps.activeTab === this.props.activeTab) return;
		const breadcrumb = this.props.activeTab.split('/');
		const clickedTab = breadcrumb[1] || 'home';
		const $activeTab = $('.nav-links').find(`[data-tabid="${clickedTab}"]`);
		this.animateActiveTab($activeTab);
		$(`.menunav-link`).removeClass('active');
		$(`.menunav-link[data-category="all"]`).addClass('active');
	}

	animateActiveTab = ($activeTab) => {
		$('.nav-links .nav-link').removeClass('active');
		$activeTab.addClass('active');
	}

	transitionPage = (oldPage, newPage) => {
		$('.page-container').children().addClass('fadeOut');
	}

	render() {
		return (
			<div className={`_Navbar${(this.props.isHome) ? 'Home' : ''}`}>
				<nav>
					<div className="nav-wrapper container">
						<Link to="/" className="brand-logo">
							<img className="logo-img" src={smallLogo} alt="" />
							<span className="logo-text">Pho Now</span>
						</Link>
						<a href="#!" data-target="_Sidenav" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="nav-links right hide-on-med-and-down f-3">
							<li><Link className="nav-link link-home" data-tabid="home" onClick={this.handleClick} to={"/"}>Home</Link></li>
							<li><Link className="nav-link link-menu" data-tabid="menu" onClick={this.handleClick} to={"/menu"}>Menu</Link></li>
							<li><Link className="nav-link link-info" data-tabid="info" onClick={this.handleClick} to={"/info"}>Info</Link></li>
							<li><Link className="nav-link link-about" data-tabid="about" onClick={this.handleClick} to={"/about"}>About Us</Link></li>
							<li><Link className="nav-link link-contact" data-tabid="contact" onClick={this.handleClick} to={"/contact"}>Contact</Link></li>
						</ul>
					</div>
				</nav>
				<Sidenav
					setIsHome={this.props.setIsHome}
					setIsMenu={this.props.setIsMenu}
					categories={this.props.categories}
					activeTab={this.props.activeTab}
					setActiveCategory={this.props.setActiveCategory}
				/>
			</div>
		)
	}
}

export default Navbar;
