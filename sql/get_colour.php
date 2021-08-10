<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$cat = $_GET['cat'];
#$cat = "helmet";

require_once 'config.php';

$sql = "SELECT colour AS name FROM products WHERE category = '$cat'";

$result = mysqli_query($link, $sql);

$arr = [];
$count = 0;




if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        if ($row["name"] === "unknown"){
            #echo "unknown found". $count;
            $row["name"] = "other";
        }
        $name = $row["name"];
        #echo $name;
        $res = explode(",", $name);
        #echo $res[0];
        $count1 = 0;
        
        while ($count1 < count($res)){
            if ($res[$count1] === " "){
                break;
            }
            #$val=array("name"=>trim($res[$count1]));
            
            array_push($arr, trim($res[$count1])); 
            
            $count1 += 1;
        }
        
        #array_push($arr, $row); 
        $count += 1;
        
    }
}
#echo $count;
#$jsondata = json_encode($arr);
#echo $jsondata;

$answer = array_unique($arr);

$answer = array_values($answer);

#echo $answer[6];

$fin = [];

for ($i = 0; $i < count($answer); $i += 1) {
    $val=array("name"=>$answer[$i]);
    array_push($fin, $val); 
}

/*

$colours = ["red", "yellow", "pink", "green", "blue", "navy", "brown", "black", "white", "grey", "orange", "turquiose", "aqua", "camoflauge", "gold"];

while ($count < count($colours)) {
    $array = ["name" => ""];
    #echo $colours[$count];
    $row["name"] = $colours[$count];
    array_push($arr, $row);
    $count += 1;
}

*/

#echo "JSON FINAL";


$jsondata = json_encode($fin);
#$jsondata = json_encode($arr);
echo $jsondata;