import APIError from "./APIError";
import { APIErrorOptions } from "./APIError";
declare class NotFoundError extends APIError {
    constructor(message?: string, options?: APIErrorOptions);
}
export default NotFoundError;
