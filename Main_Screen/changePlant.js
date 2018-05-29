// !!! code need to be inserted to global JS

function insertData () {
  //Get the potNumber from the URI parameters
  var potNumber = location.search.split("potNumber=")[1];

  //Update data
  //Update Heading
  document.getElementById("changeHeading").innerHTML = "&Auml;ndere Topf " + potNumber;
  //Update Form
  
}
