const express = require('express');
const router = express.Router();

const {getAllTrainees, getTrainee, addTrainee, updateTrainee, deleteTrainee} = require('../controllers/traineesController');

router.get('/getAllTrainees', getAllTrainees);

router.get("/getTrainee", getTrainee);

router.post("/addTrainee", addTrainee);

router.put("/updateTrainee", updateTrainee);

router.delete("/deleteTrainee/:id", deleteTrainee);

module.exports = router;