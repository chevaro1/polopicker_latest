<?php

$product = $_GET["prod"];
$category = $_GET["cat"];

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

  <div class="modal fade" id="report-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Report Listing</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Options</label>
          </div>
          <select class="custom-select" id="report-select">

          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" id="submit-report" class="btn btn-outline-info">Submit</button>
      </div>
    </div>
  </div>
</div>

	<div id="page">
		<?php include('../blocks/header.php') ?>

		<div class="breadcrumbs">
			<div class="container">
				<div class="row">
					<div class="col">
						<p class="bread"><span><a href="../home/home.php">Home</a></span> / <span>product</span> / <span>product</span></p>
					</div>
				</div>
			</div>
		</div>


    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 py-5 border">
					<div class="col-12 px-0 py-3 text-center border" id="main-image-div">
						<img id="main-image" src="" class="mx-auto" alt="Product Image">
					</div>
					<div class="col-12 mt-3">
						<div class="row" id="image-thumbnail-row">

						</div>
					</div>
        </div>
        <div class="col-12 col-md-6 border">
          <div class="col-12">
            <h1 id="product-title">PRODUCT NAME</h1>
            <h4 id="product-brand">Champion</h4>
          </div>
          <div class="row pl-3">
            <!-- THIS ROW HANDLES THE PRODUCT RATINGS -->
            <div class="col-8" id="user-rating">
              <span class="fa fa-2x fa-star checked"></span>
              <span class="fa fa-2x fa-star checked"></span>
              <span class="fa fa-2x fa-star checked"></span>
              <span class="fa fa-2x fa-star"></span>
              <span class="fa fa-2x fa-star"></span>
            </div>
            <div class="col-4">
              see user reviews
            </div>
          </div>
          <div class="row pl-3" id="colour-row">
            <!-- THIS ROW HANDLES THE COLOUR OPTIONS -->
            <div class="col-12 col-md-3 pt-1">
              <h4>Colours:</h4>
            </div>
            <div class="col-md-9 col-12 pt-2" id="colour-options">
              <a href="#"><span class="dot" style="background-color: blue;"></span></a>
              <span class="dot" style="background-color: green;" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></span>
              <span class="dot" style="background-color: red;"></span>
              <span class="dot" style="background-color: pink;"></span>
            </div>
          </div>
          <div class="row pl-3" id="gender-row">
            <!-- THIS ROW HANDLES THE GENDER DROP DOWN -->
            <div class="col-12 col-md-3">
              <h4>Gender:</h4>
            </div>
            <div class="col-md-4 col-12">
              <select class="form-control" id="gender-select">
              </select>
            </div>
          </div>
          <div class="col-12 pt-3" id="retailers-column">

            <!-- THIS CARD IS FOR ONE OF THE RETAILERS -->
						<a data-toggle="collapse" id="retailer-name" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <div class="card mb-2">
              <div class="card-body">
                <div class="row">
                  <div class="col-10 order-1 col-md-6 align-self-center">
                    <span class="align-middle"><h5 class="mb-0">RETAILER NAME</h5></span>
                  </div>
                  <div class="col-md-2 order-2 d-none d-md-block text-center">
                    <img src="https://www.naylors.com/media/catalog/product/cache/300x300/w/h/whitaker_adults_horizon_helmet_black.jpg" class="mx-auto company-logo" alt="">
                  </div>
                  <div class="col-8 order-4 order-md-3 col-md-3 align-self-center">
                    <span class="align-middle text-right"><h4 class="mb-0">£15.99 - £24.99</h4></span>
                  </div>
									<div class="col-2 order-3 order-md-4 col-md-1 align-self-center">
										<span class="fa fa-lg fa-chevron-up rotate"></span>
									</div>
                </div>
              </div>
            </div>
						</a>

						<div class="collapse" id="collapseExample">
							<a href="www.google.com">
								<div class="col-12 col-md-11 offset-md-1 px-0">
									<div class="card mb-2">
			              <div class="card-body">
			                <div class="row">
			                  <div class="col-md-6 col-8 align-self-center">
			                    <span class="align-middle"><h5 class="mb-0">Individual Product 1</h5></span>
			                  </div>
			                  <div class="col-md-3 d-none d-md-block">
			                    <img src="https://www.naylors.com/media/catalog/product/cache/300x300/w/h/whitaker_adults_horizon_helmet_black.jpg" class="mx-auto company-logo" alt="">
			                  </div>
			                  <div class="col-4 col-md-3 align-self-center">
			                    <span class="align-middle text-right"><h4 class="mb-0">£15.99</h4></span>
			                  </div>
			                </div>
			              </div>
			            </div>
								</div>
							</a>

							<!-- OTHER CARDS GO IN HERE ALL WITHIN THE COLLAPSE DIV -->
						</div>



          </div>

          </div>
        </div>

        <div class="row pt-5 border">
          <div class="col-12">
            <canvas id="price-history" width="400" height="200"></canvas>
          </div>
        </div>

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
  <!-- Graphs -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
	<!-- Main -->
	<script src="../js/main.js"></script>

	<script src="../js/config.js" charset="utf-8"></script>

  <script>

      var product = "<?php echo $product ?>";
			var category = "<?php echo $category ?>";

  </script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

  <script src="../js/product_page.js" charset="utf-8"></script>

	</body>
</html>
