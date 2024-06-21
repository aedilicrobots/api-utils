"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class ValidationError extends APIError_1.default {
    constructor(message = "The provided data is invalid.", options = {}) {
        super(400, message, options);
    }
}
exports.default = ValidationError;
