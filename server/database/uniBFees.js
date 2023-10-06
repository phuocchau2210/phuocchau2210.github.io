const DB = require("./uniBFees.json");
const getFees = () => {
  return DB.data;
};

module.exports = { getFees };
