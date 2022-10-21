const express = require("express");
const router = express.Router();
const productsService = require("../service/productsService");

router.get("/products", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let products = await productsService.getProducts();
  res.json(products);
});

router.get("/products/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let products = await productsService.getProduct(productId);
  res.json(products);
});

router.get("/productsFilter/:type", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let type = req.params.type;

  let productsFilter = await productsService.getProductsFilter(type);

  res.json(productsFilter);
});

router.get("/productSize/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let products = await productsService.getProductSize(productId);
  res.json(products);
});

router.get("/productStar/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let productStarsData = await productsService.getProductStar(productId);
  res.json(productStarsData);
});

router.get("/relatedProducts/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let relatedProducts = await productsService.getRelatedProducts(productId);
  res.json(relatedProducts);
});

router.get("/favProduct/:user_id/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let userId = req.params.user_id;

  let favProduct = await productsService.getFavProduct(productId, userId);

  res.send(favProduct);
});

router.put("/favProduct", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.body.product_id;
  let userId = req.body.user_id;

  let favProduct = await productsService.putFavProduct(productId, userId);

  res.send(favProduct);
});

router.post("/deletFavProduct", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.body.product_id;
  let userId = req.body.user_id;

  let favProduct = await productsService.deleteFavProduct(productId, userId);

  res.send(favProduct);
});

router.get("/getCustomerFavProduct/:customer_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let customerId = req.params.customer_id;
  let products = await productsService.getCustomerFavProduct(customerId);
  res.json(products);
});

module.exports = router;
