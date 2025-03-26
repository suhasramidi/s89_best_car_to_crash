
const express = require("express");
const router = express.Router();

const SafetyRating = require("./schema"); // Import the SafetyRating model
router.use(express.json());

router.post('/safety', async (req, res) => { // Changed route to /safety
  try {
    const {
      make,
      model,
      year,
      nhtsaOverallRating,
      iihsTopSafetyPick,
      euroNcapRating,
      frontalCrashRating,
      sideCrashRating,
      rolloverRating,
      notes,
    } = req.body;

    if (!make || !model || !year) { // Adjusted required fields
      return res.status(400).send({ msg: "Make, model, and year are required" });
    }

    const safetyData = new SafetyRating({ // Changed variable name
      make,
      model,
      year,
      nhtsaOverallRating,
      iihsTopSafetyPick,
      euroNcapRating,
      frontalCrashRating,
      sideCrashRating,
      rolloverRating,
      notes,
    });

    await safetyData.save(); // Changed variable name
    res.status(200).send({ msg: "Safety rating created successfully", safetyData }); // Changed message and variable name
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
    console.log(error);
  }
});

router.get('/safety', async (req, res) => { // Changed route to /safety
  try {
    const safetyRatings = await SafetyRating.find(); // Changed variable name and model

    res.status(200).send({ msg: "Safety ratings retrieved successfully", safetyRatings }); // changed message and variable name
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
    console.log(error);
  }
});

router.put('/safety/:id', async (req, res) => { // Route changed to /safety/:id
  try {
    const {
      make,
      model,
      year,
      nhtsaOverallRating,
      iihsTopSafetyPick,
      euroNcapRating,
      frontalCrashRating,
      sideCrashRating,
      rolloverRating,
      notes,
    } = req.body;

    if (!make || !model || !year) { // Adjusted required fields
      return res.status(400).send({ msg: "Make, model, and year are required for update" });
    }

    const updatedRating = await SafetyRating.findByIdAndUpdate( // Model name changed
      req.params.id,
      {
        make,
        model,
        year,
        nhtsaOverallRating,
        iihsTopSafetyPick,
        euroNcapRating,
        frontalCrashRating,
        sideCrashRating,
        rolloverRating,
        notes,
      }
    );

    if (!updatedRating) { // Variable name changed
      return res.status(404).send({ msg: "Safety rating not found" });
    }

    res.status(200).send({ msg: "Safety rating updated successfully", updatedRating }); // Variable and message changed
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
    console.error(error);
  }
});

router.delete('/safety/:id', async (req, res) => { // Route changed to /safety/:id
  try {
    const deletedRating = await SafetyRating.findByIdAndDelete(req.params.id); // Model name changed

    if (!deletedRating) { // Variable name changed
      return res.status(404).send({ msg: "Safety rating not found" });
    }

    res.status(200).send({ msg: "Safety rating deleted successfully" }); // Message changed
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
    console.error(error);
  }
});


module.exports = router;