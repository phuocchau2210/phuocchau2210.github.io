const feeTypeService = require("../services/feeTypeService");

const getAllFees = (req, res) => {
  const allFees = feeTypeService.getAllFees();
  res.json("Getting all fees");
};

const getOneFee = (req, res) => {
  const uniId = req.params.uniId;
  const fee = feeTypeService.getOneFee(uniId);
  res.json(fee);
};

module.exports = {
  getAllFees,
  getOneFee,
};
