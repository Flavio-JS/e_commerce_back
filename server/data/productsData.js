const db = require("../infra/connection");

exports.getProducts = function () {
  return db.query("SELECT * FROM products");
};

exports.getProduct = function (productId) {
  return db.query(`SELECT * FROM products WHERE product_id = ${productId}`);
};

exports.getProductSize = function (productId) {
  return db.query(
    `SELECT p, m, g, gg FROM product_sizes WHERE product_id = ${productId}`
  );
};

exports.getProductStar = function (productId) {
  return db.query(
    `SELECT one_star, two_star, three_star, four_star, five_star FROM rating_star WHERE product_id = ${productId}`
  );
};

exports.getProductsFilter = function (type) {
  return db.query(
    `SELECT DISTINCT 
      products.product_id, 
      products.name, 
      products.img_link, 
      products.price, 
      products.trademark, 
      products.offer_percent, 
      products.in_stock 
      FROM product_types 
      INNER JOIN products 
      ON product_types.product_id = products.product_id 
      INNER JOIN types 
      ON product_types.type_id = types.type_id 
      INNER JOIN product_colors
      ON product_colors.product_id = products.product_id
      INNER JOIN colors
      ON colors.color_id = product_colors.color_id
      WHERE types.type = '${type}' 
      OR products.trademark = '${type}' 
      OR products.name ILIKE '%${type}%' 
      OR colors.color = '${type}'`
  );
};

exports.getProductTypes = function (productId) {
  return db.query(
    `SELECT type_id FROM product_types WHERE product_id = ${productId}`
  );
};

exports.getRelatedProductsIdByType = function (type_id, productId) {
  return db.query(
    `SELECT product_id FROM product_types WHERE type_id = ${type_id} AND product_id != ${productId} `
  );
};

exports.getRelatedProductsData = function (product_id) {
  return db.query(`SELECT * FROM products WHERE product_id = ${product_id}`);
};

exports.getFavProduct = function (productId, userId) {
  return db.query(
    `SELECT * FROM customer_fav WHERE product_id = ${productId} AND customer_id = ${userId}`
  );
};

exports.putFavProduct = function (productId, userId) {
  return db.none(`INSERT INTO customer_fav (customer_id, product_id) 
  VALUES (${userId}, (${productId}))`);
};

exports.deleteFavProduct = function (productId, userId) {
  return db.none(
    `DELETE FROM customer_fav WHERE product_id = ${productId} AND customer_id = ${userId}`
  );
};

exports.getCustomerFavProduct = function (customerId) {
  return db.query(
    `SELECT DISTINCT 
    products.product_id, 
    products.name, 
    products.img_link, 
    products.price, 
    products.trademark, 
    products.offer_percent, 
    products.in_stock 
    FROM customer_fav 
    INNER JOIN products 
    ON customer_fav.product_id = products.product_id 
    WHERE customer_fav.customer_id = ${customerId}
    `
  );
};
