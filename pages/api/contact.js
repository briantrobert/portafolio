// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter, mailOptions } from "@/config/nodemailer";

export default async function handler (req, res){
  if(req.method === "POST") {
    const data = req.body;
    if(!data.name || !data.email || !data.message){
      res.status(400).json({ message: 'Bad request' })
    }
    
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Nodemailer",
        html:`<h1>From: ${data.name}</h1><h2>Email: ${data.email}</h2><p>${data.message}</p>`,
      });
      res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error.message })
    }
    
  }else{
    console.log(req.body);
    res.status(400).json({ message: 'Bad request' })
  }
  
}
