/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from "fs";

// Read the HTML template file
const htmlTemplate = fs.readFileSync(
  "templates/paymentSuccessEmail.html",
  "utf8"
);

// Function to replace placeholder tags or patterns with dynamic content
const buildEmailBody = (placeholders: { [x: string]: string }) => {
  let result = htmlTemplate;
  Object.keys(placeholders).forEach((placeholder) => {
    const pattern = new RegExp(`{{${placeholder}}}`, "g");
    result = result.replace(pattern, placeholders[placeholder]);
  });
  return result;
};

export default buildEmailBody;
