<?php
$ip = $_SERVER['REMOTE_ADDR'];
$refer = ltrim($_SERVER['HTTP_REFERER'], "/.");
$page = basename($_SERVER['PHP_SELF']);

require_once 'config.php';

$sql = "INSERT INTO `page_visits`(`page`, `prev_page`, `address`) VALUES ('$page', '$refer', '$ip')";
error_log($sql);
$result = mysqli_query($link, $sql);

 ?>
