
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//       THIS IS THE MAIN THAT LAUNCHES THE SCRIPT WHEN THE PAGE INITIALLY LOADS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function init(){
  // FRIST WE WANT TO GET THE IMAGE, NAME, RETAILERS / LOGO / PRICES, COLOURS & GENDER
  // SECOND WE WANT TO RETRIEVE THE PRICE HISTORY
  //getProductData();
  //getPriceHistory();
  printRating(4);
  var arr = [];
  //printColours(arr);
  //printGender(arr);
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           the following functions handle getting the initial product data and saving it
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// WHAT DATA WE WANT:
// PRODUCT IMAGE
// RATING
// COLOUR ARRAY
// GENDER ARRAY
// ARRAY OF RETAILERS
// IN EACH RETAILER:
//  -RETAILER NAME
//  -RETAILER LOGO
//  -RETAILERS PRICE

function getProductData(){
  $.ajax({
    type: 'POST',
    url: '../sql/get_product_data.php',
    data: {timeframe: timeframe},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        throwInvalidError("Error Getting Staff", arr.message);
      } else{
        var arr = JSON.parse(response);
        printProductData(arr);
      }
    },
    error:function(x,e) {
      printAjaxErrors(x,e);
    }
  });
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           the following functions handle getting the product history
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getPriceHistory(){
  $.ajax({
    type: 'POST',
    url: '../sql/get_product_price_history.php',
    data: {timeframe: timeframe},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        throwInvalidError("Error Getting Staff", arr.message);
      } else{
        var arr = JSON.parse(response);
        printProductData(arr);
      }
    },
    error:function(x,e) {
      printAjaxErrors(x,e);
    }
  });
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           the following functions handle printing of data
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$('#product-title').html(product);

$('#product-brand').html(product);

function printRating(rating){
  log('printing rating');
  var out = "";
  for(var i = 1; i <= 5; i++) {
    if (i <= rating) {
      out += '<span class="fa fa-2x fa-star checked"></span>';
    } else {
      out += '<span class="fa fa-2x fa-star"></span>';
    }
  }
  $('#user-rating').html(out);
}

function printColours(colours){
  if (colours.length == 0) {
    $('#colour-row').hide();
  } else {
    var out = "";
    for(var i = 0; i < 5; i++) {
      out += '<span class="dot" style="background-color: blue;"></span>';
    }
    $('#colour-options').html(out);
  }
}

function printGender(genders){
  if (genders.length == 0) {
    $('#gender-row').hide();
  } else {
    var out = "";
    for(var i = 0; i < genders.length; i++) {
      out += '';
    }
    $('#gender-select').html(out);
  }
}

function printRetailers(){

}
