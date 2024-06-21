"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class NotFoundError extends APIError_1.default {
    constructor(message = "The requested endpoint does not exist.", options = {}) {
        super(404, message, options);
    }
}
exports.default = NotFoundError;
