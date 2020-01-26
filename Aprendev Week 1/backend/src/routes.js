const { Router } = require("express");
const LoginController = require("./controllers/LoginController");

const routes = Router();

routes.post("/login", LoginController.index);

module.exports = routes;
