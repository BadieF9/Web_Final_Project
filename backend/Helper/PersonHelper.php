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
        } catch (PDOException $exception) {
            error_log("Error: " . $exception);
        }
    }

    public function search()
    {
        try {
            return (($this->db->query("SELECT * FROM movies
			WHERE (`name` LIKE '%" . $_GET['search'] . "%') OR (`description` LIKE '%" . $_GET['search'] . "%') OR (`year` LIKE '%" . $_GET['search'] . "%')"))->fetchAll());
        } catch (PDOException $exception) {
            throw new PDOException($exception->getMessage());
        }
    }

    public function fetch(int $id)
    {
        try {
            return (($this->db->query("SELECT * FROM movies where id = $id"))->fetch());
        } catch (PDOException $exception) {
            throw new PDOException($exception->getMessage());
        }
    }

    public function fetchAll()
    {
        try {
            return (($this->db->query("SELECT * FROM movies"))->fetchAll());
        } catch (PDOException $exception) {
            throw new PDOException($exception->getMessage());
        }
    }

    public function update($req)
    {

        try {
            $statement = $this->db->prepare("UPDATE movies SET name=:name, description=:description, year=:year, img_url=:img_url WHERE id=:id");
            $data = json_decode(file_get_contents("php://input"));
            $statement->execute([
                ':id' => $data->id,
                ':description' => $data->description,
                ':year' => $data->year,
                ':name' => $data->name,
                ':img_url' => $data->img_url
            ]);
            http_response_code(200);
            echo "movie with id: " . $data->id . " updated successfully.";
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage());
        }
    }

    public function delete($req)
    {
        try {
            $statement = $this->db->prepare("DELETE FROM movies WHERE id=:id");
            error_log(json_encode($req['id']));
            $statement->execute([
                ':id' => $req['id']
            ]);
            http_response_code(204);
            echo "user with id: " . $req['id'] . " deleted successfully.";
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage());
        }
    }
}
