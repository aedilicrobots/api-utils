"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The APIError can be used to return any error in a fixed format.
 * @param statusCode - A HTTP status code that describes the error.
 * @param message - A message that specifies the error.
 * @param options - Further parameters that can be set.
 */
class APIError extends Error {
    constructor(statusCode, message, { code, fields, timeout } = {}) {
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
        let data = { message: this.message, statusCode: this.statusCode };
        if (this.code !== undefined)
            data = Object.assign(Object.assign({}, data), { code: this.code });
        if (this.fields !== undefined)
            data = Object.assign(Object.assign({}, data), { fields: this.fields });
        if (this.timeout !== undefined)
            data = Object.assign(Object.assign({}, data), { timeout: this.timeout });
        return data;
    }
    /**
     * Creates a response for express framework controllers.
     * @param res - The express response.
     * @returns The modified express response object.
     */
    expressResponse(res) {
        return res.status(this.statusCode).json(this.response);
    }
}
exports.default = APIError;
