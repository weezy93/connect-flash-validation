var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');

var email = [
	'louisa.e.reese@gmail.com',
	'michael@herman.org',
	'michael@realpython.com'
];

router.get('/', function(req, res, next) {
  res.render('index', {
  	message: req.flash('message')[0]
  });
});

router.post('/', validEmail, function(req, res, next) {
  res.render('index', {
  	message: req.flash('message')[0]
  });
});


// helpers

function validEmail(req, res, next){
	 if( email.indexOf(req.body.email) === -1 ){ // if not there
	 	// throw error
	 	// send flash message
	 	req.flash('message',{
	 	 status: 'danger',
	 	 value:'Invalid email, please try again'
	 	});
	 	res.redirect('/');
	 	} else {
	 	// pass request to callback function
	 	req.flash('message',{
	 			status: 'success',
	 			value: 'Valid email'
	});
		return next();
	 }

}


module.exports = router;
