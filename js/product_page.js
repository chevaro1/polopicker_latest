var colourArray = [];
var imgArray = [];
var genderArray = [];
var brand = '';
var rating = 0;
var prodArray = [];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//       THIS IS THE MAIN THAT LAUNCHES THE SCRIPT WHEN THE PAGE INITIALLY LOADS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function init(){
  // FRIST WE WANT TO GET THE IMAGE, NAME, RETAILERS / LOGO / PRICES, COLOURS & GENDER
  // SECOND WE WANT TO RETRIEVE THE PRICE HISTORY
  log("product name = " + product);
  log("category name = " + category);
  getProductData();
  //getPriceHistory();
  //printRating(4);
  //var arr = [];
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
    data: {product: product, category: category},
    success: function(response) {
      var arr = JSON.parse(response);
      if (arr.status == "fail"){
        throwInvalidError("Error Getting Staff", arr.message);
      } else{
        var arr = JSON.parse(response);
        addProductData(arr);
      }
    },
    error:function(x,e) {
      printAjaxErrors(x,e);
    }
  });
}


function addProductData(arr){
  imgArray = arr.image;
  colourArray = arr.colours;
  genderArray = arr.genders;
  brand = arr.brand;
  rating = arr.rating;
  prodArray = arr.products;

  printPageOptions();
  printRetailers(prodArray);
}

function printPageOptions(){
  $('#product-brand').html(brand);
  printRating(rating);
  printColours(colourArray);
  printGender(genderArray);
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

function enableTooltips(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
}

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
    var out = '<span id="all" class="dot colour-picker mr-1" style="background-color: grey;"  data-toggle="tooltip" data-placement="top" title="All / Unknown"></span>';
    for(var i = 0; i < colours.length; i++) {
      out += '<span id="' + colours[i] + '" class="dot colour-picker mr-1" style="background-color: ' + colours[i] + ';"  data-toggle="tooltip" data-placement="top" title="' + colours[i] + '"></span>';
    }
    $('#colour-options').html(out);
    enableTooltips();
    $('.colour-picker').on('click', function(event){
      alert(this.id);
    })
  }
}

function printGender(genders){
  if (genders.length == 0) {
    $('#gender-row').hide();
  } else {
    var out = '<option value="all" selected>All / Unknown</option>';
    for(var i = 0; i < genders.length; i++) {
      out += '<option value="' + genders[i] + '">' + genders[i] + '</option>';
    }
    $('#gender-select').html(out);
  }
}

function printRetailers(retailers){
  log(retailers);
  var websitePositions = [];
  for(var i = 0; i < retailers.length; i++) {
    if (!(retailers[i].website in websitePositions)) {
      websitePositions[retailers[i].website] = [];
    }
    websitePositions[retailers[i].website].push(i);
  }
  log(websitePositions);

  var out = '';
  for(var key in websitePositions){
    if (key.length == 1) {
      out += '<div class="card mb-2">';
      out += '<div class="card-body">';
      out += '<div class="row">';
      out += '<div class="col-md-6 col-8 align-self-center">';
      out += '<span class="align-middle"><h5 class="mb-0">' + retailers[key[0]].website + '</h5></span>';
      out += '</div>';
      out += '<div class="col-md-3 d-none d-md-block">';
      out += '<img src="' + retailers[key[0]].img + '" class="mx-auto company-logo" alt="">';
      out += '</div>';
      out += '<div class="col-4 col-md-3 align-self-center">';
      out += '<span class="align-middle text-right"><h4 class="mb-0">£' + retailers[key[0]].price + '</h4></span>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
    } else {
      //MAIN CARD FOR A RETAILER GOES HERE
      for(var i = 0; i < key.length; i++){
        //SUB CARDS FOR A RETAILER GO HERE
      }
    }
  }


  if (retailers.length == 0) {
    out += '<div class="card-body">';
    out += '<span class="align-middle"><h5 class="mb-0">No Retailers Found For This Product</h5></span>';
    out += '</div>';
    $('#retailers-column').hide();
  } else {
    for(var i = 0; i < retailers.length; i++) {
      out += '<div class="card mb-2">';
      out += '<div class="card-body">';
      out += '<div class="row">';
      out += '<div class="col-md-6 col-8 align-self-center">';
      out += '<span class="align-middle"><h5 class="mb-0">' + retailers[i].website + '</h5></span>';
      out += '</div>';
      out += '<div class="col-md-3 d-none d-md-block">';
      out += '<img src="' + retailers[i].img + '" class="mx-auto company-logo" alt="">';
      out += '</div>';
      out += '<div class="col-4 col-md-3 align-self-center">';
      out += '<span class="align-middle text-right"><h4 class="mb-0">£' + retailers[i].price + '</h4></span>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
    }
    $('#retailers-column').html(out);
  }
}





















//hi
