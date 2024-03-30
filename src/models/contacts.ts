import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    message: String,
    date: {
        type: Date,
        default: Date.now,
      },
    },
      {
      timestamps: true,
      }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;