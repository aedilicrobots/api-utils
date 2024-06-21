import APIError from "./APIError";
interface Params {
    code?: number;
    fields?: string[];
}
/**
 * InputError for indicating problems with input.
 */
declare class InputError extends APIError {
    constructor(message?: string, options?: Params);
}
export default InputError;
