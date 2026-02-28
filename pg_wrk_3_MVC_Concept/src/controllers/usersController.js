const {
  insertUsers,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../models/usersModel");

const path = require("path");

const homePage = async (req, res) => {
  try {
    await res.render("home");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in Home Page");
  }
};

const getcreateUser = async (req, res) => {
  try {
    res.render("createUser");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in Create Users");
  }
};

const createUser = async (req, res) => {
  try {
    await insertUsers(req.body);
    res.send("<h1>Successfully User Created..! Thank You</h1>");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in Create Users");
  }
};

const getUsers = async (req, res) => {
  try {
    let users = await getAllUsers();
    res.render("viewallusers", { users });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in GetAllUsers");
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await getUserById(id);
    res.render("viewbyid", { users: result[0] });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in GetUsersById");
  }
};

const userUpdate = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    await updateUser(body, id);
    res.send("<h1>Successfully Updated..!</h1>");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in Users Update");
  }
};

const userDelete = async (req, res) => {
  try {
    let id = req.params.id;
    await deleteUser(id);
    res.send("<h1>Successfully Deleted..!</h1>");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error in Delete Users");
  }
};

module.exports = {
  getcreateUser,
  createUser,
  homePage,
  getUsers,
  getById,
  userUpdate,
  userDelete,
};
