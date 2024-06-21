import APIError from "./APIError";

interface Params {
  code?: number;
  fields?: string[];
}

/**
 * InputError for indicating problems with input.
 */
class InputError extends APIError {
  constructor(message: string = "The provided input is invalid.", options: Params = {}) {
    super(422, message, options);
  }
}

export default InputError;
