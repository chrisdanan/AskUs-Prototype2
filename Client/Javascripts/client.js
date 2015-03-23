/*
 *References:
 	-Help with <select> tag:
 		Beginning HTML, XHTML, CSS, and JavaScript by Jon Duckett
 		https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
*/

var main = function(questionObjects){
	"use strict";

	var questions
	var childNumber = 1;
	//console.log("Hello Vane");

	function appendElements(element){

		$("main .content").append($("<div class='question'>"));
		$("div.question:nth-child(" + childNumber + ")").append($("<p class='titleOfQuestion'>").text(element.title));
		$("div.question:nth-child(" + childNumber + ")").append($("<p class='explanationOfQuestion'>").text(element.explanation));
		$("main .content").append($("</div>"));

		childNumber++;
	}

	//Output question objects to see that we are getting the correct information.
	questionObjects.forEach(function(element){
		console.log(element);
		console.log(element.title);
		console.log(element.explanation);
	});

	$(".tabs a span").toArray().forEach(function(element){
		$(element).on("click", function(){
			var $element = $(element),
				$content,
				i;

			//Remove "active" class from all tags.
			$(".tabs a span").removeClass("active");
			//Make selected tab have "active" class.
			$element.addClass("active");
			//Delete all content from tabs.
			$("main .content").empty();

			if($element.parent().is(":nth-child(1)")){
				//"All Questions" tab clicked.
				console.log("Clicked All Questions");

				childNumber = 1;

				questionObjects.forEach(function(element){
					appendElements(element);
				});

			} else if($element.parent().is(":nth-child(2)")){
				//"Travel" tab clicked.
				console.log("Clicked Travel");

				childNumber = 1;

				questionObjects.forEach(function(element){
					if(element.tag === "travel"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(3)")){
				//Food tab clicked.
				console.log("Clicked Food");

				childNumber = 1;

				questionObjects.forEach(function(element){
					if(element.tag === "food"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(4)")){
				//Entertainment tab clicked.
				console.log("Clicked Entertainment");

				childNumber = 1;

				questionObjects.forEach(function(element){
					if(element.tag === "entertainment"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(5)")){
				//Relationships tab clicked.
				console.log("Clicked Relationships");

				childNumber = 1;

				questionObjects.forEach(function(element){
					if(element.tag === "relationships"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(6)")){
				//Career tab clicked
				console.log("Clicked the Career");

				childNumber = 1;

				questionObjects.forEach(function(element){
					if(element.tag === "career"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(7)")){
				//Life tab clicked.
				console.log("Clicked Life");

				childNumber = 1;

				questionObjects.forEach(function(element){
					if(element.tag === "life"){
						appendElements(element);
					}
				});
			} else if($element.parent().is(":nth-child(8)")){
				//Ask a Question tab clicked.
				console.log("Clicked Ask a Question");

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

				$submitBtn.on("click", function(){
					var title = $inputTitle.val(),
						explanation = $inputExplanation.val(),
						tag = $select.val(),
						newQuestion = {
										"title" : title,
										"explanation" : explanation,
										"comments" : "null",
										"tag" : tag};

					console.log(title);
					console.log(explanation);
					console.log(tag);

					$.post("/newQuestion", newQuestion, function(res){
						questionObjects.push(newQuestion);

					});
				});
			}

			return false;
		});//End of on click.
	});//End of forEach.

	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(function(){
	$.getJSON("/questions.json", function(questionObjects){
		main(questionObjects);
	})
});