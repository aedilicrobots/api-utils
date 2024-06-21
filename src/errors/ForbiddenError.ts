import APIError from "./APIError";

interface Params {
  code?: number;
  fields?: string[];
}

/**
 * ForbiddenError for indicating that access to the requested resource is forbidden.
 */
class ForbiddenError extends APIError {
  constructor(message: string = "Unauthorized to access this endpoint.", options: Params = {}) {
    super(403, message, options);
  }
}

export default ForbiddenError;
