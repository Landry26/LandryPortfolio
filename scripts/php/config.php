<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

try {
  $conn = new PDO("mysql:host=localhost;dbname=portfolio", 'root', '');
  // capture d'exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //echo "Connexion réussie";
} catch(PDOException $e) {
  echo "Connexion echouée: " . $e->getMessage();
}
?>