import React, { Component } from 'react'

export class ContentBody extends Component {
	render() {
		return (
			<div className="_ContentBody">
				{this.props.children}
			</div>
		)
	}
}

export default ContentBody
