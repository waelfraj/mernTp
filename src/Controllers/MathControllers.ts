import express from "express";

const verif = require("../Middlewers/ValidatePatron");
const services = require("../services/MathService");
const router = express.Router();

router.get('/',verif.get,services.get)

module.exports = router;

