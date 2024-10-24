<?php
// We include a file with classes and functions
require_once '../functions/functions.php';

// Connecting a file with a database connection via PDO
$pdo = require_once '../functions/dbConnect.php';
$db = new MySQLDatabase($pdo);  // Создаем объект для работы с базой данных

// Create an object to manage the tree of names
$nameTree = new NameTree($db);

// Getting data from a POST request
$action = '';
if (isset($_POST['action'])) {
    $action = $_POST['action'];
    $name = $_POST['name'] ?? '';
}

if ($action === 'add') {
    // Adding a new node
    $parentId = $_POST['parentId'] === 'null' || $_POST['parentId'] === '' ? null : (int)$_POST['parentId']; 
    $nodeId = $nameTree->addName($name, $parentId);
    echo json_encode(['success' => true, 'nodeId' => $nodeId, 'message' => 'Node added successfully']);
} elseif ($action === 'delete') {
    // Delete the branch and all its children
    $branchId = $_POST['id'];
    $nameTree->deleteBranch($branchId);
    echo json_encode(['success' => true, 'message' => 'Node deleted successfully']);
} else {
    // we get all the tree nodes
    $treeData = $nameTree->getTree();

    // Return the result in JSON format
    header('Content-Type: application/json');
    echo json_encode($treeData);
}
?>