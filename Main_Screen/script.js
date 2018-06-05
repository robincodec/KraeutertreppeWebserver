var Name_1 = "Unbepflanzt";
var Nummer_1 = 1;
var Feuchte_Ist_1 = 0;
var Feuchte_Soll_1 = 0;
var F_Historie_1 = 0;
var P_Vorhanden_1 = true;

var Name_2 = "Unbepflanzt";
var Nummer_2 = 2;
var Feuchte_Ist_2 = 0;
var Feuchte_Soll_2 = 0;
var F_Historie_2 = 0;
var P_Vorhanden_2 = true;

var Name_3 = "Unbepflanzt";
var Nummer_3 = 3;
var Feuchte_Ist_3 = 0;
var Feuchte_Soll_3 = 0;
var F_Historie_3 = 0;
var P_Vorhanden_3 = true;

var WLAN_Name = "test";
var WLAN_Passwort = "testPW";

var Pot1 = {
  "PflanzenName": "Robin",
  "Pot_Nummer" : "1",
  "Ist_Feuchte" : "40",
  "Soll_Feuchte" : "42",
  "F_Historie" : "Array?",
  "Bepflanzt" : "true"
}

var Pot2 = {
  "PflanzenName": "Julian",
  "Pot_Nummer" : "2",
  "Ist_Feuchte" : "15",
  "Soll_Feuchte" : "20",
  "F_Historie" : "Array?",
  "Bepflanzt" : "true"
}

var Pot3 = {
  "PflanzenName": "Tian",
  "Pot_Nummer" : "3",
  "Ist_Feuchte" : "30",
  "Soll_Feuchte" : "30",
  "F_Historie" : "Array?",
  "Bepflanzt" : "true"
}

var Pots = [Pot1, Pot2, Pot3];

// Functions
function loadToArray () {
  Pots[0].PflanzenName = Name_1;
  Pots[0].Pot_Nummer = Nummer_1;
  Pots[0].Ist_Feuchte = Feuchte_Ist_1;
  Pots[0].Soll_Feuchte = Feuchte_Soll_1;
  Pots[0].F_Historie = F_Historie_1;
  Pots[0].Bepflanzt = P_Vorhanden_1;

  Pots[1].PflanzenName = Name_2;
  Pots[1].Pot_Nummer = Nummer_2;
  Pots[1].Ist_Feuchte = Feuchte_Ist_2;
  Pots[1].Soll_Feuchte = Feuchte_Soll_2;
  Pots[1].F_Historie = F_Historie_2;
  Pots[1].Bepflanzt = P_Vorhanden_2;

  Pots[2].PflanzenName = Name_3;
  Pots[2].Pot_Nummer = Nummer_3;
  Pots[2].Ist_Feuchte = Feuchte_Ist_3;
  Pots[2].Soll_Feuchte = Feuchte_Soll_3;
  Pots[2].F_Historie = F_Historie_3;
  Pots[2].Bepflanzt = P_Vorhanden_3;
}

function loadToVar () {
  Name_1 = Pots[0].PflanzenName;
  Feuchte_Soll_1 = Pots[0].Soll_Feuchte;
  P_Vorhanden_1 = Pots[0].Bepflanzt;

  Name_2 = Pots[1].PflanzenName;
  Feuchte_Soll_2 = Pots[1].Soll_Feuchte;
  P_Vorhanden_2 = Pots[1].Bepflanzt;

  Name_3 = Pots[2].PflanzenName;
  Feuchte_Soll_3 = Pots[2].Soll_Feuchte;
  P_Vorhanden_3 = Pots[2].Bepflanzt;
}

function deleteFunction(element){
  var potID = element.id.split("deletePot")[1];
  if(confirm("Wollen Sie die Pflanze wirklich aus dem System entfernen?")){
    Pots[potID-1].PflanzenName = "Keine Pflanze vorhanden";
    Pots[potID-1].Ist_Feuchte = "0";
    Pots[potID-1].Soll_Feuchte = "0";
    Pots[potID-1].Bepflanzt = "false";
    document.getElementById("plant" + potID).innerHTML = Pots[potID-1].PflanzenName;
    document.getElementById("istFeuchte" + potID).innerHTML = Pots[potID-1].Ist_Feuchte;
    document.getElementById("sollFeuchte" + potID).innerHTML = Pots[potID-1].Soll_Feuchte;
    // update variables in array
    loadToVar();
    // !!! Daten zu Lukas Methode
    location.reload();
  }
}

function loadIndex (){
  for (i=1; i<=3; i++) {
    loadToArray();
    document.getElementById("plant" + i).innerHTML = Pots[i-1].PflanzenName;
    document.getElementById("istFeuchte" + i).innerHTML = Pots[i-1].Ist_Feuchte;
    document.getElementById("sollFeuchte" + i).innerHTML = Pots[i-1].Soll_Feuchte;
    document.getElementById("feuchteHistorie" + i).innerHTML = Pots[i-1].F_Historie;
  }
}

