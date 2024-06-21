import APIError from "./APIError";

class ServerError extends APIError {
  constructor(message: string = "An unknown error has occurred.") {
    super(500, message, {});
  }
}

export default ServerError;
