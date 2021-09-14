const express = require("express");
const controler = require("../controlers/proveedoresControler");
const router = express.Router();

router.get("/", controler.all);
router.post("/", controler.create);

router.get("/:id", controler.single);
router.put("/remove/:id", controler.remove);
router.put("/update/:id", controler.update);

module.exports = router;
