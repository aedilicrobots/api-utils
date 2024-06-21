import APIError from "./APIError";
import { APIErrorOptions } from "./APIError";

class LockedError extends APIError {
  constructor(message: string = "This resource is currently locked.", options: APIErrorOptions = {}) {
    super(423, message, options);
  }
}

export default LockedError;
