import React, { Component } from 'react';
import './ContentTitle.css';

export class ContentTitle extends Component {
	render() {
		return (
			<div className={`_ContentTitle row ${this.props.className || null}`} >
				<span className="pretitle-header col s12 drop-shadow-1">
					{this.props.pretitle}
				</span>
				<i className="title-header col s12 drop-shadow-1">
					{this.props.title}
				</i>
			</div>
		)
	}
}

export default ContentTitle
