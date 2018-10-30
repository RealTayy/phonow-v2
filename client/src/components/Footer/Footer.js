import React, { Component } from 'react'
import './Footer.css';
import logo from '../../images/maicoding.png';

export class Footer extends Component {
	render() {
		return (
			<div className={`_Footer${(this.props.isHome) ? 'Home' : ''} page-footer`}>
				<div className="container">
					<div className="copyright">
						© 2018. Company Name.	All Rights Reserved.
						<div className="credit right hide-on-small-only">
							<a href="https://www.maicoding.me/" target="_blank" rel="noopener noreferrer">
								<div className="credit-text left">Made By</div>
								<img className="credit-logo left" src={logo} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
