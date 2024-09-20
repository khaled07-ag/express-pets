const express = require("express")
const petRouter = express.Router();
const {getAllPets, createPet, getOnePet, deleteOnePet, updatePet} = require("./pets.controller.js");
const upload = require("../middleware/multer")

petRouter.get("/", getAllPets);
petRouter.post("/", upload.single("petImage"), createPet);
petRouter.get("/:id", getOnePet);
petRouter.put("/:id", updatePet);
petRouter.delete("/:id", deleteOnePet);


module.exports = petRouter;