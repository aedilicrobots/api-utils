import APIError from "./APIError";
import { APIErrorOptions } from "./APIError";

class NotFoundError extends APIError {
  constructor(message: string = "The requested endpoint does not exist.", options: APIErrorOptions = {}) {
    super(404, message, options);
  }
}

export default NotFoundError;
