const express = require("express")
const memeController = require("../controllers/memes")

const router = express.Router();

router.get("/", memeController.getMemes);
router.post("/", memeController.postMeme);
router.patch("/:id", memeController.updateMeme);

module.exports =  router;