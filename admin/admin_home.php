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
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                  <button class="btn btn-sm btn-outline-secondary">Share</button>
                  <button class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
							<div class="col-md-12">
                <div class="row">
                  <div class="card p-4 m-3 bg-primary border-dark text-white">
                    <h4 class="card-title text-white">Total Products:</h4>
                    <div class="card-body text-center"><h1 class="text-white" id="products"></h1></div>
                  </div>
                  <div class="card p-4 m-3 bg-success border-dark text-white">
                    <h4 class="card-title text-white">Live Sites:</h4>
                    <div class="card-body text-center"><h1 class="text-white" id="sites"></h1></div>
                  </div>
                  <div class="card p-4 m-3 bg-warning border-dark text-white">
                    <h4 class="card-title text-white">Categories:</h4>
                    <div class="card-body text-center"><h1 class="text-white" id="cats"></h1></div>
                  </div>
                  <div class="card p-4 my-3 ml-3 bg-danger border-dark text-white">
                    <h4 class="card-title text-white">Erros Last Run:</h4>
                    <div class="card-body text-center"><h1 class="text-white" id="errors"></h1></div>
                  </div>
                  <div class="card p-4 my-3 ml-3 bg-danger border-dark text-white">
                    <h4 class="card-title text-white">Uncategorized Products:</h4>
                    <div class="card-body text-center"><h1 class="text-white" id="unknown"></h1></div>
                  </div>
                </div>

							</div>
            </div>
          </main>
        </div>
      </div>

      <?php include('../blocks/admin_footer_scripts.php') ?>
			<script src="../js/highlights.js"></script>
    </body>
  </html>
