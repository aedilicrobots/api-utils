import APIError from "./APIError";
/**
 * AuthenticationError for indicating problems with authentication.
 */
declare class AuthenticationError extends APIError {
    constructor(message?: string);
}
export default AuthenticationError;
