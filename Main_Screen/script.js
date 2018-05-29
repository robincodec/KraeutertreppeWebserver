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
function deleteFunction(){
  var deleteconfirmation=false;
  if(confirm("Wollen Sie die Pflanze wirklich aus dem System entfernen?")){
    deleteconfirmation = true;
    alert("Hello! I am an alert box!!");
  } else {
    deleteconfirmation = false;
  }
}

// change data for plant watering by user input
function changePlant (caller) {
  // get pot number from calling button
  var potNumber = caller.id.substring(caller.id.length -1, caller.id.length);
  // open website for changing data changePlant
  document.location.href = './changePlant.html?potNumber=' + potNumber;
}
