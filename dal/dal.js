const fs = require("fs");
const express = require("express");
const path = "C:/kodcode/project bode/dal/data.json";

const listProduct = () => {
  const data = getJson(path);
  return data;
};
const findProduct = (id) => {
  const data = getJson(path);
  const find = data.find((product) => product.id === id);
  return find;
};

const getJson = (path) => {
  const dataFromJson = fs.readFileSync(path);
  const convertData = JSON.parse(dataFromJson);
  return convertData;
};
module.exports.listProduct = listProduct;
module.exports.findProduct = findProduct;
