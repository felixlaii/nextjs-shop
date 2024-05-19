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

    if (!event.body) {
      return {
        statusCode: 400,
        body: "Bad Request: No body in request",
      };
    }

    const formData = new FormData();
    const parsedBody = JSON.parse(event.body);

    const name: string | null = parsedBody.name;
    const email: string | null = parsedBody.email;
    const files = event.isBase64Encoded
      ? JSON.parse(Buffer.from(event.body, "base64").toString("utf8")).files
      : parsedBody.files;

    if (!name || !email) {
      return {
        statusCode: 400,
        body: "Bad Request: Name and email are required",
      };
    }

    if (files && files.file) {
      const fileContent = files.file.content;
      const fileName = files.file.filename;
      if (typeof fileContent === "string" && typeof fileName === "string") {
        const fileBuffer = Buffer.from(fileContent, "base64");
        formData.append("file", fileBuffer, fileName);
      } else {
        return {
          statusCode: 400,
          body: "Bad Request: Invalid file format",
        };
      }
    }

    formData.append("name", name);
    formData.append("email", email);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully!" }),
    };
  } catch (error) {
    let errorMessage = "Unknown error";

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: errorMessage,
      }),
    };
  }
};

export { handler };
