var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:passwd@postgres:5432/postgres')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/person', (req, res, next) => {
	let people = db.one('SELECT * from person')
		.then(people => console.log({people}))
		.catch(error => console.log('Connection error'));
	res.render('index', { title: 'get Person' })
});

module.exports = router;
