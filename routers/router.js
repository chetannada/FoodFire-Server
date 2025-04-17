const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");

router.route("/").get(controller.initialData);

router.route("/api/restaurants").get(controller.restaurantsData);

router.route("/api/menu").get(controller.menuData);

module.exports = router;
