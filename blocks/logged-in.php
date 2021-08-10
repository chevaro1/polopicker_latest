<?php
session_start();
#Check if the user is logged in, if not then redirect him to the login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
   header("location: admin_login.php");
    exit;
}
?>
