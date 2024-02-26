"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const handleContactFormSubmission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    // Validate form data
    if (!name || !email || !message) {
        res.status(400).json({ error: 'Please fill out all fields' });
        return;
    }
    try {
        // Read email templates
        const subjectTemplate = fs_1.default.readFileSync('src/emailTemplates/emailSubject.hbs', 'utf8');
        const bodyTemplate = fs_1.default.readFileSync('src/emailTemplates/emailBody.hbs', 'utf8');
        // Compile templates
        const compiledSubjectTemplate = handlebars_1.default.compile(subjectTemplate);
        const compiledBodyTemplate = handlebars_1.default.compile(bodyTemplate);
        // Render templates with form data
        const subject = compiledSubjectTemplate({ name });
        const body = compiledBodyTemplate({ name, email, message });
        // Create email transporter
        const transporter = nodemailer_1.default.createTransport({
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
        const info = yield transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Thank you for contacting us! We will get back to you soon.' });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
});
exports.default = handleContactFormSubmission;
