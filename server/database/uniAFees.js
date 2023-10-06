const DB = require("./uniAFees.json");
const getFees = () => {
  return DB.data;
};

module.exports = { getFees };
