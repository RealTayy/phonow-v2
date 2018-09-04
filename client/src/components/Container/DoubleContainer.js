import React, { Component } from 'react';
import './Content.css';

export class DoubleContainer extends Component {
	render() {
		return (
			<div className="_DoubleContainer">
				<div className="cc-row row">
					<div className={`content-container col s12 m6 ${(this.props.leftClasses) ? this.props.leftClasses : ''}`}>
						{this.props.leftContent}
					</div>
					<div className={`content-container col s12 m6 ${(this.props.rightClasses) ? this.props.rightClasses : ''}`}>
						{this.props.rightContent}
					</div>
				</div>
			</div>
		)
	}
}

export default DoubleContainer
