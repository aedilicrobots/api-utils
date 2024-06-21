import APIError from "./APIError";

/**
 * AuthenticationError for indicating problems with authentication.
 */
class AuthenticationError extends APIError {
  constructor(message: string = "Accessing this endpoint requires authentication.") {
    super(401, message, {});
  }
}

export default AuthenticationError;
