import React, { Component } from 'react';
import './ContentBody.css'

export class ContentBody extends Component {
	render() {
		return (
			<div className="_ContentBody row">
				{this.props.children}
			</div>
		)
	}
}

export default ContentBody
