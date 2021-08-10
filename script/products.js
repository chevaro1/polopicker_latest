printAll();

/*
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ALL ITEMS                THIS IS THE CALL THAT RETURNS ALL ITEMS WITHOUT FILTERS -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
*/

function printAll(){
    var xmlhttp = new XMLHttpRequest();
    var url = "get_item.php";
    var param = "?cat=" + product;

    console.log("get data script running");

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
      }
    };
    xmlhttp.open("GET", url+param, true);
    xmlhttp.send();
}

function myFunction(arr) {
    console.log("myFunction called");
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
     out +=  '<div class=\"col-md-3 col-lg-3 mb-4 text-center\">' +
             '<div class=\"product-entry border\">' +
             '<div class=\"desc\">' +
             '<h2><a href=\"' + arr[i].link + '\">' + arr[i].website + '</a></h2>' +
             '</div>' +
             '<a href=\"' + arr[i].link + '\" class=\"prod-img\">' +
             '<img src="' + arr[i].img + '" class=\"img-fluid\" alt=\"product image\">' +
             '</a>' +
             '<div class=\"desc\">' +
             '<h2><a href=\"' + arr[i].link + '\">' + arr[i].name + '</a></h2>' +
             '<span class=\"price\">' + arr[i].price +'</span>' +
             '</div>' +
             '</div>' +
             '</div>';

    }
    document.getElementById("id01").innerHTML = out;
}

/*
<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- BRAND                THIS IS THE CALL TO THE BRAND FILTER WHICH RETURNS THE PRODUCT BRANDS                                                 -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
*/

var xmlhttp = new XMLHttpRequest();
var url = "get_brand.php";
var param = "?cat=" + product;

console.log("getting brand");

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    printBrands(myArr);
  }
};
xmlhttp.open("GET", url+param, true);
xmlhttp.send();


function printBrands(arr) {
    console.log("print brands called");
    var out = "";
    var i;
    out += '<h3>Brands</h3> '+
           '<ul>' +
           '<li><a href="javascript:printAll()">All</a></li>';
    for(i = 0; i < arr.length; i++) {
        //out +=  '<li><a href="javascript:filter("brand","' + arr[i].name + '")">' + arr[i].name + '</a></li>';
        //out +=  '<li><a>' + arr[i].name + '</a></li>';
        if (arr[i].name === "other"){
             out +=  '<li><a href="javascript:filter(\'brand\',\'unknown\',\'' + product +'\')">' + arr[i].name + '</a></li>';
        } else{
                out +=  '<li><a href="javascript:filter(\'brand\',\'' + arr[i].name + '\',\'' + product +'\')">' + arr[i].name + '</a></li>';
            }

    }
    out += '</ul>';
    document.getElementById("brand").innerHTML = out;
}

/*
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- SELLER                THIS IS THE CALL TO THE SELLER FILTER WHICH RETURNS THE PRODUCT SELLERS                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
*/

var xmlhttp = new XMLHttpRequest();
var url = "get_seller.php";
var param = "?cat=" + product;

console.log("getting seller");

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    printseller(myArr);
  }
};
xmlhttp.open("GET", url+param, true);
xmlhttp.send();

function printseller(arr) {
    console.log("print seller called");
    var out = "";
    var i;
    out += '<h3>Seller</h3> '+
           '<ul>' +
           '<li><a href="javascript:printAll()">All</a></li>';
    for(i = 0; i < arr.length; i++) {
        out +=  '<li><a href="javascript:filter(\'website\',\'' + arr[i].name + '\',\'' + product + '\')">' + arr[i].name + '</a></li>';
        //out +=  '<li><a>' + arr[i].name + '</a></li>';

    }
    out += '</ul>';
    document.getElementById("seller").innerHTML = out;
}

/*
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- COLOUR                THIS IS THE CALL TO THE COLOUR FILTER WHICH RETURNS THE PRODUCT COLOURS                                                  -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
*/

var xmlhttp = new XMLHttpRequest();
var url = "get_colour.php";
var param = "?cat=" + product;

console.log("getting colour");

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    printcolour(myArr);
  }
};
xmlhttp.open("GET", url+param, true);
xmlhttp.send();

