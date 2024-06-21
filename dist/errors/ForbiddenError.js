"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
/**
 * ForbiddenError for indicating that access to the requested resource is forbidden.
 */
class ForbiddenError extends APIError_1.default {
    constructor(message = "Unauthorized to access this endpoint.", options = {}) {
        super(403, message, options);
    }
}
exports.default = ForbiddenError;
