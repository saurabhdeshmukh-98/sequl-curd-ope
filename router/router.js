const router = require("express").Router();
const elementContro = require("../controller/elementContro");

router.post("/insert", elementContro.add);
router.get("/getelement", elementContro.getAll);
router.get("/fetching:id", elementContro.findById);
router.put("/dataupdate:id", elementContro.updateAll);
router.delete("/deletedata:id", elementContro.deleteDetails);

module.exports = router;
