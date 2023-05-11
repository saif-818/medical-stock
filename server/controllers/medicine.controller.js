const MedicineSchema = require('../models/medicine.schema.js');

exports.insertMedicine = async(req,res) => {
     try {
        // const {name,uid,disease,costPerUnit,allergyWarning,incomingStock} = req.body;
        const med = new MedicineSchema(req.body);
        await med.save();
        res.status(200).json(med);
     } catch(err){
        console.log(err)
		return res.status(500).json({
			error: "Internal Server Error",
		});
     }
}
exports.findMedicine = async(req,res) => {
    try {
        const search_param = req.body;
        const searchMed = (Number.isInteger(med)) ? "uid" : "name";
        let med;
        if(searchMed=="uid"){med = await MedicineSchema.find({"uid": search_param});}
        else med = await MedicineSchema.find({"name": search_param})
        res.status(200).json(med);
    } catch(err){
        console.log(err)
		return res.status(500).json({
			error: "Internal Server Error",
		});
    }
}
exports.addStock = async(req,res) => {
    try {
        const medName = req.body.name;
        const addQty = req.body.incomingStock;
        const med = await MedicineSchema.updateOne(
            {"name": medName},
            { $inc: { incomingStock: addQty} }
        )
        res.status(200).json(med);
    } catch(err){
        console.log(err)
		return res.status(500).json({
			error: "Internal Server Error",
		});
    }
}