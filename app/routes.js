// External dependencies
var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient('process.env.9be5ec1b-f595-48d3-a9d6-095f23092215');


const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line


// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/change-form/login-screen', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '9be5ec1b-f595-48d3-a9d6-095f23092215',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/change-form/email-auth-code');

});
module.exports = router;
