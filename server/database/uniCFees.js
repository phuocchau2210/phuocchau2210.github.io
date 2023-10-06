const DB = require("./uniCFees.json");
const getFees = () => {
  return DB.data;
};

module.exports = { getFees };
