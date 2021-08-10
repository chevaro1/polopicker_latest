var page = "1";
console.log("product name 2 = " + product);
var dataArr = {"cat": product};
var totalPages = 1;
var order = "ASC";
//dataArr["cat"] = product;
console.log("data array = " + dataArr);
getRes();
getPages();
/**
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ALL ITEMS                THIS IS THE CALL THAT RETURNS ALL ITEMS WITHOUT FILTERS -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
 **/
 function printAll(){
     var xmlhttp = new XMLHttpRequest();
     var url = "../sql/get_item_by_product.php";
     var param = "?prod=" + product;

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
       var name = arr[i].website;
       name = name.replaceAll("_", " ");
      out +=  '<div class=\"col-md-3 col-lg-3 mb-4 text-center\">' +
              '<div class=\"product-entry border\">' +
              '<div class=\"desc\">' +
              '<h2><a href=\"' + arr[i].link + '\">' + name + '</a></h2>' +
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

 /**
 <!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
 <!-- PRICE                THIS IS THE CALL TO THE PRICE FILTER WHICH PRINTS THE PRICE BAR                                               -->
 <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
 **/


 var canCall = true;
 var spriceLive = "";
 var fpriceLive = "";
 var sprice = "0";
 var fprice = "500";


 $( function() {
   $( "#slider-range" ).slider({
     range: true,
     min: 0,
     max: 500,
     values: [ 0, 500 ],
     slide: function( event, ui ) {
       $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
       setTimeout(setPrice, 1000);
       spriceLive = ui.values[ 0 ];
       fpriceLive = ui.values[ 1 ];
       //alert("start price = " + sprice + " finish price = " + fprice);
     }
   });
   $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
     " - £" + $( "#slider-range" ).slider( "values", 1 ) );

 } );


 function setPrice() {
   if (!canCall){
     return;
   }
   sprice = spriceLive;
   fprice = fpriceLive;
   console.log("start price = " + spriceLive + " finish price = " + fpriceLive);
   arrFormat();
   canCall = false;
   setTimeout(function(){
       canCall = true;
   }, 990);
 }

 /**
 <!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
 <!-- PRICE ORDER               THIS IS THE CALL TO THE GET THE PRICE ORDER                                              -->
 <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
 **/

 function pOrder(){
   order = document.getElementById("order").value;
   console.log(order);
   arrFormat();
 }




 /**
<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- BRAND                THIS IS THE CALL TO THE BRAND FILTER WHICH RETURNS THE PRODUCT BRANDS                                                 -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->
 **/
 var xmlhttp = new XMLHttpRequest();
 var url = "../sql/get_brand_by_product.php";
 var param = "?prod=" + product;

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
   out += '<ul>';
          //'<li><a href="javascript:printAll()">All</a></li>';
   for(i = 0; i < arr.length; i++) {
       //out +=  '<li><a href="javascript:filter("brand","' + arr[i].name + '")">' + arr[i].name + '</a></li>';
       //out +=  '<li><a>' + arr[i].name + '</a></li>';
       out += '<br>';
       if (arr[i].name === "other"){
            //out +=  '<li><a href="javascript:filter(\'brand\',\'unknown\',\'' + product +'\')">' + arr[i].name + '</a></li>';
            out += '<label>';
            out += '<input class="mr-2" type="checkbox" name="brand" value="unknown">';
            out += arr[i].name;
            out += '</label>';
       } else{
               //out +=  '<li><a href="javascript:filter(\'brand\',\'' + arr[i].name + '\',\'' + product +'\')">' + arr[i].name + '</a></li>';
               var name = arr[i].name;
               name = name.replaceAll(" ", "_");
               out += '<label>';
               out += '<input class="mr-2" type="checkbox" name="brand" value=' + name + '>';
               out += arr[i].name;
               out += '</label>';
           }

   }
   out += '</ul>';
   document.getElementById("brand").innerHTML = out;
   getBrand();
 }
 /**
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- SELLER                THIS IS THE CALL TO THE SELLER FILTER WHICH RETURNS THE PRODUCT SELLERS                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
 **/
 var xmlhttp = new XMLHttpRequest();
 var url = "../sql/get_seller_by_product.php";
 var param = "?prod=" + product;

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
   out += '<ul>';
   for(i = 0; i < arr.length; i++) {
       var name = arr[i].name;
       site = name.replaceAll(" ", "_");
       name = name.replaceAll("_", " ");
       out += '<br>';
       //out +=  '<li><a href="javascript:filter(\'website\',\'' + arr[i].name + '\',\'' + product + '\')">' + arr[i].name + '</a></li>';
       out += '<label>';
       out += '<input class="mr-2" type="checkbox" name="vendor" value=' + site + '>';
       out += name;
       out += '</label>';

   }
   out += '</ul>';
   document.getElementById("seller").innerHTML = out;
   getVendor();
 }
