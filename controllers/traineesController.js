const fs = require('fs');
const traineeFile = "./trainees.json";

function getAllTrainees(req, res) {
    try {
        fs.readFile(traineeFile, 'utf8', (err, data) => {
            if(err) res.status(500).json({"message": err});
    
            // res.send(data);
            res.status(200).json(JSON.parse(data));
        });
    } catch(err) {
        res.status(500).json({"message": err.message});
    }
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
            res.status(200).json(JSON.parse(results));
        else 
            res.status(402).json({"message": "No Trainees Found!"});
    });
}

const addTrainee = (req, res) => {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) res.status(500).json({"error": err});

        let existingTrainees = JSON.parse(data);
        let newTrainee = req.body;

        // let matchedTrainees = existingTrainees.filter(v => v.id == newTrainee.id);
        // if(matchedTrainees.length > 0)
        //     res.send("Trainee Already Exists!");
        // else

        let flag = false;
        for(let i = 0; i < existingTrainees.length; i++) {
            if(existingTrainees[i].id === newTrainee.id) {
                flag = true;
                break;
            }
        }

        (flag) ? res.status(403).json({"message": "Trainee Already Exists!"}) : existingTrainees.push(newTrainee);

        fs.writeFile(traineeFile, JSON.stringify(existingTrainees), (err) => {
            if(err) res.status(500).json({"message": err});

            res.status(200).json({"message": "Trainee Added Successfully!"});
        });
    });
};

const updateTrainee = (req, res) => {
    try {
        fs.readFile(traineeFile, 'utf8', (err, data) => {
            if(err) res.status(500).json({"error": err});
    
            let existingTrainees = JSON.parse(data);
            let updateTrainee = req.body;

            // for(let i = 0; i < existingTrainees.length; i++) {
            //     if(existingTrainees[i].id === updateTrainee.id) {
            //         existingTrainees[i] = {...existingTrainees[i], ...updateTrainee}
            //     }
            // }

            let finalTrainees = [];
            for(let i = 0; i < existingTrainees.length; i++) {
                if(existingTrainees[i].id === updateTrainee.id)
                    finalTrainees[i] = updateTrainee;
                else
                    finalTrainees.push(existingTrainees[i]);
            }
            fs.writeFile(traineeFile, JSON.stringify(finalTrainees), (err) => {
                if(err) res.status(500).json({"message": err});
    
                res.status(200).json({"message": "Trainee Updated Successfully!"});
            });
        });
    } catch (err) {
        res.status(500).json({"message": err.message});
    }
};

const deleteTrainee = (req, res) => {
    try {
        let traineeId = req.params.id;
        if(traineeId) {
            fs.readFile(traineeFile, 'utf8', (err, data) => {
                if(err) res.status(500).json({"error": err});
        
                let existingTrainees = JSON.parse(data);
                let trainees = existingTrainees.filter(v => v.id != traineeId);

                if(trainees.length < existingTrainees.length) {
                    fs.writeFile(traineeFile, JSON.stringify(trainees), (err) => {
                        if(err) res.status(500).json({"message": err});
            
                        res.status(200).json({"message": "Trainee Deleted Successfully!"});
                    });
                } else {
                    res.status(402).json({"message": "No Trainee found!"});
                }
            });
        } else {
            res.status(400).json({"message": "Please enter a trainee id"});
        }
    } catch(err) {
        res.status(500).json({"message": err.message});
    }
};

module.exports = {
    getAllTrainees,
    getTrainee,
    addTrainee,
    updateTrainee,
    deleteTrainee
};