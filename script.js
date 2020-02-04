// var filter = {
// 	"async": true,
// 	"crossDomain": true,
//     "url": "https://the-cocktail-db.p.rapidapi.com/list.php?a=list",
    
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
// 	}
// }

// $.ajax(filter).done(function (response) {
// 	console.log(response);
// });

// var category = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
// 	}
// }

// $.ajax(category).done(function (response) {
// 	console.log(response);
// });

// var ingredients = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?i=list",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
// 	}
// }

// $.ajax(ingredients).done(function (response) {
// 	console.log(response);
// });

// var glass = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?g=list",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
// 	}
// }

// $.ajax(glass).done(function (response) {
// 	console.log(response);
// });

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coin-flip1.p.rapidapi.com/headstails",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coin-flip1.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    
    $("#outcome").text(response.outcome);
});

var randomJoke = {
	"async": true,
	"crossDomain": true,
	"url": "https://joke3.p.rapidapi.com/v1/joke",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "joke3.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(randomJoke).done(function (response) {
    
    $("#joke").text(response.content);
    console.log(response.content);
});