function printcolour(arr) {
    console.log("print colour called");
    var out = "";
    var i;
    out += '<h3>Colour</h3> '+
           '<ul>' +
           '<li><a href="javascript:printAll()">All</a></li>';
    for(i = 0; i < arr.length; i++) {
        if (arr[i].name === "other"){
             out +=  '<li><a href="javascript:filter(\'colour\',\'unknown\',\'' + product +'\')">' + arr[i].name + '</a></li>';
        } else{
                out +=  '<li><a href="javascript:filter(\'colour\',\'' + arr[i].name + '\',\'' + product +'\')">' + arr[i].name + '</a></li>';
            }
    }
    out += '</ul>';
    document.getElementById("colour").innerHTML = out;
}

/*
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- product Range                THIS IS THE CALL TO THE product range FILTER WHICH RETURNS THE TYPES OF PRODUCT WITHIN THE CATEGORY                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
*/

var xmlhttp = new XMLHttpRequest();
var url = "get_product_range.php";
var param = "?cat=" + product;

console.log("getting product range");

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    printproduct(myArr);
  }
};
xmlhttp.open("GET", url+param, true);
xmlhttp.send();

function printproduct(arr) {
    console.log("print product range called");
    var out = "";
    var i;
    out += '<h3>Product Range</h3> '+
           '<ul>' +
           '<li><a href="javascript:printAll()">All</a></li>';
    for(i = 0; i < arr.length; i++) {
        if (arr[i].name === "other"){
             out +=  '<li><a href="javascript:filter(\'product\',\'unknown\',\'' + product +'\')">' + arr[i].name + '</a></li>';
        } else{
                out +=  '<li><a href="javascript:filter(\'product\',\'' + arr[i].name + '\',\'' + product +'\')">' + arr[i].name + '</a></li>';
            }
    }
    out += '</ul>';
    document.getElementById("product").innerHTML = out;
}


/*
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- Gender                THIS IS THE CALL TO THE gender FILTER WHICH RETURNS THE whether the product is for men/women/children                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
*/

var xmlhttp = new XMLHttpRequest();
var url = "get_gender.php";
var param = "?cat=" + product;

console.log("getting gender");

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    printgender(myArr);
  }
};
xmlhttp.open("GET", url+param, true);
xmlhttp.send();

function printgender(arr) {
    console.log("print gender called");
    var out = "";
    var i;
    out += '<h3>Gender</h3> '+
           '<ul>' +
           '<li><a href="javascript:printAll()">All</a></li>';
    for(i = 0; i < arr.length; i++) {
        if (arr[i].name === "other"){
             out +=  '<li><a href="javascript:filter(\'gender\',\'unknown\',\'' + product +'\')">' + arr[i].name + '</a></li>';
        } else{
                out +=  '<li><a href="javascript:filter(\'gender\',\'' + arr[i].name + '\',\'' + product +'\')">' + arr[i].name + '</a></li>';
            }
    }
    out += '</ul>';
    document.getElementById("gender").innerHTML = out;
}


/*
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!--                THIS IS THE CALL TO THE FILTER WHICH RETURNS THE FILTERED PRODUCTS                                                                  -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
*/

function filter(col, filter, cat){
    var xmlhttp = new XMLHttpRequest();
    var url = "filter_items.php";
    var param = "?cat=" + col + "&fil=" + filter + "&category=" + cat;

    console.log("getting filtered items");

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        printfilter(myArr);
      }
    };
    xmlhttp.open("GET", url+param, true);
    xmlhttp.send();
}

function printfilter(arr) {
    console.log("print filter called");
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
     out +=  '<div class=\"col-md-3 col-lg-3 mb-4 text-center\">' +
             '<div class=\"product-entry border\">' +
             '<div class=\"desc\">' +
             '<h2><a href=\"' + arr[i].link + '\">' + arr[i].website + '</a></h2>' +
             '</div>' +
             '<a href=\"' + arr[i].link + '\" class=\"prod-img\">' +
             '<img src="' + arr[i].img + '" class=\"img-fluid\" alt=\"product image\">' +
             '</a>' +
             '<div class=\"desc\">' +
             '<h2><a href=\"' + arr[i].link + '\">' + arr[i].name + '</a></h2>' +
             '<span class=\"price\">' + arr[i].price +'</span>' +
             '</div>' +
             '</div>' +
             '</div>';

    }
    document.getElementById("id01").innerHTML = out;
}
