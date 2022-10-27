const addressData = require("../data/addressData");

exports.getAddressId = function (customer_id) {
  return addressData.getAddressId(customer_id);
};

exports.postAddress = function (customer_id, address, uf, city, cep) {
  return addressData.postAddress(customer_id, address, uf, city, cep);
};

exports.postAddressData = function (customer_id) {
  return addressData.postAddressData(customer_id);
};

exports.putAddress = async function (customer_id, address, uf, city, cep) {
  try {
    if (address) {
      await addressData.putAddress(customer_id, address);
    }
    if (uf) {
      await addressData.putUf(customer_id, uf);
    }
    if (city) {
      await addressData.putCity(customer_id, city);
    }
    if (cep) {
      await addressData.putCep(customer_id, cep);
    }

    return "sucesso";
  } catch (error) {
    return `${error}`;
  }
};
