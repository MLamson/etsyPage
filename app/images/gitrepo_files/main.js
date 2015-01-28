console.log('Duckies and Bunnies');



$('.sideBar').append('<img src="' + userAPI.avatar_url + '">');
$('.sideBar').append('<span>' + userAPI.name + '</span>');






_.each(repoAPI, function (p) {
        console.log(p);
        $('.mainSection').append('<a href="' + p.html_url + '">name</a><br/>');
        $('.mainSection').append('<span>' + p.description + '</span><br/>');
});


// <script type="text/javascript">

//     // Grab the template string.
//     var templateString = $('#repoTemplate').text();

//     // Turn it into a template function.
//     var renderTemplate = _.template(templateString);

//     // Pass in an object. Return value is a string
//     // with the bee stings replaced with object's properties
//     var freshHTML = renderTemplate({name: 'Beer Mug'});

//     // Inject the fresh html into the page.
//     $('.mainSection').append(freshHTML);

// </script>







// etsyItems.results.forEach(function(item){

	
// 	currencyCode = item.currency_code;
//   itemContent = '<div class="itemBox">';

// 	$('.mainSection').append(itemContent + '<a href="' + item.url + '" ><img src="' + item.Images[0].url_170x135 + '"></a> <a href="' + item.url + '"<span class="titleSpace">' + item.title + '</span></a><a href="' + item.Shop.url + '"><span class="shopName">' + item.Shop.shop_name + '</span></a><span class="curCode">' + currencyCode + '</span><span class="priceColor">' + '$' + item.price + '</span>');
// 	$('.itemBox').append('<div class="hoverPics"><img src = "../images/heart.png"></div>');
// 	$('.itemBox').append('<div class="hoverPics2"><img src = "../images/hamburger.png"></div>');
// });
