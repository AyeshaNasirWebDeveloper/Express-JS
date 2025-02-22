import express from "express"

const app = express();
const port = 4000;


// Get Request

// Jab client GET request karega / route pe (e.g. http://localhost:4000/), server GET request handle karega. Yeh request sirf data read karne ke liye use hoti hai.
app.get('/' , (req,res) => {
    console.log("Get Request Running Successfully")
    res.send("It is used to Read Only purpose!")
});


// Post Request

// Jab client POST request karega /post route pe, yeh request server ko data send karne ke liye hoti hai.
app.post('/post' , (req,res) => {
    console.log("Post Request Running Seccessfully")
    res.send("It is used to Post the data!");
});


// Delete Request

// DELETE request jab client /delete route pe send karega, yeh server ko kisi cheez ko delete karne ke liye hoti hai.
app.delete('/delete', (req,res) => {
    console.log("Delete Request Running Seccessfully")
    res.send("It is used to Delete!")
});


// Put Request

// PUT request /put route pe data ko update karne ke liye hoti hai. Is case mein yeh server ko products ko update karne ke liye bola gaya hai.
app.put('/put' , (req,res) => {
    console.log("Put Request Running Seccessfully")
    res.send("It is used to Update all products!")
});


// Patch Request

// PATCH request /patch route pe hoti hai, jo sirf ek specific product ko update karne ke liye use hoti hai.
app.patch('/patch', (req,res) =>{
    console.log("Patch Request Running Seccessfully")
    res.send("It is used to Update the Specific product!")
})

app.listen(port,()=>{
    console.log("Port is running", port)
})