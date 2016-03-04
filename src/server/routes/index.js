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

// function validEmail(req, res, next){
// 	/* not black
// 	not just @ symbol
// 	text before @
// 	valid text after
// 	*/

// var email = req.body.email;
//  if ( !email.trim() ) {
//    req.flash('message', {
//      status: 'danger',
//      value: 'Invalid Email.  Please try again.'
//    });
//    return res.redirect('/');
//  }

//  if (email === '@') {
//    req.flash('message', {
//      status: 'danger',
//      value: 'Invalid Email.  Please try again.'
//    });
//    return res.redirect('/');
//  }


// 	if( email.indexOf('@') === -1 ){
// 	req.flash('message', {
// 		status: 'danger',
// 		value: 'Invalid Email.  Please try again.'
// 	});
// }

// var emailArray = email.split('@');
// if( emailArray.length !== 2 && emailArray[0].length <= 0 || emailArray[1].length <= 0 ){
// 	req.flash('message', {
// 		status: 'danger',
// 		value: 'Invalid email please try again.'
// 	})

// var afterAtArray = emailArray[1].split('.');

// 	if( afterAtArray.length !== 2 && emailArray[0].length === 3){

// 	}

// }

// return next();

// 	//  if( email.indexOf(req.body.email) === -1 ){ // if not there
// 	//  	// throw error
// 	//  	// send flash message
// 	//  	req.flash('message',{
// 	//  	 status: 'danger',
// 	//  	 value:'Invalid email, please try again'
// 	//  	});
// 	//  	res.redirect('/');
// 	//  	} else {
// 	//  	// pass request to callback function
// 	//  	req.flash('message',{
// 	//  			status: 'success',
// 	//  			value: 'Valid email'
// 	// });
// 	// 	return next();
// 	//  }

// }




// function validateEmail (email) {
//     var emailArray = email;
//     var emailArraySplit = email.split('@');
//     console.log(emailArray);
//     if (emailArray === "") {
//       console.log("No email provided, returns false");
//       return false;
//     }
//     else if (emailArraySplit[1].indexOf('.') === -1) {
//       console.log("Missing a '.' after the '@', returns false");
//       return false;
//     }
//     else {
//       console.log("Email is valid, returns true");
//       return true;
//     }
//   }






module.exports = router;
