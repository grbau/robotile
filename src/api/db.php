<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "robotile";
$conn = new mysqli($servername, $username, $password, $dbname);
?>

