const express = require("express");
const route = express.Router();
const {
  getcreateUser,
  createUser,
  homePage,
  getUsers,
  getById,
  userUpdate,
  userDelete,
} = require("../controllers/usersController");

route.get("/", homePage);

route.get("/insertUser", getcreateUser);
route.post("/insertUser", createUser);

route.get("/view", getUsers);

route.get("/view/:id", getById);

route.patch("/update/:id", userUpdate);

route.delete("/delete/:id", userDelete);

module.exports = route;
