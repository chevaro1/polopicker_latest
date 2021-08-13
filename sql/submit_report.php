<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

session_start();

$reportId = $_POST["reportId"];
$reason = $_POST["reason"];

$ip = $_SERVER['REMOTE_ADDR'];

require_once 'config.php';

$sql = "INSERT INTO reports (`response`, `ip_address`, `img`, `link`, `name`, `website`, `price`, `category`)
 SELECT '$reason', '$ip', `img`, `link`, `name`, `website`, `price`, `category` FROM `products` WHERE id = '$reportId'";

#echo $sql;
$result = mysqli_query($link, $sql);


if (!$result) {
  $failarr = ["status" => "fail",
              "message" => "$sql"];

  $jsondata = json_encode($failarr);
  echo $jsondata;
} else {
  $successarr = ["status" => "success",
                "message" => "Report sent"];
  $jsondata = json_encode($successarr);
  echo $jsondata;
}
