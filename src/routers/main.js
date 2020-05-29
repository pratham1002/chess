const express = require('express')
const router = new express.Router()

router.get('/chess', (req, res) => {
	res.render('chess/index')
})

router.get('*', (req, res) => {
	res.redirect('/chess')
})

module.exports = router 
