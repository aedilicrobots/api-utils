"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
/**
 * Access environment variables.
 * @param key The key of the environment variable.
 * @param alt An alternative value to return if the environment variable is not found.
 * @returns The value of the environment variable.
 * @throws An error if the environment variable is not found and no alternative value is provided.
 */
function accessEnv(key, alt) {
    const value = process.env[key];
    if (value !== undefined)
        return value;
    if (alt !== undefined)
        return alt;
    throw new Error(`Environment variable ${key} not found.`);
}
exports.default = accessEnv;
