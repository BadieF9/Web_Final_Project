<?php

use CRUD\Controller\PersonController;

include ("loader.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header("Accept: application/json");
$controller = new PersonController();
$controller->switcher($_SERVER['REQUEST_METHOD'],$_REQUEST);