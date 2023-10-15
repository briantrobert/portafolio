require('dotenv').config();
import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    // host: "smtp.gmail.com",
    // port: 465,
    auth: {
        user: email,
        pass: pass,
    },
})

export const mailOptions = {
    from: email,
    to: email,
}