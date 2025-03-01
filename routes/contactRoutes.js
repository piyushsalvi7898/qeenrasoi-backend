const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST route for submitting contact form
router.post('/', contactController.submitContactForm);

// GET route for retrieving all contact submissions
router.get('/', contactController.getContacts);

module.exports = router;