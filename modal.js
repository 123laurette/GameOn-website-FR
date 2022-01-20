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
  modalbg.style.display = "block";                    //Apparition de la modal 1, après le click sur JE M'INSCRIT
  modal1.style.display = "block";                     //Réactivation de la modal 1, après le click sur FERMER (modale 2)
  modal2.style.display = "none";                      //Disparition de la modal 2
}

//......MON JAVA SCRIPT....

//  FERMETURE DE LA MODAL

const modalclose = document.querySelector(".close");          //Constante ciblant le selecteur Close (X) de la modale 1

modalclose.addEventListener("click", accueil);                //Evènement fermant la modale 1 et le retour à l'accueil

function accueil() {
  modalbg.style.display = "none";                             //Fonction pour faire disparaitre la modale 1
}

//***********************************************/
// VERIFICATION PRENOM

let prenom = document.getElementById("first");                //déclaration de la variable pour appeler l'Id

prenom.addEventListener("focusout", valid_prenom);            //mise en place de l'évènement

function valid_prenom(inputFirst) {                           //création de la fonction
  let prenom_v = new RegExp('^[a-zA-Z-\s]+$');                //Création de la Regex
  let testPrenom = prenom_v.test(first.value)

  if (!testPrenom) {                                          //Condition si il y a une erreur
    prenom.parentElement.setAttribute("data-error-visible", "true");
    prenom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  return false;
  } else {                                                    //Condition si c'est rempli correctement
    prenom.parentElement.setAttribute("data-error-visible", "false");
    prenom.parentElement.setAttribute("data-error", "");
  return true;
  }
}
//***********************************************/
// VERIFICATION NOM

let nom = document.getElementById("last");

nom.addEventListener("focusout", valid_nom);

function valid_nom(inputLast) {
  let nom_v = new RegExp('^[a-zA-Z-\s]+$');
  let testNom = nom_v.test(last.value);

  if (!testNom) {
    nom.parentElement.setAttribute("data-error-visible", "true");
    nom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  return false;
  } else {
    nom.parentElement.setAttribute("data-error-visible", "false");
    nom.parentElement.setAttribute("data-error", "");
  return true;
  }
}
//***********************************************/
// VERIFICATION EMAIL

let email = document.getElementById("email");

email.addEventListener("focusout", valid_email);

function valid_email(inputEmail) {
  let email_v = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
  let testEmail = email_v.test(email.value)

  if (!testEmail) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", "Veuillez vérifier votre adresse éléctronique.");
  return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.parentElement.setAttribute("data-error", "");
  return true;
  }
}
//***********************************************/
// VERIFICATION DATE DE NAISSANCE

let ddn = document.getElementById("birthdate");

ddn.addEventListener("change", valid_ddn);

function valid_ddn(inputBirthdate) {
  let ddn_v = new RegExp('^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$');
  let testDdn = ddn_v.test(birthdate.value)

  if ((!testDdn) || (ddn.value == "")) {
    ddn.parentElement.setAttribute("data-error-visible", "true");
    ddn.parentElement.setAttribute("data-error", "Vous devez entrer votre date de naissance au format JJ/MM/AAAA");
  return false;
  } else {
    ddn.parentElement.setAttribute("data-error-visible", "false");
    ddn.parentElement.setAttribute("data-error", "");
  return true;
  }
}
//*************************************************/
//VERIFICATION DES BOUTONS RADIOS

function valid_ville() {                                          //Création de la fonction
  let ville = document.getElementsByName("location");             //Création variable qui appel l'input qui se nomme location
  let ville_v = false;
  let i = 0;                                                      //initialisation de l'indicateur à 0

  for (!ville_v; i < ville.length; i++) {                           //Mise en place de la condition
    if (ville[i].checked) {                                        //Si un bouton radio est coché c'est ok,
      ville_v = true;                                              
      villeError.innerHTML = "";                                   //donc pas de message 
    }
  }
    if (!ville_v) {
      villeError.innerHTML = "vous devez choisir une option.";
      villeError.style.color = "red";
      villeError.style.fontSize = "0.4em";
    }
    return ville_v;
}

//***************************************************/
// CONDITIONS GENERALES

let cg = document.getElementById("checkbox1");                      //Création de la variable pour cibler l'ID

function valid_cg() {                                               //Création de la fonction

  if (!cg.checked) {                                                //Mise en place de la condition, si non coché             
    cg.parentElement.setAttribute("data-error-visible", "true");
    cg.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
  return false;
  }
  else {                                                              //Mise en place de la condition, si coché
    cg.parentElement.setAttribute("data-error-visible", "false");
    cg.parentElement.setAttribute("data-error", "");
  return true;
  }
}
//************************************************/
//  OUVERTURE DE LA MODAL 2 et VALIDATION GLOBAL DU FORMULAIRE

let modal1btn = document.getElementById("envoyer");             //Variable cible le bouton envoyer de la 1ère modale
let modal1 = document.querySelector(".modal-body");             //Variable cible le corp de la modale 1
let modal2 = document.querySelector(".modal2");                 //Variable cible le corp de la modale 2

modal1btn.addEventListener("click", ouvertureModal2);           //Mise en place évènement d'ouverture Modale 2

function ouvertureModal2() {                                    //Création de la fontion en relation avec évènement précédent
  if (valid_prenom() & valid_nom() & valid_email() & valid_ddn() & valid_cg() & valid_ville()) {
    //Conditions de validation du formulaire global  
    modal1.style.display = "none";                              //Fermeture de la modale 1                             
    modal2.style.display = "block";                             //Ouverture de la modale 2
    document.getElementById("formulaire").reset();              //Remise à zéro des champs du formulaire
  }
}

//************************************************/
// FERMETURE DE LA MODAL 2

let modalclose2 = document.getElementById("fermer");            //Variable ciblant le bouton Fermer de la modale 2

modalclose2.addEventListener("click", accueil);                 //Evènement renvoyant à la page d'accueil

