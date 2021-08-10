<?php

$product = $_GET["prod"];
if (isset($_GET["type"])) {
  $type = $_GET["type"];
};
$js = '<script src="../js/product.js"></script>';

if ($type == "true"){
  $js = '<script src="../js/productbp.js"></script>';
}
$product = str_replace("-", " ", $product);

?>

<!DOCTYPE HTML>
<html>
	<head>
	<title><?php echo $product ?></title>
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
						<p class="bread"><span><a href="../home/home.php">Home</a></span> / <span>product</span></p>
					</div>
				</div>
			</div>
		</div>

				                <?php #include '../blocks/page_banner.php' ?>


               <!-- THIS IS THE PRODUCT SECTION -->


        <h5 class="pl-3" id="results">Results: </h5>
				<div class="row">
					<div class="col-lg-3 col-xl-3">
						<div class="row">
              <div id="accordion" class="col-sm-12">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button class="btn btn-secondary btn-custom-sm collapsed btn-block" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Product Range
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body" id="product">

                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button class="btn btn-secondary btn-custom-sm collapsed btn-block" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Price
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body" id="price">
                      <p>
                      <label for="amount">Price range:</label>
                      <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
                      </p>
                      <div id="slider-range"></div>
                      <hr>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-secondary" onclick="pOrder()" type="button">Search</button>
                        </div>
                        <select class="custom-select" id="order">
                          <option selected value="ASC">Price Ascending</option>
                          <option value="DESC">Price Descending</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button class="btn btn-secondary btn-custom-sm collapsed btn-block" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Retailer
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body" id="seller">

                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingfour">
                    <h5 class="mb-0">
                      <button class="btn btn-secondary btn-custom-sm collapsed btn-block" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                        Colour
                      </button>
                    </h5>
                  </div>
                  <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                    <div class="card-body" id="colour">

                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingfive">
                    <h5 class="mb-0">
                      <button class="btn btn-secondary btn-custom-sm collapsed btn-block" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                        Gender
                      </button>
                    </h5>
                  </div>
                  <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                    <div class="card-body" id="gender">

                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingsix">
                    <h5 class="mb-0">
                      <button class="btn btn-secondary btn-custom-sm collapsed btn-block" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                        Brand
                      </button>
                    </h5>
                  </div>
                  <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordion">
                    <div class="card-body" id="brand">

                    </div>
                  </div>
                </div>
              </div>
						</div>
					</div>
					<div class="col-lg-9 col-xl-9">
						<div class="row row-pb-md" id="id01">
						</div>

					</div>
				</div>
			</div>
		</div>
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="block-27" id="pageno">
        </div>
      </div>
    </div>


		<?php #include ("../blocks/partners.php") ?>

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

      var product = "<?php echo $product ?>";
      var pagename = "balls.php";
      console.log("product name = " + product);
  </script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <?php echo $js ?>

	</body>
</html>
