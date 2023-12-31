const express = require('express');

const { getCountryDetails } = require('../controllers/countryController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
router.use(requireAuth)



//country details
router.get('/getCountryDetails', getCountryDetails)


module.exports = router