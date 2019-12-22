const express = require('express');
const router = express.Router();
const ContactController = require('../controller/ContactController');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const upload = multer();

router.get('/',  ContactController.get_all);

router.post('/addContact',  ContactController.addContact);

router.get('/get_single_contact/:contactId', checkAuth, ContactController.get_single_contact);

router.patch('/update_contact/:contactId',  checkAuth, ContactController.update_contact);

router.delete('/delete_contact/:contactId',  checkAuth, ContactController.delete_contact);

module.exports = router;