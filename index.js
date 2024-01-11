var express = require('express');
var router = express.Router();
const Listing=require("../models/listings.js")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/testListing", async (req, res) => {
  const sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successful testing");
});


module.exports = router;
