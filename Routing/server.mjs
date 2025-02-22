import express from "express"

const app = express();

const port = 5000;

// Requested for Home Page
app.get('/', (req,res) => {
    res.send("Lets Learn Routing");
});

// Requested for About Page
app.get('/about' , (req, res) => {
    res.send("Welcome to the About Page")
});

// Requested for Contact Page
app.get('/contact' , (req, res) => {
    res.send("Welcome to the Contact Page")
});

app.listen(port, () =>{
    console.log("Your Server is running Successfully")
});