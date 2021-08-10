<?php

require_once 'config.php';
error_log("inside forward");
if (isset($_GET["site"]) && isset($_GET["id"])) {
  $site = $_GET["site"];
  $id = $_GET["id"];
  $ip = $_SERVER['REMOTE_ADDR'];
  error_log("inside forward if stmt");

  $sql = "SELECT * FROM products WHERE id = '$id'";

  $result = mysqli_query($link, $sql);
  $arr = [];
  if (mysqli_num_rows($result) > 0){
      while($row = mysqli_fetch_assoc($result)){
          array_push($arr, $row);
      }
  }
  $website= $arr[0]["website"];
  $weblink= $arr[0]["link"];
  $name= $arr[0]["name"];
  $price= $arr[0]["price"];

  $sql = "INSERT INTO `forward_data`(`website`, `link`, `name`, `price`, `address`) VALUES ('$website', '$weblink', '$name', '$price', '$ip')";
  error_log($sql);

  $result = mysqli_query($link, $sql);

  header('Location: ' .$site);
} else {
  header('Location: ' . '../../home/home.php');
}
