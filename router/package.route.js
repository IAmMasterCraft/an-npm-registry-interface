const express = require("express");
const router = express.Router();

const controller = require("../controller/package.controller");

router.get("/check-package/:name", controller.package);

module.exports = router;