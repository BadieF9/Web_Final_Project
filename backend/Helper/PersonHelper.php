<?php

namespace CRUD\Helper;

use PDO;
use PDOException;

class PersonHelper
{

    private PDO $db;

    public function __construct()
    {
        $database = new DBConnector();
        $this->db = $database->getDB();
    }

    public function insert($req)
    {
        try {
            $sql = "INSERT INTO movies(name, description, year, img_url) VALUES(:name, :descrioption, :year, :img_url)";
            
            $statement = $this->db->prepare($sql);
            
            $statement->execute([
                    ':name' => $req['title'],
                    ':descrioption' => $req['description'],
                    ':year' => (int) $req['year'],
                    ':img_url' => $req['image'],
                ]);
                http_response_code(201);
                echo "Person created successfully";
        } catch(PDOException $exception) {
            error_log("Error: ". $exception);
        }

    }

    public function search() 
    {
        try 
        {
            error_log($_GET['search']);
            return (($this->db->query("SELECT * FROM movies
			WHERE (`name` LIKE '%".$_GET['search']."%') OR (`description` LIKE '%".$_GET['search']."%')"))->fetchAll());
        } catch (PDOException $exception)
        {
            throw new PDOException($exception->getMessage());
        }
    }

    public function fetch(int $id)
    {
        try 
        {
            return (($this->db->query("SELECT * FROM movies where id = $id"))->fetch());
        } catch (PDOException $exception)
        {
            throw new PDOException($exception->getMessage());
        }
    }

    public function fetchAll()
    {
        try 
        {
            return (($this->db->query("SELECT * FROM movies"))->fetchAll());
        } catch (PDOException $exception)
        {
            throw new PDOException($exception->getMessage());
        }
    }


    public function delete($req)
    {
        try {
            $statement = $this->db->prepare("DELETE FROM person WHERE id=:id");
            $data = json_decode(file_get_contents("php://input"));
            $statement->execute([
                ':id' => $data->id
            ]);
            echo "user with id: ". $data->id ." deleted successfully.";
          } catch(PDOException $e) {
            throw new PDOException($e->getMessage());
          }
    }

}