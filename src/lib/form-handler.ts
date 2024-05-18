import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import FormData from "form-data";
import fetch from "node-fetch";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }

    const formData = new FormData();
    const { name, email } = JSON.parse(event.body);

    const files = event.isBase64Encoded
      ? JSON.parse(Buffer.from(event.body, "base64").toString("utf8")).files
      : undefined;

    if (files && files.file) {
      const fileBuffer = Buffer.from(files.file.content, "base64");
      formData.append("file", fileBuffer, files.file.filename);
    }

    formData.append("name", name);
    formData.append("email", email);

    // Optionally, send the form data to a third-party service or process it here
    // Example of sending the form data to an external service
    // const response = await fetch('https://example.com/endpoint', {
    //   method: 'POST',
    //   body: formData,
    // });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};

export { handler };
