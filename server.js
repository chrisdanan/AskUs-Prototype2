"use strict";

var express = require("express"),
	http = require("http"),
	bodyParser = require("body-parser"),
	app = express(),
	questions = [
		{
			"title" : "How do I make this work?",
			"explanation" : "I want to make this project work, but I don't know where to start.  Can anyone help me please?",
			"comments" : "null",
			"tag" : "career"
		},
		{
			"title" : "Where is the best place to eat?",
			"explanation" : "I'm in town for a few days.  Does anyone know a good place to grab dinner?",
			"comments" : "null",
			"tag" : "food"
		},
		{
			"title" : "How do you code in Javascript?",
			"explanation" : "I'm new to Javascript.  Anybody have recommendations on what book to read?",
			"comments" : "null",
			"tag" : "career"
		},
		{
			"title" : "What should we name our pet dog?",
			"explanation" : "We got a new Cocker Spaniel last night, but we can't think of a name.  She's female and is golden colored.  Any suggestions?",
			"comments" : "null",
			"tag" : "life"
		}
	];

app.use(express.static(__dirname + "/Client"));

http.createServer(app).listen(3000);
console.log("Listening on localhost:3000");

app.get("/hello", function(req, res){
	res.send("Hello Vane!!!");
});

app.get("/questions.json", function(req, res){
	res.json(questions);
});