/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require("express").Router();

/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');
// Load enviroment variables from .env into process.env
const envDir = path.join(__dirname, '../../', '.env');
require('dotenv').config({ path: envDir });

/* EMAIL SENDER */
// Sends email from GMAIL with Node.js
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	service: 'Gmail',
	auth: {
		type: 'OAuth2',
		user: process.env.USER,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN,
	},
	tls: {
		rejectUnauthorized: false
	},
	secure: true,
});

/*********************************|
|*  SETS UP API ROUTES FOR EMAIL *|
|*********************************/
// Matches with "/api/email" this is defined in "../index.js"
router.route("/")
	.post(function (req, res) {
		var mailData = req.body;
		var mail = {
			from: mailData.email,
			to: process.env.DESTINATION_EMAIL,
			subject: `${mailData.name} | ${mailData.email} | ${mailData.inquiry}`,
			text: `${mailData.name} | ${mailData.email} | ${mailData.message}`,
			html: `
					<div>
						<h2 style="margin: 0px; font-weight: bold">DETAILS</h2>
						<h3 style="margin: 0px">Name: ${mailData.name}</h3>
						<h3 style="margin: 0px">Email: ${mailData.email}</h3
						<h3 style="margin: 0px">Phone: ${(mailData.tel) ? mailData.tel : 'not provided'} ${((mailData.tel && mailData.ext) ? 'ext.' + mailData.ext : '')}</h3						
						<h3 style="margin-top: 0px">Type: ${mailData.inquiry}</h3>
						<h2 style="margin: 0px; font-weight: bold">MESSAGE</h2>
						<p style="margin: 0px"> ${mailData.message}</p>
						<p style="font-size: 12px"> This email was sent from a notification-only address that cannot accept incoming email. Please do not reply to this message.</p>
					</div >`
		}
		// Sends mail using nodeMailer
		transporter.sendMail(mail, (err, info) => {
			if (err) {
				console.log(err);
				res.send({ status: 404, text: err });
			}
			else {
				res.send({ status: 200, text: 'Email Sent' });
			}
			transporter.close();
		});

	});

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains email routes
module.exports = router;
