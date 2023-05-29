import amqp from "amqplib";
import sendEmail from "../services/sendEmail";

async function rabbitMqConnect(): Promise<void> {
  try {
    const connection: amqp.Connection = await amqp.connect(
      "amqp://localhost:5672"
    );
    const channel: amqp.Channel = await connection.createChannel();
    await channel.assertQueue("email");

    await channel.consume("email", (message: amqp.ConsumeMessage | null) => {
      console.log("message received", message?.content.toString());
      if (message) {
        const emailData: { to: string; subject: string; body: string } = {
          to: "riadelhajjaji@gmail",
          subject: "my message",
          body: "Hello i am riad"
        };
        // =JSON.parse(message.content.toString());
        console.log("send Email...");
        sendEmail(emailData)
          .then(() => {
            console.log(`Email sent to ${emailData.to}`);
            channel.ack(message);
          })
          .catch((error) => {
            console.error(`Failed to send email to ${emailData.to}`, error);
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
