const {drizzle} = require('drizzle-orm/sqlite-core');

export const db = drizzle(process.env.DATABASE_URL);