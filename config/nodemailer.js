import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: false,
    auth: {
        user: email,
        pass,
    },
})

export const mailOptions = {
    from: email,
    to: email,
}