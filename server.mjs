// NOTE: Don't change the port number
const PORT = 3000;

import express, { urlencoded } from "express";
const app = express();

app.use(express.static('public'));

app.use(urlencoded({
    extended: true
}));

/**
 * Route handler for POST request to the URL /hello
 */
app.post("/hello", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Hi ${name}. Your email is ${email}. The request was sent using the HTTP method POST`);
});

/**
 * Route handler for GET request to the URL /hello
 */
app.get("/hello", (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    res.send(`Hi ${name}. Your email is ${email}. The request was sent using the HTTP method GET`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});