const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// POST route for booking appointments
router.post('/', appointmentController.bookAppointment);

// GET route for retrieving all appointments
router.get('/', appointmentController.getAppointments);

module.exports = router;