<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$id = $_GET['id'];
$state = $_GET['state'];
#echo $cat;
#echo $fil;
#echo $category;

require_once 'config.php';

$sql = "UPDATE `websites` SET `state`='$state' WHERE id='$id'";


mysqli_query($link, $sql);
