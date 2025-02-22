import express from "express"

const app = express();
const port = 4000;

// Get Request
app.get('/' , (req,res) => {
    console.log("Get Request Running Successfully")
    res.send("It is used to Read Only purpose!")
});

// Post Request
app.post('/post' , (req,res) => {
    console.log("Post Request Running Seccessfully")
    res.send("It is used to Post the data!");
});

// Delete Request
app.delete('/delete', (req,res) => {
    console.log("Delete Request Running Seccessfully")
    res.send("It is used to Delete!")
});

// Put Request
app.put('/put' , (req,res) => {
    console.log("Put Request Running Seccessfully")
    res.send("It is used to Update all products!")
});

// Patch Request
app.patch('/patch', (req,res) =>{
    console.log("Patch Request Running Seccessfully")
    res.send("It is used to Update the Specific product!")
})

app.listen(port,()=>{
    console.log("Port is running", port)
})