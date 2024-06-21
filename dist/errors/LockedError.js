"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class LockedError extends APIError_1.default {
    constructor(message = "This resource is currently locked.", options = {}) {
        super(423, message, options);
    }
}
exports.default = LockedError;
