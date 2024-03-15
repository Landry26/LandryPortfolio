<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

$conn = new mysqli("mysql:host=localhost;dbname=portfolio", 'root', '');

// Vérifiez la connexion
if ($conn->connect_error) {
  die("Erreur de connexion à la base de données : " . $conn->connect_error);
}

// Insérez les données dans la table appropriée
$sql = "INSERT INTO visiteurs (nom, email, msg) VALUES ('$nom', '$email','$msg')";

if ($conn->query($sql) === TRUE) {
  echo "Données insérées avec succès.";
} else {
  echo "Erreur lors de l'insertion des données : " . $conn->error;
}

// Fermez la connexion à la base de données
$conn->close();
?>