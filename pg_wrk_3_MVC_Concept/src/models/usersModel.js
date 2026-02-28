const { users } = require("../db/schema/usersSchema");
const db = require("../db/db_connect");
const { eq } = require("drizzle-orm");

const insertUsers = async ({ firstName, lastName, age, phone, email }) => {
  return await db
    .insert(users)
    .values({ firstName, lastName, age, phone, email });
};

const getAllUsers = async () => {
  return await db.select().from(users);
};

const getUserById = async (id) => {
  return await db.select().from(users).where(eq(users.id, id));
};

const updateUser = async (body, id) => {
  return await db.update(users).set(body).where(eq(users.id, id));
};

const deleteUser = async (id) => {
  return await db.delete(users).where(eq(users.id, id));
};

module.exports = {
  insertUsers,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
