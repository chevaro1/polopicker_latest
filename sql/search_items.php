<?php

$prod = $_GET["prod"];


require_once 'config.php';

$sql = "SELECT * FROM products WHERE name LIKE '%$prod%' OR brand LIKE '%$prod%' OR category LIKE '%$prod%' "
        . "OR product LIKE '%$prod%' OR gender LIKE '%$prod%' OR colour LIKE '%$prod%' OR price LIKE '%$prod%' "
        . "OR website LIKE '%$prod%' ORDER BY CAST(price as float) ASC";


$result = mysqli_query($link, $sql);

$arr = [];
$count = 0;


if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        array_push($arr, $row); 
        $count += 1;
        
    }
}


$jsondata = json_encode($arr);
echo $jsondata;
