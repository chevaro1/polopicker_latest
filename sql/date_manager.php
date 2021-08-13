<?php

$today = date("Y-m-d");


function minusDays($date, $days){
  $date = date('Y-m-d', strtotime("-".$days." day"));
  return $date;
}
























 ?>
