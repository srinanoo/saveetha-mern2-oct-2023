const fs = require('fs');

function getAllTrainees(req, res) {
    res.send("All Trainees from Controller");
}

function getTrainee(req, res) {
    res.send("Specific Trainee from Controller");
}

const addTrainee = (req, res) => {

    // fs.writeFileSync("sample.txt", "Another data updated...");

    // fs.writeFile("sample2.txt", "Content added...", (err) => {
    //     if(err) res.send(err);

    //     res.send("Content added....")
    // })

    // fs.appendFileSync("sample1.txt", "Appended Data...");

    // fs.appendFile("sample4.txt", "Content added...", (err) => {
    //     if(err) res.send(err);

    //     res.send("Content updated...");
    // })

    // fs.unlinkSync("sample4.txt");
    // res.send("File Deleted");

    // fs.unlink("sample2.txt", (err) => {
    //     if(err) res.send(err);

    //     res.send("File Deleted");
    // })

    // let data = fs.readFileSync("sample1.txt", "utf8");
    // console.log(data);
    // res.send(data);

    fs.readFile("sample1.txt", "utf8", (err, data) => {
        if(err) res.send(err);
        res.send(data);
    })

    // res.send("Add New Trainee");
};

const updateTrainee = (req, res) => {
    res.send("Update Trainee");
};

const deleteTrainee = (req, res) => {
    res.send(`Delete Trainee: ${req.params.id}`);
};

// module.exports = {
//     getAllTrainees,
//     getTrainee,
//     addTrainee,
//     updateTrainee,
//     deleteTrainee
// };