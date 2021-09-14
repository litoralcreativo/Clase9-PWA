const model = require("../models/productsModel");

module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  about: (req, res) => {
    res.render("about");
  },
  contact: (req, res) => {
    res.render("contact");
  },
  products: async (req, res) => {
    res.render("products");
  },
};
