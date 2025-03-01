const Contact = require('../models/Contact');

// Function to handle contact form submissions
exports.submitContactForm = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: 'Failed to submit contact form', error });
  }
};


// Function to get all contact submissions
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve contacts', error });
  }
};