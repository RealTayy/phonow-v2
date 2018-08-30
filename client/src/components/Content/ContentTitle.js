import React, { Component } from 'react';
import './ContentTitle.css';

export class ContentTitle extends Component {
	render() {
		return (
			<div className="_ContentTitle">
				<div className="title-header">
					{this.props.title}
				</div>
			</div>
		)
	}
}

export default ContentTitle
