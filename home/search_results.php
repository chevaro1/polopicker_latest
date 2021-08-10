<?php


?>

<!DOCTYPE HTML>
<html>
	<head>
	<title>Search Results</title>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<?php include('../blocks/head.php') ?>

	</head>
        <body onload="init()">

	<div class="colorlib-loader"></div>

	<div id="page">
		<?php include('../blocks/header.php') ?>

		<div class="breadcrumbs">
			<div class="container">
				<div class="row">
					<div class="col">
						<p class="bread"><span><a href="../home/home.php">Home</a></span> / <span>search results</span></p>
					</div>
				</div>
			</div>
		</div>

		<div class="breadcrumbs-two">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="breadcrumbs-img" style="background-image: url(../images/playerandpony1.jpg);">
                                                    <h2><span style="background-color: #88c8bc; border-radius: 15px">search results</span></h2>
						</div>
						<div class="menu text-center">
							<!-- <p><a href="#">New Arrivals</a> <a href="#">Best Sellers</a> <a href="#">Extended Widths</a> <a href="#">Sale</a></p> -->
						</div>
					</div>
				</div>
			</div>
		</div>

               <!-- THIS IS THE PRODUCT SECTION -->
		<div class="colorlib-product">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-xl-3">
						<div class="row">
							<div class="col-sm-12">
								<div class="side border mb-1" id="brand">
								</div>
							</div>
						<!--	<div class="col-sm-12">
								<div class="side border mb-1">
									<h3>Size/Width</h3>
									<div class="block-26 mb-2">
										<h4>Size</h4>
					               <ul>
					                  <li><a href="#">7</a></li>
					                  <li><a href="#">7.5</a></li>
					                  <li><a href="#">8</a></li>
					                  <li><a href="#">8.5</a></li>
					                  <li><a href="#">9</a></li>
					                  <li><a href="#">9.5</a></li>
					                  <li><a href="#">10</a></li>
					                  <li><a href="#">10.5</a></li>
					                  <li><a href="#">11</a></li>
					                  <li><a href="#">11.5</a></li>
					                  <li><a href="#">12</a></li>
					                  <li><a href="#">12.5</a></li>
					                  <li><a href="#">13</a></li>
					                  <li><a href="#">13.5</a></li>
					                  <li><a href="#">14</a></li>
					               </ul>
					            </div>
					            <div class="block-26">
										<h4>Width</h4>
					               <ul>
					                  <li><a href="#">M</a></li>
					                  <li><a href="#">W</a></li>
					               </ul>
					            </div>
								</div>
							</div> -->
							<div class="col-sm-12">
								<div class="side border mb-1" id="seller">
								</div>
							</div>
							<div class="col-sm-12">
								<div class="side border mb-1" id="colour">
								</div>
							</div>
							<div class="col-sm-12">
								<div class="side border mb-1" id="product">
								</div>
							</div>
							<div class="col-sm-12">
								<div class="side border mb-1" id="gender">
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-9 col-xl-9">
						<div class="row row-pb-md" id="id01">
						</div>
						<?php #include ("page_numbers.php") ?>
					</div>
				</div>
			</div>
		</div>

		<?php include ("../blocks/partners.php") ?>

		<?php include ("../blocks/footer.php") ?>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="ion-ios-arrow-up"></i></a>
	</div>

	<!-- jQuery -->
	<script src="../js/jquery.min.js"></script>
   <!-- popper -->
   <script src="../js/popper.min.js"></script>
   <!-- bootstrap 4.1 -->
   <script src="../js/bootstrap.min.js"></script>
   <!-- jQuery easing -->
   <script src="../js/jquery.easing.1.3.js"></script>
	<!-- Waypoints -->
	<script src="../js/jquery.waypoints.min.js"></script>
	<!-- Flexslider -->
	<script src="../js/jquery.flexslider-min.js"></script>
	<!-- Owl carousel -->
	<script src="../js/owl.carousel.min.js"></script>
	<!-- Magnific Popup -->
	<script src="../js/jquery.magnific-popup.min.js"></script>
	<script src="../js/magnific-popup-options.js"></script>
	<!-- Date Picker -->
	<script src="../js/bootstrap-datepicker.js"></script>
	<!-- Stellar Parallax -->
	<script src="../js/jquery.stellar.min.js"></script>
	<!-- Main -->
	<script src="../js/main.js"></script>

        <script>

            var product = "<?php echo $_GET["term"] ?>";
            var pagename = "helmets.php";

            printAll();
						searchData();

						function searchData(){
						  console.log("saving search data");
						  $.ajax({
						    url: "../sql/save_search_data.php",
						    type: "POST",
						    data: {term: product}, // serializes the form's elements.
						  });
						}
						
 <!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ALL ITEMS                THIS IS THE CALL THAT RETURNS ALL ITEMS WITHOUT FILTERS -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->

            function printAll(){
                var xmlhttp = new XMLHttpRequest();
                var url = "../sql/search_items.php";
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

 <!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- BRAND                THIS IS THE CALL TO THE BRAND FILTER WHICH RETURNS THE PRODUCT BRANDS                                                 -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->

            var xmlhttp = new XMLHttpRequest();
            var url = "../sql/get_brand.php";
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

<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- SELLER                THIS IS THE CALL TO THE SELLER FILTER WHICH RETURNS THE PRODUCT SELLERS                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->

            var xmlhttp = new XMLHttpRequest();
            var url = "../sql/get_seller.php";
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

 <!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- COLOUR                THIS IS THE CALL TO THE COLOUR FILTER WHICH RETURNS THE PRODUCT COLOURS                                                  -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->

            var xmlhttp = new XMLHttpRequest();
            var url = "../sql/get_colour.php";
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

<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- product Range                THIS IS THE CALL TO THE product range FILTER WHICH RETURNS THE TYPES OF PRODUCT WITHIN THE CATEGORY                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->

            var xmlhttp = new XMLHttpRequest();
            var url = "../sql/get_product_range.php";
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



<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- Gender                THIS IS THE CALL TO THE gender FILTER WHICH RETURNS THE whether the product is for men/women/children                              -->
<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->

            var xmlhttp = new XMLHttpRequest();
            var url = "../sql/get_gender.php";
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



 <!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!--                THIS IS THE CALL TO THE FILTER WHICH RETURNS THE FILTERED PRODUCTS                                                                  -->
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->

            function filter(col, filter, cat){
                var xmlhttp = new XMLHttpRequest();
                var url = "../sql/filter_items.php";
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

        </script>

	</body>
</html>
