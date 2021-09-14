const express = require("express");
const controler = require("../controlers/pagesControler");
const router = express.Router();

router.get("/", controler.home);
router.get("/about", controler.about);
router.get("/contact", controler.contact);
router.get("/products", controler.products);

module.exports = router;
