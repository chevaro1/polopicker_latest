<?php

$data = $_POST["data"];
$page = $_POST["page"];

$limit = 32;

require_once 'config.php';#error_log($data);
#echo $page;
#echo "page is before";
#echo '<pre>'; print_r($data); echo '</pre>';
$page = $page  - 1;
#echo '<pre>'; print_r($page); echo '</pre>';
#echo $array["0"]["name"];
$arr = $data;
#echo $arr["age"];

$select = "SELECT * FROM products ";
$where = "WHERE TRUE";
$order = " ORDER BY price ";

if (array_key_exists('order', $arr)) {
  #echo "cat exists in this array";
  $order .= $arr["order"];
}

if (array_key_exists('cat', $arr)) {
  #echo "cat exists in this array";
  $where .= ' AND category = "' .$arr["cat"] .'"';
}

if (array_key_exists('brand', $arr)) {
  #echo "brand exists in this array";
  $name = str_replace("_", " ",$arr["brand"][0]);
  $where .= ' AND '.'('.'brand = "' .$name .'"';
  $len = count($arr["brand"]);
  #echo $len;
  for($i = 1; $i < $len; $i++) {
    $name = str_replace("_", " ",$arr["brand"][$i]);
    $where .= ' OR brand = "' .$name .'"';
  }
  $where .= ") ";
}
if (array_key_exists('vendor', $arr)) {
  #echo "vendor exists in this array";
  $where .= ' AND '.'('.'website = "' .$arr["vendor"][0] .'"';
  $len = count($arr["vendor"]);
  #echo $len;
  for($i = 1; $i < $len; $i++) {
    $where .= ' OR website = "' .$arr["vendor"][$i] .'"';
  }
  $where .= ") ";
}
if (array_key_exists('colour', $arr)) {
  #echo "colour exists in this array";
  $where .= ' AND '.'('.'colour LIKE "%' .$arr["colour"][0] .'%"';
  $len = count($arr["colour"]);
  #echo $len;
  for($i = 1; $i < $len; $i++) {
    $where .= ' OR colour LIKE "%' .$arr["colour"][$i] .'%"';
  }
  $where .= ") ";
}
if (array_key_exists('range', $arr)) {
  $name = str_replace("_", " ",$arr["range"][0]);
  $where .= ' AND '.'('.'product = "' .$name .'"';
  $len = count($arr["range"]);
  #echo $len;
  for($i = 1; $i < $len; $i++) {
    $name = str_replace("_", " ",$arr["range"][$i]);
    $where .= ' OR product = "' .$name .'"';
  }
  $where .= ") ";
}
if (array_key_exists('gender', $arr)) {
  $where .= ' AND '.'('.'gender = "' .$arr["gender"][0] .'"';
  $len = count($arr["gender"]);
  #echo $len;
  for($i = 1; $i < $len; $i++) {
    $where .= ' OR gender = "' .$arr["gender"][$i] .'"';
  }
  $where .= ") ";
}
if (array_key_exists('sprice', $arr)) {
  #echo "sprice exists in this array";
  $where .= ' AND price BETWEEN ' .$arr["sprice"] .' AND ' .$arr["fprice"];
}

$offset = $page * $limit; //skip rows from previous pages
#echo $page;
#echo $limit;
$limit = " LIMIT $offset,$limit";

$query = $select.$where.$order.$limit;

#echo $query;


$result = mysqli_query($link, $query);

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
echo $jsondata;
