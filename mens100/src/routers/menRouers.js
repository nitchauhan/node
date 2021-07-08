const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")

router.get("/", async(req, res) => {
    try {

        const getMensid = await MensRanking.find({}).sort({ "ranking": 1 });
        res.send(getMensid)
    } catch (e) {
        res.status(400).send(e);
    }

})


// get req
router.get("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await MensRanking.find({ _id });
        res.send(getMens)
    } catch (e) {
        res.status(400).send(e);
    }

})


// post Method
router.post("/mens", async(req, res) => {
    try {

        const user = new MensRanking(req.body);
        console.log(req.body);
        const insertMensPost = await user.save();
        res.send(insertMensPost)
    } catch (e) {
        res.status(400).send(e);
    }

})


// Patch And Upfdate data  req
router.patch("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getMensUpdate = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(getMensUpdate)
    } catch (e) {
        res.status(400).send(e);
    }

})


// delete  data  req
router.delete("/mens/:id", async(req, res) => {
    try {
        const getDel = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getDel)
    } catch (e) {
        res.status(400).send(e);
    }

})

module.exports = router;