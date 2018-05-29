// change data for plant watering by user input
function changePlant (caller) {
  var potNumber = caller.id.substring(caller.id.length -1, caller.id.length);

  document.location.href = './changePlant.html?potNumber=' + potNumber;
}
