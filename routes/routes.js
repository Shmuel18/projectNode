const express = require("express");
const router = express.Router();
const { list, elect } = require("./Service");

// רשימה של המוצרים
router.get("/", list);

// החזרת מוצר לפי מזהה
router.get("/:id", elect);

// // יצירת מוצר חדש
// router.post("/", (req, res) => {
//   newProduct = {
//     id: req.body.id,
//     title: req.body.title,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//     image: req.body.image,
//     quantity: req.body.quantity,
//     // rating{ rate: req.body.rating.rate,
//     //     count : req.body.quantity,}
//   };
//   product.push(newProduct);
//   res.send(product);
// });
// //עדכון פרטי מוצר
// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   const found = product.find((product) => product.id === id);

//   if (found) {
//     const updateProduct = req.body;

//     product.forEach((product) => {
//       if (product.id === id) {
//         product.title = updateProduct.title
//           ? updateProduct.title
//           : product.title;
//         product.description = updateProduct.description
//           ? updateProduct.description
//           : product.description;
//         product.price = updateProduct.price
//           ? updateProduct.price
//           : product.price;

//         product.category = updateProduct.category
//           ? updateProduct.category
//           : product.category;
//         product.image = updateProduct.image
//           ? updateProduct.image
//           : product.image;
//         product.quantity = updateProduct.quantity
//           ? updateProduct.quantity
//           : product.quantity;
//         product.rating.rate = updateProduct.rating.rate
//           ? updateProduct.rating.rate
//           : product.rating.rate;
//         product.rating.count = updateProduct.rating.count
//           ? updateProduct.rating.count
//           : product.rating.count;

//         res.send({ msg: "product updated", product });
//       }
//     });
//   }
// });
// // מחיקת מוצר
// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   const found = product.findIndex((product) => product.id === id);
//   product.splice(found, 1);
//   res.send(product);
// });
module.exports.router = router;
