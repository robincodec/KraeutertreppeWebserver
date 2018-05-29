var Pot1 = {
  "PflanzenName": "Robin",
  "Pot_Nummber" : "1",
  "Ist_Feuchte" : "40%",
  "Soll_Feuchte" : "42%",
  "F_Historie" : "Array?",
  "Bepflanzt" : "true"
}

var Pot2 = {
  "PflanzenName": "Julian",
  "Pot_Nummber" : "2",
  "Ist_Feuchte" : "15%",
  "Soll_Feuchte" : "20%",
  "F_Historie" : "Array?",
  "Bepflanzt" : "true"
}

var Pot3 = {
  "PflanzenName": "Tian",
  "Pot_Nummber" : "3",
  "Ist_Feuchte" : "30%",
  "Soll_Feuchte" : "30%",
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

// change data for plant watering by user input
function changePlant (caller) {
  // get pot number from calling button
  var potNumber = caller.id.substring(caller.id.length -1, caller.id.length);
  // open website for changing data changePlant
  document.location.href = './changePlant.html?potNumber=' + potNumber;
}
