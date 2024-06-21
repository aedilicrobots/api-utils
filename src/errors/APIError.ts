import { Response } from "express";

export interface APIErrorOptions {
  code?: number;
  fields?: string[];
  timeout?: number;
}

export type APIErrorResponse = {
  message: string;
  statusCode: number;
} & APIErrorOptions;

/**
 * The APIError can be used to return any error in a fixed format.
 * @param statusCode - A HTTP status code that describes the error.
 * @param message - A message that specifies the error.
 * @param options - Further parameters that can be set.
 */
class APIError extends Error {
  name: string;
  message: string;
  statusCode: number;

  code?: number;
  fields?: string[];
  timeout?: number;

  constructor(statusCode: number, message: string, { code, fields, timeout }: APIErrorOptions = {}) {
    super();
    this.name = "APIError";
    this.message = message;
    this.statusCode = statusCode;

    this.code = code;
    this.fields = fields;
    this.timeout = timeout;
  }

  /**
   * Builds a response object that can be returned to the client..
   * @returns The response object.
   */
  get response() {
    let data: APIErrorResponse = { message: this.message, statusCode: this.statusCode };

    if (this.code !== undefined) data = { ...data, code: this.code };

    if (this.fields !== undefined) data = { ...data, fields: this.fields };

    if (this.timeout !== undefined) data = { ...data, timeout: this.timeout };

    return data;
  }

  /**
   * Creates a response for express framework controllers.
   * @param res - The express response.
   * @returns The modified express response object.
   */
  expressResponse(res: Response) {
    return res.status(this.statusCode).json(this.response);
  }
}

export default APIError;
