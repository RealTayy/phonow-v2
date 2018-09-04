import React, { Component } from 'react';
import './ContentWrapper.css'

export class ContentWrapper extends Component {
	render() {
		return (
			<div className="_ContentWrapper container">
				{this.props.children}
			</div>
		)
	}
}

export default ContentWrapper
