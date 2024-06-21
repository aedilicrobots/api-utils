import APIError from "./APIError";
import { APIErrorOptions } from "./APIError";
declare class ValidationError extends APIError {
    constructor(message?: string, options?: APIErrorOptions);
}
export default ValidationError;
