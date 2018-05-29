// change data for plant watering by user input
function changePlant (caller) {
  // get pot number from calling button
  var potNumber = caller.id.substring(caller.id.length -1, caller.id.length);
  // open website for changing data changePlant
  document.location.href = './changePlant.html?potNumber=' + potNumber;
}

function deleteFunction(){
  var deleteconfirmation=false;
  if(confirm("Wollen Sie die Pflanze wirklich aus dem System entfernen?")){
    deleteconfirmation = true;
  } else {
    deleteconfirmation = false;
  }
  var x = deleteconfirmation.toString();
  document.getElementById("test").innerHTML = x;
}
