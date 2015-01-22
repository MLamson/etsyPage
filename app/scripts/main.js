console.log('Duckies and bunnies');


	var itemUrl;
	var itemPic;
	var itemTitle;
	var itemPrice;
	var shopName;
	var currencyCode;

	var itemContent;
  
etsyItems.results.forEach(function(item){

	
	currencyCode = item.currency_code;
  itemContent = '<div class="itemBox">';

	$('.mainSection').append(itemContent + '<a href="' + item.url + '" ><img src="' + item.Images[0].url_170x135 + '"></a> <span class="titleSpace">' + item.title + '</span><span>' + item.Shop.shop_name + '</span><span>' + item.price + '</span><span>' + currencyCode + '</span>');
	
});
	






// itemContent = '<div class-"item">';
// itemContent += '<img src="' + itemPic + ' ">';

















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
//$('.mainSection').append('<img src="' + item.Images[0].url_170x135 + '">');

	//<a href="samesite.htm"><img src="image.gif"></a>


