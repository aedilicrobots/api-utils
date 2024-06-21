import APIError from "./APIError";
import { APIErrorOptions } from "./APIError";

class ValidationError extends APIError {
  constructor(message: string = "The provided data is invalid.", options: APIErrorOptions = {}) {
    super(400, message, options);
  }
}

export default ValidationError;
