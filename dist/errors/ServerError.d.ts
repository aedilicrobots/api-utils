import APIError from "./APIError";
declare class ServerError extends APIError {
    constructor(message?: string);
}
export default ServerError;
