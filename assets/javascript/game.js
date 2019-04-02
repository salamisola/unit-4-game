var win=0;
 var loss=0;
 var randomNumber;
 var initialSelection = 0; 

 
 var start = function(){	
	/*Line 8 will apply background image to the page*/
   $(".backgrd").css("background-image", "url('C:/xampp/htdocs/sola/unit-4-game/assets/images/backgrd7.jpg')");
   
	/*clear the crystal values before starting another game*/
	$(".crystalClass").empty();
	
	/*An array storing all the images four the crystalClass*/
	var images = [
				'assets/images/crystal7.png',
				'assets/images/crystal2.jpg',
				'assets/images/crystal5.png',
				'assets/images/crystal8.png'
				];