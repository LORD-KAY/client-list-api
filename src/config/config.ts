import { env } from "./env.config";

export const config = {
  get: (key: string): string | null => {
    const keys = key.split(".");
    let variables: any = env;
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (key in variables) {
        variables = variables[key];
      }
    }
    return variables ?? null;
  },
};
