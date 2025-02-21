// Express ek framework hai jo Node.js ke sath kaam karta hai aur HTTP requests handle karne ke liye use hota hai.

// Ye line express module ko import kar rahi hai.
import express from "express";

// Yahan par hum express() function ko call kar ke app variable mein store kar rahe hain, jo humara main express application hai.
const app = express();

// Is line mein humne server ko 8000 port par chalane ke liye port number set kiya hai.
const port = 8000;
// http://localhost:8000/

// Is line mein hum GET request ko handle kar rahe hain. Jab koi user root URL ("/") pe request bhejega, toh server "Hello Everyone" ka message response ke tor par bhejega.
app.get("/", (req, res) => {
  res.send("Hello Everyone");
});

// Yahan par humne server ko port 8000 par listen karne ke liye kaha hai. Jab server successfully chal jayega, toh yeh console mein message print karega,
app.listen(port, () => {
  console.log(`Express JS runs Successfully on ${port}`);
});
