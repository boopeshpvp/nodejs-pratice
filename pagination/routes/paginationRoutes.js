const express = require("express");
const router = express.Router();
const detail = require("../models/detailsSchema");

router.get("/", async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const perPage = 1;
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const allData = await detail.find({});
    const totalPage=Math.ceil(allData.length/perPage)
    const result = allData.slice(startIndex, endIndex);
    if (result.length) {
      res.status(200).send({
        data: result,
        totalPage:totalPage
      }); 
    } else {
      res.status(404).send({
        data: "page not found",
      });
    }
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
