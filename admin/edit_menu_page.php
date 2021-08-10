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

    <div class="modal" tabindex="-1" role="dialog" id="add-cat-modal">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Add New Category</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Name</span>
                  </div>
                  <input type="text" id="add-page-name" class="form-control" placeholder="Category Name" aria-label="Username" aria-describedby="basic-addon1">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Page</label>
                  </div>
                  <select class="custom-select" id="add-page-select">
                    <option value="" disabled selected>Choose ...</option>
                    <option value="player">Player</option>
                    <option value="pony">Pony</option>
                  </select>
                </div>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <p>Image upload will come later</p>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Image url</span>
                  </div>
                  <input type="text" id="add-page-image" class="form-control" placeholder="Full url" aria-label="Username" aria-describedby="basic-addon1">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Link url</span>
                  </div>
                  <input type="text" id="add-page-link" class="form-control" placeholder="Full url" aria-label="Username" aria-describedby="basic-addon1">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" id="add-page-save" class="btn btn-success">Save</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <h3>Menu Page Editor</h3>
                  <p>On this page you can add, remove or edit what comes up on the menu pages of the website.</p>
                </div>
                <div class="col-5 my-auto">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">Page</label>
                    </div>
                    <select class="custom-select" id="pageselect">
                      <option value="" disabled selected>Choose ...</option>
                      <option value="player">Player</option>
                      <option value="pony">Pony</option>
                    </select>
                  </div>
                </div>
                <div class="col-3">
                  <div class="pt-4 pl-5">
                    <button type="button" id="add-cat" class="btn btn-success btn-lg font-weight-bold mx-auto" name="button">Add +</button>
                  </div>
                </div>
              </div>
              <hr>
              <div class="row" id="page-contents">
                <div class="col-12">
  								<table class="table table-striped">
  								  <thead class="thead-dark">
  								    <tr>
  								      <th scope="col">Category</th>
  								      <th scope="col">Image</th>
  								      <th scope="col">Link</th>
  								      <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
  								    </tr>
  								  </thead>
  								  <tbody id="table">

  								  </tbody>
  								</table>
  							</div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <?php include('../blocks/admin_footer_scripts.php') ?>
			<script src="../js/edit_menu_page.js"></script>

    </body>
  </html>
