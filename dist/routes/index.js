"use strict";
const express_1 = require("express");
const router = express_1.Router();
const controllers_1 = require("../controllers/");
router.post("/conversion", controllers_1.getCurrency);
module.exports = router;
