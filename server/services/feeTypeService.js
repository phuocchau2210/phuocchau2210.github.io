const uniAFee = require("../database/uniAFees");
const uniBFee = require("../database/uniBFees");
const uniCFee = require("../database/uniCFees");

const FeeTypes = {
  A: uniAFee,
  B: uniBFee,
  C: uniCFee,
};

const getAllFees = () => {
  return;
};

const getOneFee = (uniId) => {
  return FeeTypes[uniId].getFees();
};

module.exports = {
  getAllFees,
  getOneFee,
};
