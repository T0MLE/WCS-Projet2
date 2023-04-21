const express = require("express");

const router = express.Router();

// const path = require("path");

const itemControllers = require("./controllers/itemControllers");

const data = require("./data.json");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Route pour le fichier data.json
router.get("/data", (req, res) => {
  console.info(data);
  res.json(data);
});

module.exports = router;
