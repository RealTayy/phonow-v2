import React, { Component } from 'react';
import './Content.css';

export class SingleContainer extends Component {
	render() {
		const styles = {};
		if (this.props.fontColor) styles.color = this.props.fontColor;
		return (
			<div className={`_SingleContainer ${(this.props.className) ? this.props.className : ''}`} style={{ ...styles }}>
				<div className="bg-image" style={(this.props.bgImg) ? { background: `url(${this.props.bgImg}` } : {}}></div>
				<div className="cc-row row">
					<div className={`content-container col s12 ${(this.props.classes) ? this.props.leftClasses : ''}`}>
						{this.props.children}
					</div>
				</div>
			</div >
		)
	}
}

export default SingleContainer