// potNumber describes which pot has called function
var potNumber;
// change data for plant watering by user input
function changePlant (caller) {
  // get pot number from calling button
  var potNumber = caller.id.substring(caller.id.length -1, caller.id.length);
  // open website for changing data changePlant
  document.location.href = './changePlant.html?potNumber=' + potNumber;
}

// Code for changePlant.html website
function insertData () {
  //Get the potNumber from the URI parameters
  potNumber = location.search.split("potNumber=")[1];

  //Update data
  //Update Heading
  document.getElementById("changeHeading").innerHTML = "&Auml;ndere Topf " + potNumber;
  //Update Form
  document.changeData.plantName.value =  Pots[potNumber-1].PflanzenName;
  document.changeData.moistureToBe.value = Pots[potNumber-1].Soll_Feuchte;
}

// Form: Change data
function change () {
  // get user input and save to pot array
  Pots[potNumber-1].PflanzenName = document.changeData.plantName.value;
  Pots[potNumber-1].Soll_Feuchte = document.changeData.moistureToBe.value;
  // update variables in array
  loadToVar();
  // !!! Daten zu Lukas Methode
  // return true to open main website index
  return true;
}

// Form: Abort change of data
function abort () {
  // open main website index
  document.location.href = './index.html';
}

/*
var Pot1 = {
  "PflanzenName": "Robin",
  "Pot_Nummber" : "1",
  "Ist_Feuchte" : "40",
  "Soll_Feuchte" : "42",
  "F_Historie" : "Array?",
  "Bepflanzt" : "true"
}

var Pot2 = {
  "PflanzenName": "Julian",
  "Pot_Nummber" : "2",
  "Ist_Feuchte" : "15",
  "Soll_Feuchte" : "20",
  "F_Historie" : "Array?",
  "Bepflanzt" : "true"
}

var Pot3 = {
  "PflanzenName": "Tian",
  "Pot_Nummber" : "3",
  "Ist_Feuchte" : "30",
  "Soll_Feuchte" : "30",
  "F_Historie" : "Array?",
  "Bepflanzt" : "true"
}

var Pots = [Pot1, Pot2, Pot3];

// Functions
function deleteFunction(element){
  var potID = element.id.split("deletePot")[1];
  if(confirm("Wollen Sie die Pflanze wirklich aus dem System entfernen?")){
    Pots[potID-1].PflanzenName = "Keine Pflanze vorhanden";
    Pots[potID-1].Ist_Feuchte = "0%";
    Pots[potID-1].Soll_Feuchte = "0%";
    Pots[potID-1].Bepflanzt = "false";
    document.getElementById("plant" + potID).innerHTML = Pots[potID-1].PflanzenName;
    document.getElementById("istFeuchte" + potID).innerHTML = Pots[potID-1].Ist_Feuchte;
    document.getElementById("sollFeuchte" + potID).innerHTML = Pots[potID-1].Soll_Feuchte;
  }
}

function loadIndex (){
  for (i=1; i<=3; i++) {
    document.getElementById("plant" + i).innerHTML = Pots[i-1].PflanzenName;
    document.getElementById("istFeuchte" + i).innerHTML = Pots[i-1].Ist_Feuchte;
    document.getElementById("sollFeuchte" + i).innerHTML = Pots[i-1].Soll_Feuchte;
    document.getElementById("feuchteHistorie" + i).innerHTML = Pots[i-1].F_Historie;
  }
}

// potNumber describes which pot has called function
var potNumber;
// change data for plant watering by user input
function changePlant (caller) {
  // get pot number from calling button
  var potNumber = caller.id.substring(caller.id.length -1, caller.id.length);
  // open website for changing data changePlant
  document.location.href = './changePlant.html?potNumber=' + potNumber;
}

// Code for changePlant.html website
function insertData () {
  //Get the potNumber from the URI parameters
  potNumber = location.search.split("potNumber=")[1];

  //Update data
  //Update Heading
  document.getElementById("changeHeading").innerHTML = "&Auml;ndere Topf " + potNumber;
  //Update Form
  document.changeData.plantName.value =  Pots[potNumber-1].PflanzenName;
  document.changeData.moistureToBe.value = Pots[potNumber-1].Soll_Feuchte;
}

// Form: Change data
function change () {
  // get user input and save to pot array
  Pots[potNumber-1].PflanzenName = document.changeData.plantName.value;
  Pots[potNumber-1].Soll_Feuchte = document.changeData.moistureToBe.value;
  // return true to open main website index
  return true;
}

// Form: Abort change of data
function abort () {
  // open main website index
  document.location.href = './index.html';
}
*/
