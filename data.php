<?php
    $connection=new PDO("mysql:dbname=eglise","root","");

    if(isset($_GET['dateDeb']) && isset($_GET['dateFin'])){
        $dateDeb=$_GET['dateDeb'];
        $dateFin=$_GET['dateFin'];

        $str="SELECT * FROM entree WHERE DateEntree BETWEEN ".$dateDeb." AND ".$dateFin;
        $Affiche=$connection->prepare($str);
        $Affiche->execute();
        $entree=$Affiche->fetchAll(PDO::FETCH_ASSOC);
        
        $str="SELECT * FROM sortie WHERE DateSortie BETWEEN ".$dateDeb." AND ".$dateFin;
        $Affiche=$connection->prepare($str);
        $Affiche->execute();
        $sortie=$Affiche->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([$entree,$sortie]);
    }
?>