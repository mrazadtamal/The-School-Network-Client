const router = require("express").Router();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

// teacher video upload

router.post("/videoUpload", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
