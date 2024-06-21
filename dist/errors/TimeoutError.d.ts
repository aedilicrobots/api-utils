import APIError from "./APIError";
import { APIErrorOptions } from "./APIError";
declare class TimeoutError extends APIError {
    constructor(message?: string, options?: APIErrorOptions);
}
export default TimeoutError;
