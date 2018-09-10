<?php
include '../core/db.php';
class category extends db{
    public function __construct(){
        $stmt = $this->pdo->query('select * from title');
        $rows = $stmt->fetchAll();
        include ('');
    }
}