<?php

$product = $_GET["prod"];
if (isset($_GET["type"])) {
  $type = $_GET["type"];
};
$js = '<script src="../js/product0.js"></script>';

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
						<p class="bread"><span><a href="../home/home.php">Home</a></span> / <span>product</span></p>
					</div>
				</div>
			</div>
		</div>

				                <?php #include '../blocks/page_banner.php' ?>


               <!-- THIS IS THE PRODUCT SECTION -->
        <div class="container mx-0">
          <div class="row">
            <div class="col-6">
              <h5 class="pl-3" id="results">Results: </h5>
            </div>
            <div class="col-6 d-block d-md-none">
              <button class="openbtn" onclick="openNav()">&#9776; Open Sidebar</button>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-xl-3 filter-options border pl-2 pr-0" id="filter-options">
              <div class="my-0 p-0" id="filter-options-head">
                <div class="row">
                  <div class="col-3">
                    <h5 class="text-right mt-2 mb-0">Reset</h5>
                  </div>
                  <div class="col-6">
                    <h3 class="text-center align-middle">Filter</h3>
                  </div>
                  <div class="col-3 ">
                    <span class="fa fa-times fa-2x align-middle pt-2 d-block d-md-none" id="close-mobile-filter"></span>
                  </div>
                </div>
                <hr class="my-0">
              </div>
              <div class="d-block d-md-none" style="margin-top: 51px;">

              </div>

              <a data-toggle="collapse" id="product-range" data-target="#product-range-collapse" aria-expanded="false" aria-controls="product-range-collapse">
                <div class="row filter-option mx-0 mt-2">
                  <div class="col-10 py-2">
                    <span><strong>Product Range</strong></span>
                  </div>
                  <div class="col-2">
                    <span class="fa fa-chevron-right align-middle rotate"></span>
                  </div>
                </div>
              </a>

              <div class="collapse px-3" id="product-range-collapse">
                <div class="row">
                  <div class="col-12 pl-3">
                    <div class="form-check pl-4 filter-item">
                      <input class="form-check-input" type="checkbox" value="" id="snaffle">
                      <label class="form-check-label" for="snaffle">
                        snaffle <span>(41)</span>
                      </label>
                    </div>
                    <div class="form-check pl-4">
                      <input class="form-check-input" type="checkbox" value="" id="waterford">
                      <label class="form-check-label" for="waterford">
                        waterford
                      </label>
                    </div>
                    <div class="form-check pl-4">
                      <input class="form-check-input" type="checkbox" value="" id="eggbut">
                      <label class="form-check-label" for="eggbut">
                        eggbut
                      </label>
                    </div>
                    <div class="form-check pl-4">
                      <input class="form-check-input" type="checkbox" value="" id="gag">
                      <label class="form-check-label" for="gag">
                        gag
                      </label>
                    </div>
                    <div class="form-check pl-4">
                      <input class="form-check-input" type="checkbox" value="" id="pelham">
                      <label class="form-check-label" for="pelham">
                        pelham
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <a data-toggle="collapse" id="price-range" data-target="#price-range-collapse" aria-expanded="false" aria-controls="price-range-collapse">
                <div class="row filter-option mx-0 mt-2">
                  <div class="col-10 py-2">
                    <span><strong>Price</strong></span>
                  </div>
                  <div class="col-2">
                    <span class="fa fa-chevron-right rotate"></span>
                  </div>
                </div>
              </a>

              <div class="collapse px-3" id="price-range-collapse">
                <div class="row">
                  <div class="col-11">
                    <select class="custom-select">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>

              <a href="#">
                <div class="row filter-option mx-0 mt-2">
                  <div class="col-10 py-2">
                    <span><strong>Retailer</strong></span>
                  </div>
                  <div class="col-2">
                    <span class="fa fa-chevron-right py-auto rotate"></span>
                  </div>
                </div>
              </a>

            </div>
            <div class="col-lg-9 col-xl-9">
              <div class="row row-pb-md" id="id01">
              </div>

            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="block-27" id="pageno">
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
	<!-- Main -->
	<script src="../js/main.js"></script>
  <script type="text/javascript">

      var product = "<?php echo $product ?>";
      var pagename = "balls.php";
      console.log("product name = " + product);
  </script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <?php #echo $js ?>
  <script src="../js/new_product.js" charset="utf-8"></script>



	</body>
</html>
