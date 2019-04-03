var win=0;
 var loss=0;
 var randomNumber;
 var initialSelection = 0; 

 
 var start = function(){	
	/*Line 8 will apply background image to the page*/
   $(".backgrd").css("background-image", "url('assets/images/backgrd7.jpg')");
   
	/*clear the crystal values before starting another game*/
	$(".crystalClass").empty();
	
	/*An array storing all the images four the crystalClass*/
	var images = [
				'assets/images/crystal7.png',
				'assets/images/crystal2.jpg',
				'assets/images/crystal5.png',
				'assets/images/crystal8.png'
                ];
                /*Generate random number between 19 and 120*/
	randomNumber =  Math.floor((Math.random() * 120) + 19);
	console.log(randomNumber);
	/*Display random number*/
	$("#result").html('Random Result: ' + randomNumber);
	
	/*loop four times  and generate a random number each time the loop runs*/	
	for(var i=0; i<4; i++){
        var randNum =  Math.floor((Math.random() * 12) + 1);
        console.log(randNum); 	 
       
        
        /*Generate four crystalClass inside a div with id=crystalClass and inner div with class="crystal"*/
        var crystal = $("<div>");
        crystal.attr({
        "class":  'crystal',
        "data-randum": randNum
        });
       crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover",
            "background-color":"white"
        });
        /* displays the number on each crystal*/
        /*crystal.html(randNum);*/
        $(".crystalClass").append(crystal);
   }
   /*Displays the previous value*/
   
   $("#initialSelection").html("Total Selection: " + initialSelection);
   /*$("#initialSelection").css("color":"white");*/
}
start();