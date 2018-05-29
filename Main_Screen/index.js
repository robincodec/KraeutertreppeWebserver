// change data for plant watering by user input
function changePlant (caller) {
  // get pot number from calling button
  var potNumber = caller.id.substring(caller.id.length -1, caller.id.length);
  // open website for changing data changePlant
  document.location.href = './changePlant.html?potNumber=' + potNumber;
}
