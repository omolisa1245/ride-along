import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
      service: 'gmail.com',
      auth: {
        user: "justtring8@gmail.com",
        pass: "htpuhxolrbebhtvs",
      }
});

export default transporter;