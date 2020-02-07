// button to flip the coin
var coinButton = document.querySelector("button");
coinButton.addEventListener("click", function(event){
	$(".gif").empty();
	$("#joke").empty();
	coinFlip();
	$("#flipCoinText").text("");
	$("#flipMe").addClass("animated flip")
	
});


var coin = {
	"async": true,
	"crossDomain": true,
	"url": "https://coin-flip1.p.rapidapi.com/headstails",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coin-flip1.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

function coinFlip() {
	$.ajax(coin).done(function (response) {
		
		
		console.log(response)
		if (response.outcome === "Heads") {
			randomJoke();
			$(".heads").attr("src", "assets/heads.jpg");
			$(".heads").addClass("animated flip")

		}
	else {
		randomGif();
		$(".heads").attr("src", "assets/tails.jpg");
		$(".heads").addClass("animated flip")
	
	}			
	$("#flipMe").removeClass("animated flip")
	
	
});
$(".heads").removeClass("animated flip")

}

function randomJoke() {

var randomJokeCall = {
	"async": true,
	"crossDomain": true,
	"url": "https://joke3.p.rapidapi.com/v1/joke",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "joke3.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}


	$.ajax(randomJokeCall).done(function (response) {
	
	$("#joke").text(response.content);
    
});
};



var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=2qTgWHYjyZt8hu18MtbvP1iJCCUjoEox";

function randomGif() {
	$.ajax(
	{	method: "GET",
        url: queryURL,
	}).then(function (response) {
		// $(".gif").empty();
		var newGif = $("<img>");
        newGif.attr("src", response.data.image_url);
		$(".gif").append(newGif)
	})
}
		
		

	
	



