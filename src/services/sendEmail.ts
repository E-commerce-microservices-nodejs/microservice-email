import nodemailer from "nodemailer";
import dotenv from "dotenv";
<<<<<<< HEAD
=======
import buildEmailBody from "./buildEmailBody";
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093

dotenv.config();

const sendEmail = async (emailData: {
  to: string;
  subject: string;
<<<<<<< HEAD
  body: string;
=======
  fullname: string;
  amount: number;
  orderId: string;
  transactionId: string;
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093
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
<<<<<<< HEAD

=======
  const placeholders = {
    fullname: emailData.fullname,
    orderId: emailData.orderId,
    paymentId: emailData.transactionId
  };
  const body = buildEmailBody(placeholders);
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093
  const mailOptions = {
    from: `${process.env.ORGANIZATION_EMAIL}`,
    to: emailData.to,
    subject: emailData.subject,
<<<<<<< HEAD
    text: emailData.body
=======
    html: body
>>>>>>> 5f98631422b9e20ec78ba7c5728165717ce7d093
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
