require('dotenv').config();
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    // host: "smtp.gmail.com",
    // port: 465,
    auth: {
        user: 'briantrobert89@gmail.com',
        pass: 'dgxkzvwtzgcuezzw',
    },
})

export const mailOptions = {
    from: 'briantrobert89@gmail.com',
    to: 'briantrobert89@gmail.com',
}