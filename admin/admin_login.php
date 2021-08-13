<?php


#Check if the user is logged in, if so then take them through to the search page
#include '../blocks/logged-in.php';
session_start();
session_destroy();


if (! empty($_POST["login"])) {
#if (isset($_POST["login"])) {
#if ($_SERVER["REQUEST_METHOD"] == "POST") {
    error_log("in LOGIN IF STATEMENT");

    require_once "../sql/config.php";

    $username = $_POST["member_name"];
    $password = $_POST["member_password"];

    $sql = "SELECT * FROM `users` WHERE username = '$username'";
    error_log($sql);

    $result = mysqli_query($link, $sql);

    $arr = [];

    if ($result) {
      if (mysqli_num_rows($result) > 0){
          $row = mysqli_fetch_assoc($result);
          if(password_verify($password, $row['password'])){
              if ($row['priv'] == "admin") {
                error_log("Requirements met, moving to admin page");
                session_start();
                $_SESSION['loggedin'] = true;
                $_SESSION['username'] = $username;
                header('Location: admin_home.php');
              } else {
                $message = "You do not have appropriate privileges to access the admin pages.";
              }
          } else {
            $message = "Username does not match password, please try again";
          }
      } else {
        $message = "Username not found, please try again";
      }
    } else {
      $message = "Username not found, please try again";
    }

}
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Choice Admin Login</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body class="bg-gradient-primary">

    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        <div ><?php if(isset($message)) { echo $message; } ?></div>
                                    </div>
                                    <form class="user" action="" method="post">
                                        <div class="form-group">
                                            <!--<input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..."> -->
                                            <input name="member_name" type="text"
                                                value=""
                                                class="form-control form-control-user"
                                                   id="exampleInputEmail" aria-describedby="emailHelp"
                                                   placeholder="Enter Username ...">
                                        </div>
                                        <div class="form-group">
                                          <!--   <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"> -->
                                            <input name="member_password" type="password"
                                                value=""
                                                class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password">
                                        </div>

                                        <!-- <a href="index.html" class="btn btn-primary btn-user btn-block">
                                            Login
                                        </a> -->
                                        <input type="submit" name="login" value="Login"
                                            class="btn btn-primary btn-user btn-block"></span>
                                        <hr>
                                        <!-- <div>
                                            <input type="submit" name="login" value="Login"
                                                class="form-submit-button"></span>
                                        </div> -->

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="../js/sb-admin-2.min.js"></script>

</body>

</html>
