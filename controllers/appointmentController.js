const Appointment = require('../models/Appointment');

// Function to handle appointment bookings
exports.bookAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: 'Failed to book appointment', error });
  }
};

// Function to get all appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();

    // Format date before sending response
    const formattedAppointments = appointments.map((appointment) => ({
      ...appointment._doc,
      date: appointment.date.toISOString().split("T")[0] // Convert "YYYY-MM-DD"
    }));

    res.status(200).json(formattedAppointments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve appointments', error });
  }
};
