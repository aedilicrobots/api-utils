"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class ServerError extends APIError_1.default {
    constructor(message = "An unknown error has occurred.") {
        super(500, message, {});
    }
}
exports.default = ServerError;
