<?php


require_once '../sql/config.php';

$sql = "SELECT * FROM `categories` WHERE page = 'pony' ORDER BY cat_name ASC";

$result = mysqli_query($link, $sql);

$arr = [];

if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        array_push($arr, $row);
    }
}

for ($x = 0; $x < count($arr); $x++) {
  echo '<div class="col-sm-4 col-6 text-center">';
  echo '<div class="featured">';
  echo '<div class="featured-img featured-img-2" style="background-image: url(' . $arr[$x]['image_url'] . ');">';
  echo '<h2 style="background-color: #88c8bc; border-radius: 25px">' . $arr[$x]['cat_name'] . '</h2>';
  echo '<p><a href="' . $arr[$x]['link_url'] . '" class="btn btn-primary btn-lg">Shop now</a></p>';
  echo '</div>';
  echo '</div>';
  echo '</div>';
}






 ?>
