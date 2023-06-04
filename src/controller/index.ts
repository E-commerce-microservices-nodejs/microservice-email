/* eslint-disable no-console */
import amqp from "amqplib";
import dotenv from "dotenv";
import sendEmail from "../services/sendEmail";

dotenv.config();

async function rabbitMqConnect(): Promise<void> {
  try {
    const connection: amqp.Connection = await amqp.connect(
      `${process.env.RABBIT_MQ_URI}`
    );
    const channel: amqp.Channel = await connection.createChannel();
    await channel.assertQueue("email");

    await channel.consume("email", (message: amqp.ConsumeMessage | null) => {
      console.log("message received", message?.content.toString());
      if (message) {
        const emailData = JSON.parse(message.content.toString());
        console.log(emailData);

        sendEmail(emailData)
          .then(() => {
            console.log(`Email sent to ${emailData.fullname}`);
            channel.ack(message);
          })
          .catch((error) => {
            console.error(
              `Failed to send email to ${emailData.fullname}`,
              error
            );
            channel.nack(message);
          });
      }
    });

    console.log("Waiting for email messages...");
  } catch (ex: unknown) {
    console.error(ex);
  }
}
export default rabbitMqConnect;
