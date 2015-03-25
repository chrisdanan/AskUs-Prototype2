/*
 *References:
 	-Quote from A Christmas Story
 		http://www.imdb.com/title/tt0085334/quotes
*/

"use strict";

var express = require("express"),
	http = require("http"),
	bodyParser = require("body-parser"),
	app = express(),
	questions = [
		{
			"title" : "How do I make this work?",
			"explanation" : "I want to make this project work, but I don't know where to start.  Can anyone help me please?",
			"responses" : [""],
			"tag" : "career"
		},
		{
			"title" : "Where is the best place to eat?",
			"explanation" : "I'm in town for a few days.  Does anyone know a good place to grab dinner?",
			"responses" : [""],
			"tag" : "food"
		},
		{
			"title" : "How do you code in Javascript?",
			"explanation" : "I'm new to Javascript.  Anybody have recommendations on what book to read?",
			"responses" : ["Javascript: The Good Parts by Douglas Crockford"],
			"tag" : "career"
		},
		{
			"title" : "What should we name our pet dog?",
			"explanation" : "We got a new Cocker Spaniel last night, but we can't think of a name.  She's female and is golden colored.  Any suggestions?",
			"responses" : ["Cookiejar", "Princess", "Barbara Crimpleton"],
			"tag" : "life"
		},
		{
			"title" : "What car should I buy?",
			"explanation" : "I'm a totally responsible 16 year old who has parents with pockets so deep you could fit Cthulhu in them.  What car should I get?",
			"responses" : ["Jalopy", "Stick to bikes, kid"],
			"tag" : "life"
		},
		{
			"title" : "What present should I ask my parents for Christmas?",
			"explanation" : "It's almost Christmas, and I need to start dropping hints to my folks!",
			"responses" : ["an official Red Ryder, carbine action, two-hundred shot range model air rifle!", "Pink bunny pajamas", "New glasses"],
			"tag" : "life"
		},
		{
			"title" : "Where should we go for our family vacation?",
			"explanation" : "The missus and I finally have vacation days from the plant; where should we take our little boy Jimmy?",
			"responses" : ["Disneyland, duh", "How about mini golfing?", "Go hunting and teach Jimmy how to be a man!!!", "First"],
			"tag" : "travel"
		},
		{
			"title" : "I need gurl 4 prom lolz",
			"explanation" : "Yo, I need a gurl 4 prom - give me yo digits!!11!",
			"responses" : ["no", "NO", "No", "...no"],
			"tag" : "relationships"
		}
	];

app.use(express.static(__dirname + "/Client"));
app.use(bodyParser());

http.createServer(app).listen(3000);
console.log("Listening on localhost:3000");

app.get("/hello", function(req, res){
	res.send("Hello Vane!!!");
});

app.get("/questions.json", function(req, res){
	res.json(questions);
});

app.post("/newQuestion", function(req, res){
	console.log("Server received a post from /newQuestion");

	var newQuestion = req.body;

	questions.push(newQuestion);

	res.send("Received post");
});

app.post("/newResponse", function(req, res){
	console.log("Server received a post from /newResponse");

	var newResponse = req.body.newResponse;
	var title = req.body.title;

	console.log(newResponse);
	console.log(title);

	if(newResponse !== ""){
		questions.forEach(function(element){
			if(element.title === title){
				if(element.responses[0] === ""){
					element.responses = [newResponse];
				} else{
					element.responses.push(newResponse);
				}
			}
		});
	}

	console.log(questions);
	res.json(questions);

});