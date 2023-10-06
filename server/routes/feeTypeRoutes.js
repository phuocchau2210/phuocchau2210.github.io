const express = require("express");
const router = express.Router();

const feeTypeController = require("../controllers/feeTypeController");

router.get("/", feeTypeController.getAllFees);

router.get("/:uniId", feeTypeController.getOneFee);

module.exports = router;
