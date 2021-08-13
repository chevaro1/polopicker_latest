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

# WE NEED TOTAL SEARCHES
# MOST POPULAR SEARCHES
# AVERAGE SEARCHES PER USER
# ALL WITHIN THE PROVIDED TIMEFRAME

$startDate = minusDays($today, $timeframe);

# TOTAL SEARCHES
$sql = "SELECT COUNT(id) as total FROM `search_data` WHERE DATE(timestamp) BETWEEN '$startDate' AND '$today'";
#echo $sql;

$result = mysqli_query($link, $sql);

$totalSearches = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
      array_push($totalSearches, $row);
    }
}

# MOST POPULAR SEARCHES
$sql = "SELECT search_term, COUNT(search_term) as total FROM `search_data` WHERE DATE(timestamp) BETWEEN '$startDate' AND '$today' GROUP BY search_term ORDER BY total DESC LIMIT 5 ";

$result = mysqli_query($link, $sql);

$popularSearches = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
      array_push($popularSearches, $row);
    }
}

# AVERAGE SEARCHES PER USER
$sql = "SELECT ROUND(COUNT(*) / COUNT(DISTINCT ip_address),2) as average FROM `search_data` WHERE DATE(timestamp) BETWEEN '$startDate' AND '$today'";

$result = mysqli_query($link, $sql);

$averageSearches = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
      array_push($averageSearches, $row);
    }
}

$arr = [
  "total" => $totalSearches[0]['total'],
  "popular" => $popularSearches,
  "average" => $averageSearches[0]['average']
];

$jsondata = json_encode($arr);
print $jsondata;
