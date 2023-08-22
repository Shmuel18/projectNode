const express = require("express");
const { listProduct, findProduct } = require("../dal/dal");

const list = (req, res) => {
  const product = listProduct();
  res.send(product);
};
const Select = (req, res) => {
  const id = req.params.id;
  const find = findProduct(id);
  res.send(find);
};

//   const fin = findProduct();
//   res.send(fin);
// };

module.exports.list = list;
module.exports.Select = Select;
