const express = require('express');
const PORT = 3500;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.post('/jsonMethod', (req, res) => {
//     console.log(req.body);
//     res.send("JSON Method");
// });

// app.post("/postMethod", (req, res) => {
//     console.log(req.body);
//     res.send("THIS IS MY POST METHOD");
// });

// app.get("/queryparams/:id/:name", (req, res) => {
//     console.log(req.params.id);
//     console.log(req.params.name);
//     res.send("THIS IS MY QUERY PARAMETER");
// });

// app.get("/", (req, res) => {
//     console.log(req.query);
//     console.log(req.query.username);
//     console.log(req.query.password);
//     res.send("My first express application: after updating...");
// });

const traineeRoutes = require('./routes/traineesRoute')
app.use("/trainees/", traineeRoutes);

// app.use("/trainers/");
// app.use("/batches/");
// app.use('/classes/');

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});