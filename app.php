<?php

require 'admin/config/config.php';

$connexion = new mysqli($server,$name,$pwd,$dbname);
if ($connexion->connect_error) {
    die(''.$connexion->connect_error);
};

    $amount = intval(isset($_POST['price'])?$_POST['price']:"");
    $amount1 = intval(isset($_POST['priceActivities'])?$_POST['priceActivities']:"");
    $priceT = intval(isset($_POST["priceTraitement"])?$_POST["priceTraitement"]:"");
    $priceA = intval(isset($_POST["priceAdulte"])?$_POST["priceAdulte"]:"");
    $priceE = intval(isset($_POST["priceEnfant"])?$_POST["priceEnfant"]:"");
    $priceAE = intval(isset($_POST["totalAE"])?$_POST["totalAE"]:"");
    $nom = isset($_POST['nom'])?$_POST['nom']:"";
    $prenom = isset($_POST['prenom'])?$_POST['prenom']:"";
    $mail = isset($_POST["mail"])?$_POST["mail"]:"";
    $selection = isset($_POST['selection'])?$_POST['selection']:"";
    $complet = $nom . ' ' . $prenom;
    $arrive = isset($_POST['dateArrive'])? $_POST['dateArrive'] : "";
    $depart = isset($_POST['dateDepart'])? $_POST['dateDepart'] : "";
    $durée = isset($_POST['dure'])? $_POST['dure'] : "";
    $adulte = intval(isset($_POST['nbrA'])? $_POST['nbrA'] : "");
    $enfant = intval(isset($_POST['nbrE'])? $_POST['nbrE'] : "");
    $personnes = intval($adulte) + intval($enfant);
    $activite = isset($_POST['p']) ?$_POST['p'] : '';
    $activite1 = isset($_POST['p1']) ?$_POST['p1'] : '';
    $activite2 = isset($_POST['p2']) ?$_POST['p2'] : '';
    $activite3 = isset($_POST['p3']) ?$_POST['p3'] : '';
    $activite4 = isset($_POST['p4']) ?$_POST['p4'] : '';
    $description = "";
    switch($selection){
        case 1 :
            $description = "BED & BREAKFAST";
            break;
        case 2 : 
            $description = "DEMI PENSION";
            break;
        case 3 :
            $description = "PENSION COMPLET";
            break;
    }
    $allActivite = array($activite,$activite1,$activite2,$activite3,$activite4);
    $allActivite = json_encode( $allActivite );

    $sql = "INSERT INTO reservation(`nom`, `prenom`, `mail`, `traitement`, `nombre_de_personnes`, `nombre_d'adulte`, `nombre_d'enfant`, `nombre_de_séjour`, `date_d'arrivé`, `date_de_départ`, `activité`, `prixAE`,  `prix_adulte`, `prix_enfant`, `prix_du_traitement`, `prix_des_activités`, `prix_totale`) VALUES ('$nom','$prenom','$mail','$description','$personnes','$adulte','$enfant', '$durée', '$arrive', '$depart', '$allActivite', '$priceAE', '$priceA', '$priceE', '$priceT', '$amount1','$amount')";
    if ($connexion->query($sql)) {
        header("Location:index.html");
    }

    $connexion->close();
?>