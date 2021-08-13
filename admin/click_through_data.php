<?php
include '../blocks/logged-in.php';
 ?>

<!DOCTYPE HTML>
<html>
	<head>
	<title>Polo Picker Home</title>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <?php include('../blocks/head.php') ?>
   <link rel="stylesheet" href="../css/dashboard.css">
	</head>
	<body>
    <?php include('../blocks/admin_nav.php') ?>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="container">

              <div class="row">
                <div class="col-8">
                  <h3>Click Through Data</h3>
                  <p class="font-weight-bold">This page shows statistics of all products that have been clicked on to take users to their website product pages</p>
                </div>

                <div class="col-3">
                </div>
              </div>
              <hr>
              <div class="row mb-5">
                <div class="col-6 border">
                  <div class="row">
                    <div class="col-4 pt-2 pb-0">
                      <h4>Product Data</h4>
                    </div>
                    <div class="col-8">
                      <div class="input-group pt-1">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01">Timeframe</label>
                        </div>
                        <select class="custom-select" id="product-timeframe">
                          <option value="1" selected>1 Day</option>
                          <option value="5">5 Days</option>
                          <option value="7">7 Days</option>
                          <option value="14">14 Days</option>
                          <option value="28">28 Days</option>
                          <option value="100">100 Days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr class="mt-0">
                  <div class="row mb-2">
                    <div class="col-4">
                      <div class="card bg-secondary text-white">
                        <div class="card-header">
                          Total Products
                        </div>
                        <div class="card-body text-center">
                          <h3 class="card-text" id="total-products"></h3>
                        </div>
                      </div>
                      <div class="card bg-secondary text-white mt-3">
                        <div class="card-header">
                          Average Products Per User
                        </div>
                        <div class="card-body">
                          <h3 class="card-text" id="average-products"></h3>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="card bg-secondary text-white">
                        <div class="card-header">
                          Most Popular Products
                        </div>
                        <div class="card-body">
                          <table class="table">
                            <thead>
                              <tr>
                                <th class="col-6">Term</th>
                                <th class="col-3">Occ.</th>
                              </tr>
                            </thead>
                            <tbody id="popular-products-table">

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 border">
                  <div class="row">
                    <div class="col-12">
                      <h4>Recent Product Clicks</h4>
                      <hr>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Time</th>
                          </tr>
                        </thead>
                        <tbody id="recent-products">

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </main>
        </div>
      </div>

      <?php include('../blocks/admin_footer_scripts.php') ?>
			<script src="../js/click_through.js"></script>

    </body>
  </html>
