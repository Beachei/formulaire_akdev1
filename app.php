<?php

require 'admin/config/config.php';

$connexion = new mysqli($server,$name,$pwd,$dbname);
if ($connexion->connect_error) {
    die(''.$connexion->connect_error);
};
$connexion->set_charset("utf8mb4");
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
    $nbrAA = intval(isset($_POST['nbrPIAA'])?$_POST['nbrPIAA']:"");
    $activité = isset($_POST['activité']) ?$_POST['activité'] : '';
    $litSup = isset($_POST['litSup']) ?$_POST['litSup'] : '';
    $prixSup = isset($_POST['prixSup']) ?$_POST['prixSup'] : '';
    $description = "";
    $prixTotale = $amount;
    $prenom = ucwords($prenom);
    $mail = strtolower($mail);
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
    $allActivite = $activité;
    $allActivite = json_encode($allActivite,JSON_UNESCAPED_UNICODE);

    $sql = "INSERT INTO reservation(`nom`, `prenom`, `mail`, `traitement`, `sup_single`, `nombre_de_personnes`,`nombre_de_personne_inscrit_au_activité`, `nombre_d'adulte`, `nombre_d'enfant`, `nombre_de_séjour`, `date_d'arrivé`, `date_de_départ`, `activité`, `prixAE`,  `prix_adulte`, `prix_enfant`, `prix_du_traitement`, `prix_des_activités`, `prix_single`, `prix_totale`) VALUES ('$nom','$prenom','$mail','$description', '$litSup','$personnes','$nbrAA','$adulte','$enfant', '$durée', '$arrive', '$depart', '$allActivite', '$priceAE', '$priceA', '$priceE', '$priceT', '$amount1', '$prixSup','$prixTotale')";
    if ($connexion->query($sql)) {
      //  header("Location:index.html");
      echo $nbrAA;
        }

    $connexion->close();
?>