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
declare class APIError extends Error {
    name: string;
    message: string;
    statusCode: number;
    code?: number;
    fields?: string[];
    timeout?: number;
    constructor(statusCode: number, message: string, { code, fields, timeout }?: APIErrorOptions);
    /**
     * Builds a response object that can be returned to the client..
     * @returns The response object.
     */
    get response(): APIErrorResponse;
    /**
     * Creates a response for express framework controllers.
     * @param res - The express response.
     * @returns The modified express response object.
     */
    expressResponse(res: Response): Response<any, Record<string, any>>;
}
export default APIError;
