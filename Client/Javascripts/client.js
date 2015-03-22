var main = function(questionObjects){
	"use strict";

	//console.log("Hello Vane");

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

				questionObjects.forEach(function(element){
					$("main .content").append($("<p>").text(element.title));
					$("main .content").append($("<p>").text(element.explanation));
				});
				
			} else if($element.parent().is(":nth-child(2)")){
				//"Travel" tab clicked.
				console.log("Clicked Travel");
			} else if($element.parent().is(":nth-child(3)")){
				//Food tab clicked.
				console.log("Clicked Food");
			} else if($element.parent().is(":nth-child(4)")){
				//Entertainment tab clicked.
				console.log("Clicked Entertainment");
			} else if($element.parent().is(":nth-child(5)")){
				//Relationships tab clicked.
				console.log("Clicked Relationships");
			} else if($element.parent().is(":nth-child(6)")){
				//Career tab clicked
				console.log("Clicked the Career");
			} else if($element.parent().is(":nth-child(7)")){
				//Life tab clicked.
				console.log("Clicked Life");
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