/**
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- COLOUR                THIS IS THE CALL TO THE COLOUR FILTER WHICH RETURNS THE PRODUCT COLOURS                                                  -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
 **/
 var xmlhttp = new XMLHttpRequest();
 var url = "../sql/get_colour_by_product.php";
 var param = "?prod=" + product;

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
   out += '<ul>';
   for(i = 0; i < arr.length; i++) {
     out += '<br>';
     if (arr[i].name === "other"){
          out += '<label>';
          out += '<input class="mr-2" type="checkbox" name="colour" value="unknown">';
          out += arr[i].name;
          out += '</label>';
     } else{
             out += '<label>';
             out += '<input class="mr-2" type="checkbox" name="colour" value=' + arr[i].name + '>';
             out += arr[i].name;
             out += '</label>';
         }
   }
   out += '</ul>';
   document.getElementById("colour").innerHTML = out;
   getColour();
 }
 /**
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- product Range                THIS IS THE CALL TO THE product range FILTER WHICH RETURNS THE TYPES OF PRODUCT WITHIN THE CATEGORY                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
**/
 var xmlhttp = new XMLHttpRequest();
 var url = "../sql/get_product_range_by_product.php";
 var param = "?prod=" + product;

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
   out += '<ul>';
   for(i = 0; i < arr.length; i++) {
     out += '<br>';
     if (arr[i].name === "other"){
          out += '<label>';
          out += '<input class="mr-2" type="checkbox" name="range" value="unknown">';
          out += arr[i].name;
          out += '</label>';
     } else{
             var name = arr[i].name;
             name = name.replaceAll(" ", "_");
             out += '<label>';
             out += '<input class="mr-2" type="checkbox" name="range" value=' + name + '>';
             out += arr[i].name;
             out += '</label>';
         }
   }
   out += '</ul>';
   document.getElementById("product").innerHTML = out;
   getRange();
 }


/**
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- Gender                THIS IS THE CALL TO THE gender FILTER WHICH RETURNS THE whether the product is for men/women/children                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
**/
 var xmlhttp = new XMLHttpRequest();
 var url = "../sql/get_gender_by_product.php";
 var param = "?prod=" + product;

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
   out += '<ul>';
   for(i = 0; i < arr.length; i++) {
     out += '<br>';
     if (arr[i].name === "other"){
          out += '<label>';
          out += '<input class="mr-2" type="checkbox" name="gender" value="unknown">';
          out += arr[i].name;
          out += '</label>';
     } else{
             out += '<label>';
             out += '<input class="mr-2" type="checkbox" name="gender" value=' + arr[i].name + '>';
             out += arr[i].name;
             out += '</label>';
         }
   }
   out += '</ul>';
   document.getElementById("gender").innerHTML = out;
   getGender();
 }


