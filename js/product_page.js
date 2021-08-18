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
      printByColour(this.id);
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
    $('#gender-select').on('change', function() {
      printByGender(this.value);
    });
  }
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           the following functions handle printing the RETAILERS WHEN GIVEN AN ARRAY OF PRODUCTS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function printRetailers(retailers){
  //log(retailers);
  var websitePositions = [];
  for(var i = 0; i < retailers.length; i++) {
    if (!(retailers[i].website in websitePositions)) {
      websitePositions[retailers[i].website] = [];
    }
    websitePositions[retailers[i].website].push(i);
  }
  //log(websitePositions);

  var out = '';
  for(var key in websitePositions){
    // THIS IF STATEMENT HANDLES PRODUCTS THAT DO NOT NEED A DROP DOWN DUE TO THE RETAILER ONLY HAVING ONE VERSION OF THE PRODUCT
    if (websitePositions[key].length == 1) {
      out += '<a href="../sql/forward.php?site=' + retailers[websitePositions[key][0]].link + '&id=' + retailers[websitePositions[key][0]].id + '">'
      out += '<div class="card mb-2">';
      out += '<div class="card-body">';
      out += '<div class="row">';
      out += '<div class="col-md-6 col-8 align-self-center">';
      out += '<span class="align-middle"><h5 class="mb-0">' + retailers[websitePositions[key][0]].website + '</h5></span>';
      out += '</div>';
      out += '<div class="col-md-3 d-none d-md-block">';
      out += '<img src="' + retailers[websitePositions[key][0]].img + '" class="mx-auto company-logo" alt="Product image">';
      out += '</div>';
      out += '<div class="col-4 col-md-3 align-self-center">';
      out += '<span class="align-middle text-right"><h4 class="mb-0">£' + retailers[websitePositions[key][0]].price + '</h4></span>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
      out += '</a>';
    } else {
      //MAIN CARD FOR A RETAILER GOES HERE
      out += '<a data-toggle="collapse" class="retialer-main-card" id="' + key + '-main-card" data-target="#' + key + '-collapse" aria-expanded="false" aria-controls="' + key + '-collapse">';
      out += '<div class="card mb-2 retailer-main-card-body">';
      out += '<div class="card-body">';
      out += '<div class="row">';
      out += '<div class="col-10 order-1 col-md-6 align-self-center">';
      out += '<span class="align-middle"><h5 class="mb-0">' + key + '</h5></span>';
      out += '</div>';
      out += '<div class="col-md-2 order-2 d-none d-md-block text-center">';
      out += '<img src="' + retailers[websitePositions[key][0]].img + '" class="mx-auto company-logo" alt="Product image">';
      out += '</div>';
      out += '<div class="col-12 order-4 order-md-3 col-md-3 align-self-center">';
      out += '<span class="align-middle text-right"><h4 class="mb-0">£' + retailers[websitePositions[key][0]].price + ' - £' + retailers[websitePositions[key][websitePositions[key].length-1]].price + '</h4></span>';
      out += '</div>';
      out += '<div class="col-2 order-3 order-md-4 col-md-1 align-self-center">';
      out += '<span class="fa fa-lg fa-chevron-up rotate"></span>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
      out += '</div>';
      out += '</a>';
      out += '<div class="collapse" id="' + key + '-collapse">';

      for(var i = 0; i < websitePositions[key].length; i++){
        //SUB CARDS FOR A RETAILER GO HERE
        out += '<a href="../sql/forward.php?site=' + retailers[websitePositions[key][i]].link + '&id=' + retailers[websitePositions[key][i]].id + '">'
        out += '<div class="col-12 col-md-11 offset-md-1 px-0">';
        out += '<div class="card mb-2">';
        out += '<div class="card-body">';
        out += '<div class="row">';
        out += '<div class="col-md-6 col-8 align-self-center">';
        out += '<span class="align-middle"><h5 class="mb-0">' + retailers[websitePositions[key][i]].name + '</h5></span>';
        out += '</div>';
        out += '<div class="col-md-3 d-none d-md-block">';
        out += '<img src="' + retailers[websitePositions[key][i]].img + '" class="mx-auto company-logo" alt="">';
        out += '</div>';
        out += '<div class="col-4 col-md-3 align-self-center">';
        out += '<span class="align-middle text-right"><h4 class="mb-0">£' + retailers[websitePositions[key][i]].price + '</h4></span>';
        out += '</div>';
        out += '</div>';
        out += '</div>';
        out += '</div>';
        out += '</div>';
        out += '</a>';

      }
      out += '</div>';
    }

    $('#retailers-column').html(out);
  }
  enableRetailerCardAnimation();

  return;

}




function enableRetailerCardAnimation(){
  $(".retialer-main-card").click(function(){
    //log(this);
    $(this).find('span.rotate').toggleClass("down");
  })
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                           the following functions handle the operations for printing when a option is pressed
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function printByColour(colour){
  if (colour == 'all') {
    printRetailers(prodArray);
  } else {
    var submitArr = [];
    for (var i = 0; i < prodArray.length; i++) {
      if (prodArray[i].colour.includes(colour)) {
        submitArr.push(prodArray[i]);
      }
    }
    printRetailers(submitArr);
  }
}

function printByGender(gender){
  if (gender == 'all') {
    printRetailers(prodArray);
  } else {
    var submitArr = [];
    for (var i = 0; i < prodArray.length; i++) {
      if (prodArray[i].gender == gender) {
        submitArr.push(prodArray[i]);
      }
    }
    printRetailers(submitArr);
  }
}








//hi
