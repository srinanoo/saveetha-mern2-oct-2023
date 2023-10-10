const fs = require('fs');
const traineeFile = "./trainees.json";

function getAllTrainees(req, res) {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) res.send(err);

        res.send(data);
    });
}

function getTrainee(req, res) {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) res.send(err);

        let traineeId = req.params.id;

        let results = [];
        let existingTrainees = JSON.parse(data);

        existingTrainees.forEach(v => {
            if(v.id == traineeId) 
                results.push(v);
        });

        if(results.length > 0)
            res.send(results);
        else 
            res.send("No Trainees Found!");
    });
}

const addTrainee = (req, res) => {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) res.send(err);

        let existingTrainees = JSON.parse(data);
        let newTrainee = req.body;
        let matchedTrainees = existingTrainees.filter(v => v.id == newTrainee.id);
        if(matchedTrainees.length > 0)
            res.send("Trainee Already Exists!");
        else
            existingTrainees.push(newTrainee);

        fs.writeFile(traineeFile, JSON.stringify(existingTrainees), (err) => {
            if(err) res.send(err);

            res.send("Trainee Added Successfully!");
        })
    });
};

const updateTrainee = (req, res) => {
    res.send("Update Trainee");
};

const deleteTrainee = (req, res) => {
    res.send(`Delete Trainee: ${req.params.id}`);
};

module.exports = {
    getAllTrainees,
    getTrainee,
    addTrainee,
    updateTrainee,
    deleteTrainee
};