const fs = require("fs");

const getListProduct = () => {
  let result = fs.readFileSync("./src/product.json");
  result = JSON.parse(result);
  return result;
};

const updateListProduct = (item) => {
  fs.writeFileSync("./src/product.json", JSON.stringify(item));
};

module.exports = {
  getListProduct,
  updateListProduct,
};
