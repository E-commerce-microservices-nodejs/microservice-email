import nodemailer from "nodemailer";

const sendEmail = async (emailData: {
  to: string;
  subject: string;
  body: string;
}): Promise<void> => {
  const smtpConfig = {
    host: "smtp.gmail.com",
    port: 465,

    secure: true, // use SSL
    auth: {
      user: "elhryad8@gmail.com",
      pass: "0670506h#"
    }
  };
  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: "elhryad8@gmail.com",
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.body
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
