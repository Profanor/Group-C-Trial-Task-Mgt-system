Portfolio Website Contact Form Implementation

This project implements a contact form feature for a portfolio website, allowing visitors to submit messages to the developer.

Table of Contents

- Introduction

- Features

- Technologies Used

- Installation

- Usage

- API Documentation

- Contributing

Introduction
This project aims to enhance a portfolio website by adding a contact form functionality. Visitors to the website can use this form to send messages or inquiries to the website owner or developer.

Features

Contact form with fields for name, email, and message.

Server-side logic to handle form submissions and send emails to the specified destination.

Error handling for incomplete or invalid form submissions.

Integration with external SMTP service for email delivery.

Technologies Used

- Node.js

- Express.js

- Nodemailer

- Postman (for API testing and documentation)

Installation
Clone the repository:
git clone <repository_url>
Install dependencies:
npm install

Usage
Set up environment variables:

Create a .env file in the project root directory.

Add the following variables:

PORT=3000

SMTP_SERVICE=your_smtp_service

SMTP_USER=your_smtp_username

SMTP_PASS=your_smtp_password

DESTINATION_EMAIL=your_destination_email

Start the server:

npm start

Access the contact form in your web browser at http://localhost:3000/users/contact.

API Documentation
For API documentation and testing, import the provided Postman collection and environment file. Use Postman to send test requests to the server endpoints and view the API documentation 
https://documenter.getpostman.com/view/31288774/2sA2rDxgXq

Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/new-feature).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/new-feature).
- Create a new Pull Request.
