//console.log("Hello Vane");
/*
 *References:
 	-Help with <select> tag:
 		Beginning HTML, XHTML, CSS, and JavaScript by Jon Duckett
 		https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 	-Getting text value from <select> tag with jQuery:
 		https://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/
 	-Accessing button properties:
 		http://stackoverflow.com/questions/2400386/get-class-name-using-jquery
 		http://stackoverflow.com/questions/5721724/jquery-how-to-get-which-button-was-clicked-upon-form-submission
 	-Removing tags with a certain class:
 		https://api.jquery.com/remove/
 	-Get text value of paragraph element:
 		http://api.jquery.com/text/
*/

var main = function(questionObjects){
	"use strict";

	var childNumber = 1;	//This keeps track of the divs for each question.
	var questionArr = [];	//This keeps track of the questions in each category.

	//Purpose: Gather each topic, put it in its own <div>, and append it to the contents portion of the html page.
	function appendElements(element){

		questionArr.push(element);	//Put the topic in the questionArr array.

		//Apppend the title and explanation to the div, and append the div to the content portion of the html page.
		$("main .content").append($("<div class='question'>"));
		$("div.question:nth-child(" + childNumber + ")").append($("<p class='titleOfQuestion'>").text(element.title));
		$("div.question:nth-child(" + childNumber + ")").append($("<p class='explanationOfQuestion'>").text(element.explanation));

		//Append the "View Responses" button to each topic.  This button will allow the user to view the list of responses associated with each topic.
		$("div.question:nth-child(" + childNumber + ")").append($("<button class='viewResponsesBtn " + childNumber + "'>").text("View Responses"));

		//Append the "Add a Response" button to each topic.  This button will allow the user to add a response to the current topic.
		$("div.question:nth-child(" + childNumber + ")").append($("<button class='addResponseBtn " + childNumber + "'>").text("Add a Response"));

		$("main .content").append($("</div>"));

		//We have to increase childNumber everytime this function is called, because it keeps track of the number of divs we have created.
		childNumber++;
	}

	//Output question objects to see that we are getting the correct information.  Purely for checking purposes only.
	questionObjects.forEach(function(element){
		console.log(element);
		console.log(element.title);
		console.log(element.explanation);
	});

	//Go through the tabs to find if a user clicked on one of them.  Note that "element" in the callback function holds the tabs.
	$(".tabs a span").toArray().forEach(function(element){
		//Find which tab the user clicked on.
		$(element).on("click", function(){
			var $element = $(element),	//Create a shortcut since we will use it a lot.
				$content,				//
				i;						//Loop counter.

			//Remove "active" class from all tags that previously had it.
			$(".tabs a span").removeClass("active");
			//Make selected tab have "active" class.
			$element.addClass("active");
			//Delete all content from tabs.
			$("main .content").empty();

			if($element.parent().is(":nth-child(1)")){
				//"All Questions" tab clicked.
				console.log("Clicked All Questions");

				//In all tab handlers, we have to initialize chilcNumber and questionArr to their default values.
				//We do this because if the user clicked on a new tab, we delete the previous content and display the pertinent information.
				//By deleting the previous content, we start from scratch with the <div>s for the questions and the questions in the tab.
				//So, to keep our counts and our questions we're keeping track of consistent, we have to set the variables back to default.
				childNumber = 1;
				questionArr = [];

				//Append the questions to the content portion of the html page by calling the function.
				questionObjects.forEach(function(element){
					appendElements(element);
				});

			} else if($element.parent().is(":nth-child(2)")){
				//"Travel" tab clicked.
				console.log("Clicked Travel");

				childNumber = 1;
				questionArr = [];

				//Show only those topics with the "travel" tag.
				questionObjects.forEach(function(element){
					if(element.tag === "travel"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(3)")){
				//Food tab clicked.
				console.log("Clicked Food");

				childNumber = 1;
				questionArr = [];

				//Show only those topics with the "food" tag.
				questionObjects.forEach(function(element){
					if(element.tag === "food"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(4)")){
				//Entertainment tab clicked.
				console.log("Clicked Entertainment");

				childNumber = 1;
				questionArr = [];

				//Show only those topics with the "entertainment" tag.
				questionObjects.forEach(function(element){
					if(element.tag === "entertainment"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(5)")){
				//Relationships tab clicked.
				console.log("Clicked Relationships");

				childNumber = 1;
				questionArr = [];

				//Show only those topics with the "relationships" tag.
				questionObjects.forEach(function(element){
					if(element.tag === "relationships"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(6)")){
				//Career tab clicked
				console.log("Clicked the Career");

				childNumber = 1;
				questionArr = [];

				//Show only those topics with the "career" tag.
				questionObjects.forEach(function(element){
					if(element.tag === "career"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(7)")){
				//Life tab clicked.
				console.log("Clicked Life");

				childNumber = 1;
				questionArr = [];

				//Show only those tags with the "life" tag.
				questionObjects.forEach(function(element){
					if(element.tag === "life"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(8)")){
				//Ask a Question tab clicked.
				console.log("Clicked Ask a Question");

				//Create variables to easily represent the DOM elements.
				var $inputTitle = $("<input type='text'>").addClass("newTitle"),
					$titleLabel = $("<p>").text("Title"),
					$inputExplanation = $("<input type='text'>").addClass("newExplanation"),
					$explanationLabel = $("<p>").text("Explain Your Question"),
					$select = $("<select class='tagSelection'>"),
					$travel = $("<option value='travel'>").text("Travel"),
					$food = $("<option value='food'>").text("Food"),
					$entertainment = $("<option value='entertainment'>").text("Entertainment"),
					$relationships = $("<option value='relationships'>").text("Relationships"),
					$career = $("<option value='career'>").text("Career"),
					$life = $("<option value='life'>").text("Life"),
					$submitBtn = $("<button>").text("Submit Question");

				//Append the newly created elements to the DOM.
				$("main .content").append($titleLabel);
				$("main .content").append($inputTitle);
				$("main .content").append($explanationLabel);
				$("main .content").append($inputExplanation);
				$("main .content").append($select);
				$("main .tagSelection").append($travel);
				$("main .tagSelection").append($food);
				$("main .tagSelection").append($entertainment);
				$("main .tagSelection").append($relationships);
				$("main .tagSelection").append($career);
				$("main .tagSelection").append($life);
				$("main .content").append($submitBtn);

				//If the  user clicked the submit button, then create a new topic by sending the user inputs to the server.
				$submitBtn.on("click", function(){
					var title = $inputTitle.val(),				//Holds the user input for the title of the topic.
						explanation = $inputExplanation.val(),	//Holds the user input for the explanation of the topic.
						tag = $select.val(),					//Holds the tag the user selected to place the question under.
						newQuestion = {							//The JSON object we wll be sending to the server.
										"title" : title,
										"explanation" : explanation,
										"comments" : "null",
										"tag" : tag};

					//Send a POST to the server with the JSON object we created.
					$.post("/newQuestion", newQuestion, function(res){
						console.log("Received a response from the server");
						//Update the questionObjects object with the new topic.
						questionObjects.push(newQuestion);

					});
				});
			}

			//If the "View Responses" button was clicked.
			$(".viewResponsesBtn").on("click", function(){
				console.log("Clicked 'View Responses' button");
				console.log($(this).attr("class"));

				var classArr = $(this).attr("class").split(" ");	//Store the class of the button that was clicked, which will have the number associated with the div we want.
				var num = classArr[1];								//Store the <div> class number in a variable.
				var currentResponse = questionArr[num - 1];			//Find the responses for the topic the user is interested in.

				console.log(classArr);
				console.log(currentResponse);

				//Remove responses already posted to remove duplicates.
				$(".question .response").remove();

				//Show responses in html page.
				currentResponse.responses.forEach(function(data){
					if(data !== ""){
						$("div.question:nth-child(" + classArr[1] + ")").append($("<p class='response'>").text(data));
					} else{
						$("div.question:nth-child(" + classArr[1] + ")").append($("<p class='response'>").text("No responses for this topic. Would you like to add one?"));
					}
				});
			});

			//If the "Add a Response" button was clicked.
			$(".addResponseBtn").on("click", function(){
				console.log("Clicked 'Add a Response' button");
				console.log($(this).attr("class"));

				var classArr = $(this).attr("class").split(" ");				//Store the class of the button here in order to access the number of the div we are interested in.
				var num = classArr[1];											//Store the <div> class number here, which was obtained from classArr.
				var $currentDiv = $("div.question:nth-child(" + num + ")");		//Find the <div> we are interested in manipulating.

				//Remove any Add a Response items already displayed on the page.
				$(".question .submitResponse").remove();

				//Add a text input box and a submit button, which will allow the user to add a new response to the clicked discussion topic.
				$currentDiv.append($("<input type='text' class='submitResponse submitResponseText'>"));
				$currentDiv.append($("<button class='submitResponse submitResponseBtn'>Submit</button>"));

				//If the "Submit" button was pressed.
				$(".submitResponseBtn").on("click", function(){
					console.log("Submit Response button was clicked");

					var newResponse = $(".submitResponseText").val();
					var titleOfCurrentTopic = $("div.question:nth-child(" + num + ") .titleOfQuestion").text();
					console.log(newResponse);
					console.log(titleOfCurrentTopic);

					//Note to self: Find a better way to do this - maybe use id numbers?
					$.post("/newResponse", {"newResponse" : newResponse, "title" : titleOfCurrentTopic}, function(res){
						questionObjects = res;
						$(".tabs a:first-child span").trigger("click");
					});
				});
			});

			return false; //Return false so that the click doesn't follow the links on the tabs.

		});//End of on click.
	});//End of forEach.

	$(".tabs a:first-child span").trigger("click");	//By default, the "All Questions" tab is shown on the page when the user first visits the site.
};

$(document).ready(function(){
	//Get the data to populate the site.
	$.getJSON("/questions.json", function(questionObjects){
		main(questionObjects);
	})
});

//t
//fflvd