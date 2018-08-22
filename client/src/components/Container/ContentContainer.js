import React, { Component } from 'react'
import './ContentContainer.css';

export class ContentContainer extends Component {
	render() {
		return (
			<div className="_ContentContainer" >
				{(this.props.singleContainerContent)
					? // Only renders single-container
					<div className="cc-row row">
						<div className="single-container col s12">
							{this.props.singleContainerContent}
						</div>
					</div>
					: // Renders two containers
					<div className="cc-row row">
						<div className="left-container col s12 m6">
							{this.props.leftContainerContent}
						</div>
						<div className="right-container col s12 m6">
							{this.props.rightContainerContent}
						</div>
					</div>}

			</div>
		)
	}
}

export default ContentContainer
