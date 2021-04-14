/**
 * Compare the password using [isValidPassword]
 * @param text - The raw password from the user
 * @param password - Hashed password from the db
 */
import { compareSync } from "bcrypt";

// @ts-ignore
export const isValidPassword = (text: string, password: string) => {
  return compareSync(text, password);
};

export const generateCode = (prefix: string) => {
  return `${prefix}-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
};

export const generateOrderCode = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

export const slugify = (text: string): string => {
  return text
    .replace(/\.+/g, "")
    .replace(/\/+/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};
