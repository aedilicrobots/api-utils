import APIError from "./APIError";
interface Params {
    code?: number;
    fields?: string[];
}
/**
 * ForbiddenError for indicating that access to the requested resource is forbidden.
 */
declare class ForbiddenError extends APIError {
    constructor(message?: string, options?: Params);
}
export default ForbiddenError;
