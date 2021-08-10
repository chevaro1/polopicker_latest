<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$cat = $_POST['cat'];

require_once 'config.php';

$sql = "SELECT brand AS name FROM products WHERE category = '$cat' group by brand";

$result = mysqli_query($link, $sql);

$arr = [];
$count = 0;

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        if ($row["name"] === "unknown"){
            #echo "unknown found". $count;
            $row["name"] = "other";
        }
        array_push($arr, $row);
        $count += 1;

    }
}
#echo $count;

$jsondata = json_encode($arr);
echo $jsondata;
