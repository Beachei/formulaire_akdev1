<?php
require 'vendor\autoload.php';
$stripe = new \Stripe\StripeClient('sk_test_51PCGVN01zesrsZipUQk1aTcWNOGVvV926GBXwS06HATO79Y7j1edvhQOIDEyoypGji6v2t8z4m7ORJnYKzUzTtV800Qy2sRqz1');
if(isset($_POST['price'],$_POST['tokenID'],$_POST['nom'],$_POST['prenom'],$_POST['selection'])){
    $amount = $_POST['price'];
    $amount1 = $_POST['priceActivities'];
    $token = $_POST['tokenID'];
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $selection = $_POST['selection'];
    $complet = $nom . ' ' . $prenom;
    $amount = $amount*100;
    $amount1 = $amount1*100;
    $arrive = isset($_POST['dateArrive'])? $_POST['dateArrive'] : "";
    $depart = isset($_POST['dateDepart'])? $_POST['dateDepart'] : "";
    $activite = isset($_POST['p']) ? "-".$_POST['p'] : '';
    $activite1 = isset($_POST['p1']) ? "-".$_POST['p1'] : '';
    $activite2 = isset($_POST['p2']) ? "-".$_POST['p2'] : '';
    $activite3 = isset($_POST['p3']) ? "-".$_POST['p3'] : '';
    $activite4 = isset($_POST['p4']) ? "-".$_POST['p4'] : '';
    $description = "";
    switch($selection){
        case 1 :
            $description = "BUNGALLOW SIMPLE";
            break;
        case 2 : 
            $description = "BUNGALLOW FAMILIALE";
            break;
        case 3 :
            $description = "VILLA";
            break;
    }
    $groupeData = [
        "LISTE DES ACTIVITÉS :",
        $activite,
        $activite1,
        $activite2,
        $activite3,
        $activite4,
        "Date d'arrivé" => $arrive,
        "Date de départ" => $depart,
    ];

    $customer = $stripe->customers->create([
        'name' => $complet,
        'email' => 'example@gmail.com',
        'source' => $token // Le token de paiement
    ]);
    $stripe->charges->create([
        'amount' => $amount + $amount1,
        'currency' => 'eur',
        'description' => $description,
        'customer' => $customer->id,
        'metadata' => $groupeData,
      ]);
}

?>