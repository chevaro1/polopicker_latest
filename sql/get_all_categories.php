<?php

require_once 'config.php';

$sql = "SELECT category, COUNT(id) AS total FROM `products` GROUP BY category ORDER BY category ASC";

$result = mysqli_query($link, $sql);

$arr = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        array_push($arr, $row);
    }
}

if (!$result) {
  $failarr = ["status" => "fail",
              "message" => mysqli_error($link)];

  $jsondata = json_encode($failarr);
  echo $jsondata;
} else {
  $jsondata = json_encode($arr);
  echo $jsondata;
}













?>
