import React, { Component } from 'react';
import $ from 'jquery';
import './Content.css';

export class SingleContainer extends Component {
	render() {
		const styles = {};
		(this.props.fontColor) ? styles.color = this.props.fontColor : null;
		(this.props.bgImg) ? styles.background = `url(${this.props.bgImg})` : null;		
		return (
			<div className="_SingleContainer" style={{ ...styles }}>
				<div className="cc-row row">
					<div className={`content-container col s12 ${(this.props.classes) ? this.props.leftClasses : ''}`}>
						{this.props.content}
					</div>
				</div>
			</div>
		)
	}
}

export default SingleContainer
