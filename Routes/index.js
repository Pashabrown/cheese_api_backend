
const router = require("express").Router();
const Cheese = require("../Models/Cheese");

///////////////////////////////
// ROUTES
////////////////////////////////



// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
  try {
    // send all people
    res.json(await Cheese.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    // send all people
    res.json(await Cheese.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    // send all people
    res.json(
      await Cheese.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    // send all people
    res.json(await Cheese.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});


///////////////////////////////
//! Export Router
////////////////////////////////
module.exports = router;