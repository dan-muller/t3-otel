import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  driver: "pg",
  out: "./drizzle",
  schema: "./src/server/db/schema.ts",
} satisfies Config;
