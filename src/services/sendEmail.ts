import nodemailer from "nodemailer";
import dotenv from "dotenv";
import buildEmailBody from "./buildEmailBody";

dotenv.config();

const sendEmail = async (emailData: {
  to: string;
  subject: string;
  fullname: string;
  amount: number;
  orderId: string;
  transactionId: string;
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
  const placeholders = {
    fullname: emailData.fullname,
    orderId: emailData.orderId,
    paymentId: emailData.transactionId
  };
  const body = buildEmailBody(placeholders);
  const mailOptions = {
    from: `${process.env.ORGANIZATION_EMAIL}`,
    to: emailData.to,
    subject: emailData.subject,
    html: body
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
