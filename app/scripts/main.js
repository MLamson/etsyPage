console.log('The Iron Yard Rocks');



etsyItems.results.forEach(function(item){



	$('.mainSection').append('<a href="' + item.url + '" ><img src="' + item.Images[0].url_170x135 + '"></a>');
	$('.mainSection').append('<span>' + item.title + '</span>');
	$('.mainSection').append('<span>' + item.login_name + '</span><span>' + item.price + '</span')



	//$('.mainSection').append('<img src="' + item.Images[0].url_170x135 + '">');

	//<a href="samesite.htm"><img src="image.gif"></a>

	
});



// url
// url_75x75 for image
// title
// login_name
// price





// var woodWood = items.filter(function(isWood){
//  		return isWood.materials.indexOf('wood') > 0;
//  		});

//  	woodWood.forEach(function(item){
// 			console.log(item.title);
// 		});