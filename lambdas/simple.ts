import { Handler } from "aws-lambda";

export const handler: Handler = async (event, context) => {
  try {
    console.log("I was invoked");
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: "This is a message returned from Lambda" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ error }),
    };
  }
};
