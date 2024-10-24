<?php
// An interface that defines how interaction with the database will occur.
interface DatabaseInterface
{
    // Method for executing SQL queries (for example, INSERT, UPDATE)
    public function query(string $query, array $params = []);
    
    // Method for executing SELECT queries with results returned as an array
    public function fetchAll(string $query, array $params = []);
}


// A class that implements interaction with a MySQL database via PDO.
class MySQLDatabase implements DatabaseInterface
{
    private $pdo;  // Экземпляр PDO для работы с базой данных

    // The constructor takes a PDO and initializes it
    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    // Method for executing SQL queries
    public function query(string $query, array $params = [])
    {
        $stmt = $this->pdo->prepare($query);  // Preparing a request
        $stmt->execute($params);              // We execute the request with the passed parameters
        
        // If this is an INSERT query, we get the ID of the added record
        if (stripos($query, 'INSERT') === 0) {
            return $this->pdo->lastInsertId(); // Return the ID of the last inserted record
        }

        return null; // For other requests we return null
    }

    // Method for getting data from the database as an array
    public function fetchAll(string $query, array $params = [])
    {
        $stmt = $this->pdo->prepare($query);  // Preparing a request
        $stmt->execute($params);              // We execute a request with parameters
        return $stmt->fetchAll(PDO::FETCH_ASSOC);  // Return all data as an associative array
    }
}

?>