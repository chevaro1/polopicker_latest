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
                <div class="col-4">
                  <h3>Category Printout</h3>
                  <p>Please select a category and all products within that category will be printed out</p>
                </div>
                <div class="col-5 my-auto">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">Category</label>
                    </div>
                    <select class="custom-select" id="categories">
                      
                    </select>
                  </div>
                </div>
                <div class="col-3">
                  <p class="font-weight-bold">Take care Thousands of images and products may be laoded simultaneously!</p>
                </div>
              </div>
              <hr>
              <div class="row" id="products">

              </div>
            </div>
          </main>
        </div>
      </div>

      <?php include('../blocks/admin_footer_scripts.php') ?>
			<script src="../js/category_printout.js"></script>

    </body>
  </html>
