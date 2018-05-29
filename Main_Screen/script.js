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

<!-- Functions -->
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
