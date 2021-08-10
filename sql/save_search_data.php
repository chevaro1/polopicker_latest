<?php

$term = $_POST["term"];
$ip = $_SERVER['REMOTE_ADDR'];

require_once 'config.php';

$sql = "INSERT INTO `search_data`(`search_term`, `ip_address`) VALUES ('$term', '$ip')";

$result = mysqli_query($link, $sql);
