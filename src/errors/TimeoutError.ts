import APIError from "./APIError";
import { APIErrorOptions } from "./APIError";

class TimeoutError extends APIError {
  constructor(message: string = "The request has timed out.", options: APIErrorOptions = {}) {
    super(429, message, options);
  }
}

export default TimeoutError;
