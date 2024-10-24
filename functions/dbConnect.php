<?php

// Connect the file with the database settings
require_once '../config.php';

try {
    // Forming DSN (Data Source Name)
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    
    // Create a PDO object to connect to the database
    $pdo = new PDO($dsn, DB_USER, DB_PASS);
    
    // Set the error mode for PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Returning a PDO object
    return $pdo;

} catch (PDOException $e) {
    // Handling database connection error
    die('Database connection error: ' . $e->getMessage());
}

?>