const express = require('express');
const router = express.Router();
const  authMiddleware  = require('../middleware/authMiddleware.js');
const { dataset } = require('../controllers/dataController.js')

router.use(authMiddleware)

router.get('/data', dataset)

module.exports = router;