<?php
require_once '../functions/db.php';

// A class that manages the addition and removal of names and the construction of the tree
class NameTree
{
    private $db;  // Database interface instance

    // The constructor takes an object that implements DatabaseInterface
    public function __construct(DatabaseInterface $db)
    {
        $this->db = $db;
    }

    // Method to get all nodes of a tree
    public function getTree() 
    {
        $query = "SELECT * FROM `".DB_TABLE_PREFIX."tree`";
        return $this->db->fetchAll($query);
    }

    // Method for adding a new name to the tree
    // $name is the name of the node, $parentId is the ID of the parent node (if any)
    public function addName(string $name, ?int $parentId = null)
    {
        // SQL Query to Insert New Name into Table
        $query = "INSERT INTO `".DB_TABLE_PREFIX."tree` (name, parent_id) VALUES (:name, :parent_id)";
        // Execute the request
        $newNodeId = $this->db->query($query, ['name' => $name, 'parent_id' => $parentId]);  
        // Return the record id to add child elements to it
        if ($newNodeId !== null) {
            return $newNodeId;
        } else {
            return null;
        }
    }

    // Method to delete a branch and all its children
    public function deleteBranch(int $id)
    {
        // First we get all children of the current node
        $children = $this->getChildren($id);

        // Recursively remove all children
        foreach ($children as $child) {
            $this->deleteBranch($child['id']);  
        }

        // We delete the node itself after all its children have been deleted.
        $query = "DELETE FROM `".DB_TABLE_PREFIX."tree` WHERE id = :id";
        $this->db->query($query, ['id' => $id]);
    }

    // Method to get all children of a given node by parent ID
    public function getChildren(int $parentId = null): array
    {
        if ($parentId === null) {
            // If parentId is null, get root nodes (without parent)
            $query = "SELECT * FROM `".DB_TABLE_PREFIX."tree` WHERE parent_id IS NULL";
            return $this->db->fetchAll($query);
        } else {
            // Otherwise, we get nodes with the specified parent identifier.
            $query = "SELECT * FROM `".DB_TABLE_PREFIX."tree` WHERE parent_id = :parent_id";
            return $this->db->fetchAll($query, ['parent_id' => $parentId]);
        }
    }
}



?>