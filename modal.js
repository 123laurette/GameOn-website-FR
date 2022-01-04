function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//......MON JAVA SCRIPT....
//  FERMETURE DE LA MODAL
const modalclose = document.querySelector(".close");

modalclose.addEventListener("click", accueil);

function accueil() {
  modalbg.style.display = "none";
}
//**********************************************/
//  VERIF DU FORMULAIRE
let validation = document.getElementById("valider");

//***********************************************/
// CREATION DES VARIABLES PRENOM
let prenom = document.getElementById("first");
let prenom_m = document.getElementById("prenom_manquant");
let prenom_v = /^[a-zA-Z-\s]+$/;

// CREATION DE L'EVENEMENT
validation.addEventListener("click",valid_prenom);

// CREATION DE LA FONCTION
function valid_prenom(e){
  if(prenom.validity.valueMissing){
    e.preventDefault();
    prenom_m.textContent="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenom_m.style.color = "red";
    prenom_m.style.fontSize = "12px";}
  else if (prenom_v.test(prenom.value) == false){
    e.preventDefault();
    prenom_m.textContent="Format incorrect";
    prenom_m.style.color = "yellow";
    prenom_m.style.fontSize = "12px";}
  else {}  
}
//**********************************************/
// CREATION DES VARIABLES NOM

let nom = document.getElementById("last");
let nom_m = document.getElementById("nom_manquant");
let nom_v = /^[a-zA-Z-\s]+$/;

// CREATION DE L'EVENEMENT
validation.addEventListener("click",valid_nom);

// CREATION DE LA FONCTION
function valid_nom(e){
  if(nom.validity.valueMissing){
    e.preventDefault();
    nom_m.textContent="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    nom_m.style.color = "red";
    nom_m.style.fontSize = "12px";}
  else if (nom_v.test(nom.value) == false){
    e.preventDefault();
    nom_m.textContent="Format incorrect";
    nom_m.style.color = "yellow";
    nom_m.style.fontSize = "12px";}
  else {}  
}
//**********************************************/
// CREATION DES VARIABLES EMAIL

let email = document.getElementById("email");
let email_m = document.getElementById("email_manquant");
let email_v = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

// CREATION DE L'EVENEMENT
validation.addEventListener("click",valid_email);

// CREATION DE LA FONCTION
function valid_email(e){
  if(email.validity.valueMissing){
    e.preventDefault();
    email_m.textContent="Veuillez entrer votre adresse email.";
    email_m.style.color = "red";
    email_m.style.fontSize = "12px";}
  else if (email_v.test(email.value) == false){
    e.preventDefault();
    email_m.textContent="Format incorrect";
    email_m.style.color = "yellow";
    email_m.style.fontSize = "12px";}
  else {}  
}

//**********************************************/
// CREATION DES VARIABLES DATE ANNIVERSAIRE

let ddn = document.getElementById("birthdate");
let ddn_m = document.getElementById("ddn_manquante");

// CREATION DE L'EVENEMENT
validation.addEventListener("click",valid_ddn);

// CREATION DE LA FONCTION
function valid_ddn(e){
  if(ddn.validity.valueMissing){
    e.preventDefault();
    ddn_m.textContent="Vous devez entrer votre date de naissance.";
    ddn_m.style.color = "red";
    ddn_m.style.fontSize = "12px";}
  else {}  
}

//**********************************************/
// CREATION DES VARIABLES NBRE DE TOURNOIS

let nbre = document.getElementById("quantity");
let nbre_m = document.getElementById("nbre_manquant");

// CREATION DE L'EVENEMENT
validation.addEventListener("click",valid_nbre);

// CREATION DE LA FONCTION
function valid_nbre(e){
  if(nbre.validity.valueMissing){
    e.preventDefault();
    nbre_m.textContent="Vous devez remplir ce champ.";
    nbre_m.style.color = "red";
    nbre_m.style.fontSize = "12px";}
  else {}  
}


//                      A REVOIR **************************************

//**********************************************/
// CREATION DES VARIABLES CHOIX DES VILLES

let choix_ville = document.getElementsByClassName("checkbox-icon");
let choix_m = document.getElementById("ville");

// CREATION DE L'EVENEMENT
validation.addEventListener("click",valid_choix);

// CREATION DE LA FONCTION
function valid_choix(e){
  if(choix_ville.validity.valueMissing){
    e.preventDefault();
    choix_m.textContent="Vous devez choisir une option.";
    choix_m.style.color = "red";
    choix_m.style.fontSize = "12px";}
  else {}  
}




