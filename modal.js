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

//***********************************************/
// VERIFICATION PRENOM
let prenom = document.getElementById("first");

prenom.addEventListener("focusout",valid_prenom);

function valid_prenom(inputFirst){
let prenom_v = new RegExp('^[a-zA-Z-\s]+$');
let testPrenom = prenom_v.test(first.value)

  if(!testPrenom){
    prenom.parentElement.setAttribute("data-error-visible", "true");
    prenom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
}else{
    prenom.parentElement.setAttribute("data-error-visible", "false");
    prenom.parentElement.setAttribute("data-error", "");
    return true;
}
}
//**********************************************/
//***********************************************/
// VERIFICATION NOM
let nom = document.getElementById("last");

nom.addEventListener("focusout",valid_nom);

function valid_nom(inputLast){
let nom_v = new RegExp('^[a-zA-Z-\s]+$');
let testNom = nom_v.test(last.value)

  if(!testNom){
    nom.parentElement.setAttribute("data-error-visible", "true");
    nom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
}else{
    nom.parentElement.setAttribute("data-error-visible", "false");
    nom.parentElement.setAttribute("data-error", "");
    return true;
}
}
//**********************************************/
//***********************************************/
// VERIFICATION EMAIL
let email = document.getElementById("email");

email.addEventListener("focusout",valid_email);

function valid_email(inputEmail){
let email_v = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
let testEmail = email_v.test(email.value)

  if(!testEmail){
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", "Veuillez vérifier votre adresse éléctronique.");
    return false;
}else{
    email.parentElement.setAttribute("data-error-visible", "false");
    email.parentElement.setAttribute("data-error", "");
    return true;
}
}
//**********************************************/
//***********************************************/
// VERIFICATION DATE DE NAISSANCE
let ddn = document.getElementById("birthdate");

ddn.addEventListener("change",valid_ddn);

function valid_ddn(inputBirthdate){
let ddn_v = new RegExp('^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$');
let testDdn = ddn_v.test(birthdate.value)

  if(!testDdn){
    ddn.parentElement.setAttribute("data-error-visible", "true");
    ddn.parentElement.setAttribute("data-error", "Vous devez entrer votre date de naissance au format JJ/MM/AAAA");
    return false;}
  else{
    ddn.parentElement.setAttribute("data-error-visible", "false");
    ddn.parentElement.setAttribute("data-error", "");
    return true;
}
}
//**********************************************/
//VERIFICATION DES BOUTONS RADIOS
let ville = document.getElementsByClassName("checkbox-input");
let ville_v = false;
let i = 0;

function valid_ville(){
while (!ville_v && i< ville.length){
  if(!ville[i].checked) ville_v=true;
  i++;}
if(!ville_v) alert ("Vous devez choisir une option");
  return ville_v;}
  
//*************************************************/
//CONDITIONS GENERALES
let cg = document.getElementById("checkbox1");
let cg_v = cg.checked;

function valid_cg(){
  if(!cg_v){
    (alert ("Vous devez vérifier que vous acceptez les termes et conditions"));
    return false;}
  else{}
  }
//**************************************************/
//OUVERTURE DE LA MODAL 2

let modal2btn = document.getElementById("envoyer");
let modal1 = document.querySelector(".modal-body");
let modal2 = document.querySelector(".modal2");

modal2btn.addEventListener("click", ouvertureModal2 );

function ouvertureModal2(){
  modal1.style.display = "none";
  modal2.style.display = "block";
}
//**************************************************/
//FERMETURE DE LA MODAL 2
const modalclose2 = document.querySelector("#fermer");

modalclose2.addEventListener("click", fini);

function fini() {
  modal2.style.display = "none";
  modalbg.style.display = "none";
}