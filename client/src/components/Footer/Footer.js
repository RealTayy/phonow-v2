import React, { Component } from 'react'
import './Footer.css';
import logo from '../../images/maicoding.png';

export class Footer extends Component {
	render() {
		return (
			<div className="_Footer page-footer">
				<div className="copyright">
					© 2018. Company Name.	All Rights Reserved.

				<div className="credit right hide-on-small-only">
						<a href="http://www.maicoding.me/" target="_blank">
							<div className="credit-text left">Made By</div>
							<img className="credit-logo left" src={logo} />
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
