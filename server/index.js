const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require("./models/Users");

const cors = require('cors');

app.use(express.json());
app.use(cors());

//P1oP5dvhmQObbpj4

mongoose.connect('mongodb+srv://Nill2000:P1oP5dvhmQObbpj4@cluster0.el38d.mongodb.net/database1?retryWrites=true&w=majority&appName=Cluster0');

//Retrive data from mongo database
app.get("/getUsers/", async (req, res) => {
    try {
        const result = await UserModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

//Posting data into the mongo database
app.post("/createUsers/", async (req, res) => {
	try {
		// console.log('User data received:', req.body);
		// const newUser = new UserModel(req.body);
		// await newUser.save();
		// console.log('New user saved:', newUser);

		const user = req.body;
		const newUser = new UserModel(user);
		await newUser.save();
		res.json(user);
	} catch (err){
		res.json(err);
	}
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
