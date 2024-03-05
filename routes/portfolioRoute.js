const express = require("express");
const { sendEmailController } = require("../controller/portfolioContoller");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController);

// /export
module.exports = router;


