"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class TimeoutError extends APIError_1.default {
    constructor(message = "The request has timed out.", options = {}) {
        super(429, message, options);
    }
}
exports.default = TimeoutError;