/**
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!--                THIS IS THE CALL TO THE FILTER WHICH RETURNS THE FILTERED PRODUCTS                                                                  -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
**/
 function filter(col, filter, prod){
     var xmlhttp = new XMLHttpRequest();
     var url = "../sql/filter_items_by_product.php";
     var param = "?cat=" + col + "&fil=" + filter + "&prod=" + prod;

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
       var name = arr[i].website;
       name = name.replaceAll("_", " ");
      out +=  '<div class=\"col-md-3 col-lg-3 mb-4 text-center\">' +
              '<div class=\"product-entry border\">' +
              '<div class=\"desc\">' +
              '<h2><a href=\"' + arr[i].link + '\">' + name + '</a></h2>' +
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


 /**
 <!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
 <!--                THIS IS THE CALL TO ADD EVENT LISTENER TO ALL OF THE FILTER OPTIONS                                                                  -->
 <!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
 **/

 var range = "";
 let rangeArray = [];

 var vendor = "";
 let vendorArray = [];

 var colour = "";
 let colourArray = [];

 var gender = "";
 let genderArray = [];

 var brand = "";
 let brandArray = [];

 function getRange(){
   range = document.querySelectorAll("input[type=checkbox][name=range]");

   range.forEach(function(checkbox) {
     checkbox.addEventListener('change', function() {
       rangeArray =
         Array.from(range) // Convert checkboxes to an array to use filter and map.
         .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
         .map(i => i.value) ;// Use Array.map to extract only the checkbox values from the array of objects.

       arrFormat();
       //console.log(rangeArray);
     });
   });
 }

 function getVendor(){
   vendor = document.querySelectorAll("input[type=checkbox][name=vendor]");

   vendor.forEach(function(checkbox) {
     checkbox.addEventListener('change', function() {
       vendorArray =
         Array.from(vendor) // Convert checkboxes to an array to use filter and map.
         .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
         .map(i => i.value) ;// Use Array.map to extract only the checkbox values from the array of objects.

       arrFormat();
       //console.log(vendorArray);
     });
   });
 }

 function getColour(){
   colour = document.querySelectorAll("input[type=checkbox][name=colour]");

   colour.forEach(function(checkbox) {
     checkbox.addEventListener('change', function() {
       colourArray =
         Array.from(colour) // Convert checkboxes to an array to use filter and map.
         .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
         .map(i => i.value) ;// Use Array.map to extract only the checkbox values from the array of objects.

       arrFormat();
       //console.log(colourArray);
     });
   });
 }

 function getGender(){
   gender = document.querySelectorAll("input[type=checkbox][name=gender]");

   gender.forEach(function(checkbox) {
     checkbox.addEventListener('change', function() {
       genderArray =
         Array.from(gender) // Convert checkboxes to an array to use filter and map.
         .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
         .map(i => i.value) ;// Use Array.map to extract only the checkbox values from the array of objects.

       arrFormat();
       //console.log(genderArray);
     });
   });
 }

 function getBrand(){
   brand = document.querySelectorAll("input[type=checkbox][name=brand]");

   brand.forEach(function(checkbox) {
     checkbox.addEventListener('change', function() {
       brandArray =
         Array.from(brand) // Convert checkboxes to an array to use filter and map.
         .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
         .map(i => i.value) ;// Use Array.map to extract only the checkbox values from the array of objects.

       arrFormat();
       //console.log(brandArray);
     });
   });
 }

 /**
 <!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
 <!--                THIS HANDLES THE DATA ARRAY GENERATION THATS PUT INTO THE AJAX CALL                                                                 -->
 <!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
 **/





 function arrFormat() {
   dataArr = [];
   dataArr = {"cat": product};
   page = "1";
   if (rangeArray.length > 0){
     dataArr["range"] = rangeArray;
   }

   if (vendorArray.length > 0){
     dataArr["vendor"] = vendorArray;

   }
   if (colourArray.length > 0){
     dataArr["colour"] = colourArray;

   }
   if (genderArray.length > 0){
     dataArr["gender"] = genderArray;

   }
   if (brandArray.length > 0){
     dataArr["brand"] = brandArray;

   }
   if (sprice != "0" || fprice != "500"){
     dataArr["sprice"] = sprice;
     dataArr["fprice"] = fprice;
   }
   dataArr["order"] = order;
   console.log(dataArr);
   getRes();
   getPages();
 }
 /**
 <!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
 <!--                THIS GETS THE DATA AND PRINTS IT OUT AND USES THE THE dataArr TO GET THE CORRECT DATA                                                                 -->
 <!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
 **/


 function getRes(){
   console.log("we are in the script data is set");
   console.log("current data array  = ");
   console.log(dataArr);
   $.ajax({
     url: '../sql/get_results_bp.php',
     type: "POST",
     data: {data:dataArr, page:page},
     success: function (response) {
       var arr = $.parseJSON(response);
       //console.log("json returned, looks like : " + arr);
       printfilter(arr);
     }
   });
 }

 function printfilter(arr) {
     console.log("print filter called");
     var out = "";
     var i;
     for(i = 0; i < arr.length; i++) {
       var name = arr[i].website;
       name = name.replaceAll("_", " ");
      out +=  '<div class=\"col-md-3 col-lg-3 mb-4 text-center\">' +
              '<div class=\"product-entry border\">' +
              '<div class=\"desc\">' +
              '<h2><a href=\"' + "../sql/forward.php?site=" + arr[i].link + "&id=" + arr[i].id + '\">' + name + '</a></h2>' +
              '</div>' +
              '<a href=\"' + "../sql/forward.php?site=" + arr[i].link + "&id=" + arr[i].id + '\" class=\"prod-img\">' +
              '<img src="' + arr[i].img + '" class=\"img-fluid\" alt=\"product image\">' +
              '</a>' +
              '<div class=\"desc\">' +
              '<h2><a href=\"' + "../sql/forward.php?site=" + arr[i].link + "&id=" + arr[i].id + '\">' + arr[i].name + '</a></h2>' +
              '<span class=\"price\">£' + arr[i].price +'</span>' +
              '</div>' +
              '</div>' +
              '</div>';

     }
     document.getElementById("id01").innerHTML = out;
 }


 /**
 <!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
 <!--                THIS GETS THE DATA AND PRINTS OUT THE NUMBER OF PAGES AT THE BOTTOM AND USES THE THE dataArr TO GET THE CORRECT DATA                                                                 -->
 <!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
 **/


 function getPages(){
   $.ajax({
     url: '../sql/get_pages_bp.php',
     type: "POST",
     data: {data:dataArr, page:page},
     success: function (response) {
       var arr = $.parseJSON(response);
       //console.log("json returned, looks like : " + arr);
       printpages(arr);
     }
   });
 }



 function printpages(arr){
   var total = arr[0].total;
   totalPages = Math.ceil(parseInt(total) / 32);
   var currentPage = parseInt(page);


   console.log("print pages called");
   var out = '<ul>' +
             '<li><a onclick=nextPage()><i class="ion-ios-arrow-back"></i></a></li>';
   var min = currentPage - 4;
   var max = currentPage + 4;
   if (max > totalPages){
     max = totalPages;
   }
   if (min < 1){
     min = 1;
   }
   console.log("print pages: min = " + min + " max  = " + max + " totalpages = " + totalPages);
   for(min; min <= max; min++) {
     if (min == page){
       out +=  '<li class="active"><span>' + min + '</span></li>';
     } else {
       out +=  '<li><a onclick=moveToPage("' + min +'")>' + min + '</a></li>';
     }

   }
   out += '<li><a onclick=lastPage()><i class="ion-ios-arrow-forward"></i></a></li>' +
             '</ul>';
   document.getElementById("pageno").innerHTML = out;


   //var totalpagestr = totalPages.toString();
   var exit = "Results: " + total;
   document.getElementById("results").innerHTML = exit;
 }



 /**
 <!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
 <!--                THIS TAKES THE USER TO THE NEXT OR PREVIOUS PAGE OR THE PAGE NUMBER THAT THEY HAVE PRESSED                                                                 -->
 <!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
 **/



 function lastPage(){
   var currentPage = parseInt(page);
   if (totalPages == currentPage){
     return;
   }
   currentPage += 1;
   page = currentPage.toString();
   getRes();
   getPages();
   $('html, body').animate({ scrollTop: 0 }, 'fast');
 }


 function nextPage(){
   var currentPage = parseInt(page);
   if (currentPage == 1){
     return;
   }
   currentPage -= 1;
   page = currentPage.toString();
   getRes();
   getPages();
   $('html, body').animate({ scrollTop: 0 }, 'fast');
 }

 function moveToPage(no){
   var newPage = parseInt(no);
   page = newPage.toString();
   getRes();
   getPages();
   $('html, body').animate({ scrollTop: 0 }, 'fast');
 }
