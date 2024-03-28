import express from 'express';
import handleContactFormSubmission from '../controllers/contact';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hi user');
});

// Route for handling contact form submission
router.post('/contact', handleContactFormSubmission);

export default router;
