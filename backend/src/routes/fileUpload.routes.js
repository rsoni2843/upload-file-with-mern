"use strict";

const express = require("express");
const upload = require("../helper/fileHelper");
const fileUpload = require("../controllers/fileUpload.controlller");

const router = express.Router();

router.post("/singleFile", upload.single("file"), fileUpload.singleFileUpload);

module.exports = { routes: router };
