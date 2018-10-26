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
		this.props.setActiveCategory(category);
		$('.menunav-link').removeClass('active');
		$(`.menunav-link[data-category="${category}"]`).addClass('active');
	}

	render() {
		const activeCategory = window.location.pathname.split('/')[2];
		return (
			<div className={`_MenuNav hide-on-med-and-down z-depth-2 ${(this.props.isMenu) ? 'animated fadeInDown' : 'animated fadeOutUp'}`}>
				<ul className="menunav-list">
					<li key={'all'}>
						<Link className="menunav-link active" to={"/menu"} data-category="all" onClick={this.handleClick}>All</Link>
					</li>
					{this.props.categories.map((category) => {
						const newPath = category.toLowerCase().replace(/ /g, '');
						return <li key={category}>
							<Link className={`menunav-link ${(activeCategory === newPath) ? 'active' : ''}`} to={`/menu`} data-category={newPath} onClick={this.handleClick}>{category}</Link>
						</li>
					})}
				</ul>
			</div>
		)
	}
}

export default MenuNav
