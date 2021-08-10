<?php

require_once 'config.php';

$name = $_POST['name'];
$page = $_POST['page'];
$image = $_POST['image'];
$linkurl = $_POST['link'];

$sql = "INSERT INTO `categories` (`cat_name`, `image_url`, `link_url`, `page`) VALUES ('$name','$linkurl','$image','$page')";
#echo $sql;

$result = mysqli_query($link, $sql);


if ($result) {
  $successarr = ["status" => "success"];

  $jsondata = json_encode($successarr);
  echo $jsondata;
} else {
  $failarr = ["status" => "fail",
              "message" => mysqli_error($link),
              "sql" => "$sql"];

  $jsondata = json_encode($failarr);
  echo $jsondata;
}













?>
