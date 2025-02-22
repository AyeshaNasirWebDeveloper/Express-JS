import express from "express"

const app = express();

const port = 5000;

const products = [
    {
        title: "Iphone",
        price: "1100$"
    },
    {
        title: "Iphone 16",
        price: "1200$"
    },
    {
        title: "Iphone 16 Pro",
        price: "1300$"
    },
    {
        title: "Iphone 16 Pro Max",
        price: "1400$"
    },
    {
        title: "Iphone 16 Pro Max Ultra",
        price: "1500$"
    },

]

app.get ('/', (req,res)=> {
    res.json(
        {
            message: "Fetched all Products",
            product: products,
            success: true // yeh indicate karta hai ke data successfully return kiya gaya hai.
        }
    )
});

app.listen(port, () =>{
    console.log("Port is running Successfully!")
})