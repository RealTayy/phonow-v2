import React, { Component } from 'react';
import './ContentTitle.css';

export class ContentTitle extends Component {
	render() {
		return (
			<div className="_ContentTitle row">
				<div className="title-header col s12">
					{this.props.title}
				</div>
			</div>
		)
	}
}

export default ContentTitle
