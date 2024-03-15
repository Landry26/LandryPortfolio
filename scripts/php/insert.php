<?php
//appel à la fonction de connexion avec la base de données
require_once('config.php');
try{

    if(isset($_POST['Mail'])){
      
        //requete d'insertion des informations dans la base de données
        $sql="INSERT INTO visiteurs (Noms, Mail, msg)
        VALUES 
        
        ('".$_POST['Noms']."','".$_POST['Mail']."','".$_POST['msg']."')";
        
        $resultat=$conn->exec($sql);
        //affichage de résultats de la requete
        header('Location:index.htm?enregistrement réussi');
        }
        else{
            echo" enregistrement échoué";
        }
        
    }

    catch(Exception $e){ die($e->getMessage()); }