const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const userController = require('./controller')
const { getCompliment, getFortune, getShoes, createShoes, deleteShoes, updateShoes } = userController;

// createShoes, deleteShoes, updateShoes 
app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune);

//Shoes
app.get('/api/shoes', getShoes);
app.post('/api/shoes', createShoes);
app.put('/api/shoes/:id', updateShoes);
app.delete('/api/shoes/:id', deleteShoes);


app.listen(4000, () => console.log("Server running on 4000"));
