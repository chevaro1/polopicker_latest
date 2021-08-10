<?php

#start the session
session_start();

#Check if the user is logged in, if not then redirect him to the login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}

$term = trim($_POST["term"]);
$term = str_replace(' ', '', $term);


session_start();

$_SESSION["search_term"] = $term;

