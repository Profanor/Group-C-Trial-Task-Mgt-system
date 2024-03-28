import { Request, Response } from 'express';
import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';

const handleContactFormSubmission = async (req: Request, res: Response): Promise<void> => {
  const { fullName, email, message } = req.body;

  // Validate form data
  if (!fullName || !email || !message) {
    res.status(400).json({ error: 'Please fill out all fields' });
    return;
  }

  try {
    // Read email templates
    const subjectTemplate = fs.readFileSync('src/emailTemplates/emailSubject.hbs', 'utf8');
    const bodyTemplate = fs.readFileSync('src/emailTemplates/emailBody.hbs', 'utf8');

    // Compile templates
    const compiledSubjectTemplate = handlebars.compile(subjectTemplate);
    const compiledBodyTemplate = handlebars.compile(bodyTemplate);

    // Render templates with form data
    const subject = compiledSubjectTemplate({ name: fullName });
    const body = compiledBodyTemplate({ fullName, email, message });

    // Create email transporter
    const transporter: Transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Compose the email message
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.DESTINATION_EMAIL,
      subject,
      text: body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Thank you for contacting us! We will get back to you soon.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};

export default handleContactFormSubmission;