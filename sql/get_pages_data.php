<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

session_start();

$timeframe = $_POST['timeframe'];

require_once 'config.php';
require_once 'date_manager.php';

# WE NEED TOTAL PRODUCTS CLICKED
# MOST POPULAR PRODUCTS
# AVERAGE PRODUCT CLICKS PER USER
# ALL WITHIN THE PROVIDED TIMEFRAME

$startDate = minusDays($today, $timeframe);

# TOTAL PRODUCTS
$sql = "SELECT COUNT(id) as total FROM `page_visits` WHERE DATE(timestamp) BETWEEN '$startDate' AND '$today'";
#echo $sql;

$result = mysqli_query($link, $sql);

$totalProducts = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
      array_push($totalProducts, $row);
    }
}

# MOST POPULAR PRODUCTS
$sql = "SELECT page, COUNT(page) as total FROM `page_visits` WHERE DATE(timestamp) BETWEEN '$startDate' AND '$today' GROUP BY page ORDER BY total DESC LIMIT 5 ";
#echo $sql;
$result = mysqli_query($link, $sql);

$popularProducts = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
      array_push($popularProducts, $row);
    }
}

# AVERAGE PRODUCTS PER USER
$sql = "SELECT ROUND(COUNT(*) / COUNT(DISTINCT address),2) as average FROM `page_visits` WHERE DATE(timestamp) BETWEEN '$startDate' AND '$today'";

$result = mysqli_query($link, $sql);

$averageProducts = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
      array_push($averageProducts, $row);
    }
}

$arr = [
  "total" => $totalProducts[0]['total'],
  "popular" => $popularProducts,
  "average" => $averageProducts[0]['average']
];

$jsondata = json_encode($arr);
print $jsondata;
