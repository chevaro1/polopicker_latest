<?php

$id = $_POST['id'];

require_once 'config.php';

$sql = "DELETE FROM `categories` WHERE id = '$id'";

mysqli_query($link, $sql);

?>
