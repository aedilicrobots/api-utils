import "dotenv/config";
/**
 * Access environment variables.
 * @param key The key of the environment variable.
 * @param alt An alternative value to return if the environment variable is not found.
 * @returns The value of the environment variable.
 * @throws An error if the environment variable is not found and no alternative value is provided.
 */
declare function accessEnv(key: string, alt?: any): any;
export default accessEnv;
