// Express ek framework hai jo Node.js ke sath kaam karta hai aur HTTP requests handle karne ke liye use hota hai.

// Ye line express module ko import kar rahi hai.
import express from "express";

// Yahan par hum express() function ko call kar ke app variable mein store kar rahe hain, jo humara main express application hai.
const app = express();

// Is line mein humne server ko 8000 port par chalane ke liye port number set kiya hai.
// const port = 8000;
// http://localhost:8000/

// process.env.PORT
// process.env Node.js ka ek object hai jo environment variables ko access karne ke liye use hota hai. PORT ek environment variable hai jo usually deployment environments mein set hota hai, jaise Heroku, AWS, ya koi bhi cloud platform. Iska purpose yeh hota hai ke agar server ko specific port number pe run karna ho, toh wo port environment variable mein set ho sakta hai.

// || 3000
// || (OR operator) ka matlab hai "agar pehli cheez available nahi hai, toh doosri cheez use karo." Is case mein, agar process.env.PORT ka value nahi milta, yani agar PORT environment variable set nahi hai, toh default port 3000 use kiya jayega.

// Agar environment mein PORT variable set hai, toh server usi port pe chalega. Agar wo variable set nahi hai, toh server 3000 port pe chalega.
const port = process.env.PORT || 3000;
// ipconfig command for taking the IP Address
// 121.121.121.121:3000 sample ip address 

// Is line mein hum GET request ko handle kar rahe hain. Jab koi user root URL ("/") pe request bhejega, toh server "Hello Everyone" ka message response ke tor par bhejega.
app.get("/", (req, res) => {
  res.send("Hello Everyone");
});

// Yahan par humne server ko port 8000 par listen karne ke liye kaha hai. Jab server successfully chal jayega, toh yeh console mein message print karega,
app.listen(port, () => {
  console.log(`Express JS runs Successfully on ${port}`);
});
