<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require_once 'config.php';

$sql = "SELECT title, id FROM report_options WHERE status = '0' ORDER BY title ASC";

$result = mysqli_query($link, $sql);

$arr = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        array_push($arr, $row);
    }
}
#echo $count;

$jsondata = json_encode($arr);
echo $jsondata;
