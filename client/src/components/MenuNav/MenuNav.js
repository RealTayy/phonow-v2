import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuNav.css';
import $ from 'jquery';

export class MenuNav extends Component {
	componentDidMount = () => {
		this.setActiveCategory('all');
	}

	handleClick = (e) => {
		const category = ($(e.target).data('category'));
		this.setActiveCategory(category);
	}

	setActiveCategory = (category) => {
		if ($(`.menunav-link[data-category="${category}"]`).hasClass('active')) return;
		console.log(category);	
		this.props.setActiveCategory(category);
		$('.menunav-link').removeClass('active');
		$(`.menunav-link[data-category="${category}"]`).addClass('active');
	}

	render() {
		const activeCategory = window.location.pathname.split('/')[2];
		return (
			<div className={`_MenuNav hide-on-med-and-down z-depth-2 ${(this.props.isMenu) ? 'animated fadeInDown' : 'animated fadeOutUp'}`}>
				<ul className="menunav-list f-3">
					<li key={'all'}>
						<Link className="menunav-link active" to={"/menu"} data-category="all" onClick={this.handleClick}>All</Link>
					</li>
					{this.props.categories.map((category) => {						
						return <li key={category.id}>
							<Link className={`menunav-link ${(activeCategory === category.id) ? 'active' : ''}`} to={`/menu`} data-category={category.id} onClick={this.handleClick}>{category.display}</Link>
						</li>
					})}
				</ul>
			</div>
		)
	}
}

export default MenuNav
