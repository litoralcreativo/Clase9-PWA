const express = require("express");
const controler = require("../controlers/usersControler");
const router = express.Router();

router.get("/", controler.all);
router.post("/register", controler.regiser);
router.get("/login", controler.login);

router.get("/:id", controler.single);
router.put("/remove/:id", controler.remove);
router.put("/update/:id", controler.update);

module.exports = router;
