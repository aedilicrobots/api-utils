"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
/**
 * InputError for indicating problems with input.
 */
class InputError extends APIError_1.default {
    constructor(message = "The provided input is invalid.", options = {}) {
        super(422, message, options);
    }
}
exports.default = InputError;
