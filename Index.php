<?php
require "MySQL.php";
$index = "http://localhost:8080/Index.php";
$sql = new MySQL($index);


$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'PUT':
    $data = getData();
    $sql->put($data);
    echo json_encode($data);
    break;

  case 'POST':
    $start = $_POST['start'];
    $length = $_POST['length'];

    header('Content-Type: application/hal+json;charset=UTF-8');
    $table=$sql->get($start,$length);
    $table['recordsTotal'] = $sql->count();
    
    echo json_encode($table, JSON_UNESCAPED_SLASHES);
    break;

  case 'GET':
    $start = $_POST['start'];
    $length = $_POST['length'];
    $table = array();

    header('Content-Type: application/hal+json;charset=UTF-8');
    $table=$sql->get($start,$length);
    $table['recordsTotal'] = $sql->count();

    echo json_encode($table, JSON_UNESCAPED_SLASHES);
    break;

  case 'DELETE':
    header("HTTP/1.1 200 OK");
    $id = $_GET['id'];
    $sql->delete($id);
    echo json_encode(true);
    break;
}

function getData(){
  $data = file_get_contents('php://input');
  return json_decode($data);
}

?>
