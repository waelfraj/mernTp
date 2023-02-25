import express from "express";
const router = express.Router();

router.get('*',(req,res)=>{
    res.status(200).send("Sorry Page not found 404");
})

module.exports = router;