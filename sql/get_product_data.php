<?php

# WHAT DATA WE WANT:
# PRODUCT IMAGE
# RATING
# COLOUR ARRAY
# GENDER ARRAY
# BRAND
# ARRAY OF RETAILERS
# IN EACH RETAILER:
#  -RETAILER NAME
#  -RETAILER LOGO
#  -RETAILERS PRICE


$product = $_POST["product"];
$category = $_POST["category"];

require_once 'config.php';

$select = "SELECT * FROM products ";
$where = "WHERE product = '$product' AND category = '$category'";
$order = " ORDER BY price ASC";


$query = $select.$where.$order;
#error_log($query);

$result = mysqli_query($link, $query);

$prodArr = [];
$colourArr = [];
$genderArr = [];
$brandArr = [];
$imgArray = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
      if ($row['colour'] != 'unknown') {
        $res = explode(",", $row['colour']);
        #echo $res[0];
        $count1 = 0;

        while ($count1 < count($res)){
            if ($res[$count1] === " "){
                break;
            }
            array_push($colourArr, trim($res[$count1]));
            $count1 += 1;
        }
      }
      if ($row['gender'] != 'unknown') {
        array_push($genderArr, $row['gender']);
      }
      if ($row['brand'] != 'unknown') {
        array_push($brandArr, $row['brand']);
      }
      array_push($imgArray, $row['img']);
      array_push($prodArr, $row);
    }


  $colourArr = array_values(array_unique($colourArr));
  $genderArr = array_values(array_unique($genderArr));
  $imgArray = array_values(array_unique($imgArray));

  # GETS THE BRAND NAME THAT APPEARS THE MOST AND SUMBITS THAT AS THE BRAND
  $values = array_count_values($brandArr);
  arsort($values);
  $popular = array_slice(array_keys($values), 0, 5, true);
  $brandArr = $popular[0];

}

$rating = 4;

$arr = [
  "image" => $imgArray,
  "colours" => $colourArr,
  "genders" => $genderArr,
  "brand" => $brandArr,
  "rating" => $rating,
  "products" => $prodArr
];

$jsondata = json_encode($arr);
echo $jsondata;






















 ?>
