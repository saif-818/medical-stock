const medicineRouter = require("express").Router();
const {insertMedicine,findMedicine,addStock} = require('../controllers/medicine.controller.js');

medicineRouter.post("/",insertMedicine);
medicineRouter.get("/",findMedicine);
medicineRouter.put("/",addStock)

module.exports = medicineRouter;