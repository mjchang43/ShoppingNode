var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [

	new Product({

		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'Gothic Video Game',
		description: 'Awesome Game!!!!',
		price: 10
	}),

	new Product({

		imagePath: 'https://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
		title: 'World of Warcraft Video Game',
		description: 'Alse awesome? But of course it was better in vanilla....',
		price: 20
	}),

	new Product({

		imagePath: 'https://support.activision.com/servlet/servlet.FileDownload?file=00PU000000Rq6tz',
		title: 'Call of Duty Video Game',
		description: 'Meh...... nah, it\'s okay I guess',
		price: 40
	}),
];

for (var i = 0; i < products.length; i++) {

	products[i].save(function(err,result){

		if(i == products.length-1)
			exit();
	});
}


function exit(){

	mongoose.disconnect();
}
