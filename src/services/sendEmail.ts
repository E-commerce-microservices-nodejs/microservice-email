import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (emailData: {
  to: string;
  subject: string;
  body: string;
}): Promise<void> => {
  const smtpConfig = {
    host: "smtp-mail.outlook.com",
    service: "outlook", // service name
    secureConnection: false,
    port: 587,

    secure: false, // use SSL
    auth: {
      user: `${process.env.ORGANIZATION_EMAIL}`,
      pass: `${process.env.ORGANIZATION_PASSWORD}`
    }
  };
  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: `${process.env.ORGANIZATION_EMAIL}`,
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.body
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
