import APIError from "./APIError";
import { APIErrorOptions } from "./APIError";
declare class LockedError extends APIError {
    constructor(message?: string, options?: APIErrorOptions);
}
export default LockedError;
