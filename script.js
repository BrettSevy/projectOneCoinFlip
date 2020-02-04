var filter = {
	"async": true,
	"crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/list.php?a=list",
    
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(filter).done(function (response) {
	console.log(response);
});

var category = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(category).done(function (response) {
	console.log(response);
});

var ingredients = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?i=list",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(ingredients).done(function (response) {
	console.log(response);
});

var glass = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?g=list",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(glass).done(function (response) {
	console.log(response);
});


var clock = {
	"async": true,
	"crossDomain": true,
	"url": "https://world-clock.p.rapidapi.com/json/utc/now",
	"method": "",
	"headers": {
		"x-rapidapi-host": "world-clock.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(clock).done(function (response) {
	console.log(response);
});