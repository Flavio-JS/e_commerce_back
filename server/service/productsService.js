const productsData = require("../data/productsData");

exports.getProducts = function () {
  return productsData.getProducts();
};

exports.getProduct = function (productId) {
  return productsData.getProduct(productId);
};

exports.getProductSize = function (productId) {
  return productsData.getProductSize(productId);
};

exports.getProductStar = async function (productId) {
  let products = await productsData.getProductStar(productId);
  let arrayOfStars = [];
  let totalStars = 0;
  let numberOfStars = 1;
  let ratingStar = 0;

  arrayOfStars[0] = await products[0].one_star;
  arrayOfStars[1] = await products[0].two_star;
  arrayOfStars[2] = await products[0].three_star;
  arrayOfStars[3] = await products[0].four_star;
  arrayOfStars[4] = await products[0].five_star;
  totalStars = await (products[0].one_star +
    products[0].two_star +
    products[0].three_star +
    products[0].four_star +
    products[0].five_star);

  for (let i = 0; i < 5; i++) {
    let aux = ratingStar;
    ratingStar = await arrayOfStars[i];
    if (aux > ratingStar) {
      ratingStar = aux;
    }
  }
  numberOfStars = arrayOfStars.lastIndexOf(ratingStar) + 1;

  let resp = [{ totalStars, numberOfStars }];
  return resp;
};

exports.getProductsFilter = function (type) {
  return productsData.getProductsFilter(type);
};

exports.getRelatedProducts = async function (productId) {
  let product_types = await productsData.getRelatedProducts(productId);
  let relatedProductsIds = [];

  for (let i = 0; i < product_types.length; i++) {
    let relatedProductsSingleType = await productsData.getRelatedProductsByType(
      product_types[i].type_id
    );
    for (let i = 0; i < relatedProductsSingleType.length; i++) {
      relatedProductsIds = [
        ...relatedProductsIds,
        { product_id: relatedProductsSingleType[i].product_id },
      ];
    }
  }

  for (let i = 0; i < relatedProductsIds.length; i++) {
    for (let n = 0; n < relatedProductsIds.length; n++) {
      if (i !== n) {
        if (
          relatedProductsIds[i].product_id === relatedProductsIds[n].product_id
        ) {
          let repeatedIndex;
          repeatedIndex = relatedProductsIds.indexOf(relatedProductsIds[n]);
          relatedProductsIds.splice(repeatedIndex, 1);
        }
      }
    }
  }

  let relatedProducts = [];
  for (let i = 0; i < relatedProductsIds.length; i++) {
    let newProduct = await productsData.getRelatedProductsData(
      relatedProductsIds[i].product_id
    );
    relatedProducts = [...relatedProducts, newProduct[0]];
  }
  return relatedProducts;
};

exports.getFavProduct = async function (productId, userId) {
  try {
    let productFav = await productsData.getFavProduct(productId, userId);
    if (productFav.length > 0) {
      return [{ fav: "fav" }];
    } else {
      return [{ fav: "notFav" }];
    }
  } catch (error) {
    return error;
  }
};

exports.putFavProduct = async function (productId, userId) {
  try {
    await productsData.putFavProduct(productId, userId);

    return "sucess";
  } catch (error) {
    return error;
  }
};

exports.deleteFavProduct = async function (productId, userId) {
  try {
    await productsData.deleteFavProduct(productId, userId);

    return "sucess";
  } catch (error) {
    return error;
  }
};
