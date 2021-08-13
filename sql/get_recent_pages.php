<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

session_start();


require_once 'config.php';
require_once 'date_manager.php';

# GET THE 15 MOST RECENT SEARCHES


# TOTAL SEARCHES
$sql = "SELECT timestamp, page FROM `page_visits` ORDER BY timestamp DESC LIMIT 15";
#echo $sql;

$result = mysqli_query($link, $sql);

$arr = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
      array_push($arr, $row);
    }
}


$jsondata = json_encode($arr);
print $jsondata;
