<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

#echo $cat;
#echo $fil;
#echo $category;

require_once 'config.php';

$sql = "SELECT COUNT(name) as total FROM `products` ";

$result = mysqli_query($link, $sql);

$arr = [];
$count = 0;

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        array_push($arr, $row);
        $count += 1;

    }
}
#echo $count;

$jsondata = json_encode($arr);
print $jsondata;
