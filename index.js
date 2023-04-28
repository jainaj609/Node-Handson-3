import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const middlewareOne = (req, res, next) => {
    console.log("First middeleware runs");
    next()
}

const middlewareTwo = (req, res, next) => {
    res.send("Second middeleware runs")
    next()
}
app.use(middlewareOne)
app
    .get('/', (req, res) => {
        console.log("Api is running");

        res.send("<h1>We have Four Routes: <br> 1. '/api/main/one' <br>2. '/api/main/two' <br>3. '/api/main/three' <br>4. '/api/main/four' <br> Use these routes</h1> ")
    })
    .get('/api/main/one', (req, res) => {
        console.log("First API");
        res.send("<h1> What is Express.js</h1> <p><strong>Express.js is a web framework for Node.js. It is a fast, robust and asynchronous in nature.<strong></p> <p>Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications.</p>")
    })
    .get('/api/main/two', (req, res) => {
        console.log("Second API");
        res.send("Second Route")
    })
    .get('/api/main/three', middlewareTwo, (req, res) => {
        console.log("Third API");
        res.send("Third Route")
    })
    .get('/api/main/four', middlewareTwo, (req, res) => {
        console.log("Fourth API");
        res.send("Fourth Route")
    })
    .listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))