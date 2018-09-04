import React, { Component } from 'react';
import './ContentContainer.css';

export class SingleContainer extends Component {
	render() {
		return (
			<div className="_SingleContainer">
				<div className="cc-row row">
					<div className={`content-container col s12 ${(this.props.leftClasses) ? this.props.leftClasses : ''}`}>
						{this.props.content}
					</div>
				</div>
			</div>
		)
	}
}

export default SingleContainer
