import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuNav.css';

export class MenuNav extends Component {
	render() {
		console.log(this.props.categories);
		return (
			<div className="_MenuNav hide-on-med-and-down z-depth-2 animated fadeInDown">
				<ul className="menunav-list">
					<li className="menunav-link">
						<Link to={"/menu/all"}>All</Link>
					</li>
					{this.props.categories.map((category) => {
						return <li className="menunav-link">
							<Link to={`/menu/${category}`}>{category}</Link>
						</li>
					})}
				</ul>
			</div>
		)
	}
}

export default MenuNav
