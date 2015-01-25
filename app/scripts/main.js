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

	$('.mainSection').append(itemContent + '<a href="' + item.url + '" ><img src="' + item.Images[0].url_170x135 + '"></a> <a href="' + item.url + '"<span class="titleSpace">' + item.title + '</span></a><a href="' + item.Shop.url + '"><span class="shopName">' + item.Shop.shop_name + '</span></a><span class="curCode">' + currencyCode + '</span><span class="priceColor">' + '$' + item.price + '</span>');
	$('.itemBox').append('<div class="hoverPics"><img src = "../scripts/heart.png"></div>');
	
});

//$('imageBox').append('background-image: url(https://github.com/tiy-atl-js-q1-2015/Assignments/blob/master/Assignment%2009%20*/assets/heart.png');
	
// $('.itemBox').hover(function(){
//   $(this).('<img src="heart.png"');
// 	},function() {$(this)('background-color',"red")});

// 	$('.itemBox').hover(function() {$('this').append'<img src="https://raw.githubusercontent.com/tiy-atl-js-q1-2015/Assignments/master/Assignment%2009/assets/heart.png"'
// });


// $( "li.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });




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


