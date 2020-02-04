var settings = {
	"async": true,
	"crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/list.php?a=list",
    
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?i=list",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/list.php?g=list",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "fc5f9a45b1mshee0ed2db4af132cp10d4e9jsn16a42c447127"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


var settings = {
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

$.ajax(settings).done(function (response) {
	console.log(response);
});