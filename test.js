function sayhi(person = "Stranger")
{
var hello="Hello ";
document.write(hello+person+"\n");
}

function gender(person)
{
if(person=="Boogie"){
  document.write("Boy\n")
} else if (person=="Lucy") {
  document.write("Girl\n")
} else{
  document.write("Dunno\n")
}}

person="Boogie"
sayhi(person);
gender(person)
document.write("<br><br>");

person="Lucy"
sayhi(person);
gender(person)
document.write("<br><br>");

sayhi();
document.write("<br><br>");

// print 1-10
var startNum=1;
while (startNum < 11) {
  document.write(startNum+" ");
  startNum++;
}
document.write("<br><br>");
// bail at 5 with break
startNum=1;
while (startNum < 11) {
  document.write(startNum+" ");
  startNum++;
  if (startNum==6){
    break;
  }
}
document.write("<br><br>");

// print even nums with continue
startNum=1;
while (startNum < 11) {
  if (startNum % 2 == 0){
    document.write(startNum+" ");
    startNum++;
    continue;
  }
  startNum++;
}
document.write("<br><br>");

person="Satan"
var result = (person != "Satan" ? "Good":"Evil") //ternary operator
document.write(person + " is " + result);
document.write("<br><br>");

person="Hitler"
if (person == "Satan" || person=="Hitler"){ // or
  document.write(person + " is really evil");
}
document.write("<br><br>");

function mySecretVal(){
  return "42";
}

document.write("The meaning of life is "+ mySecretVal());
// or var meanLife=mySecretVal()  etc.....
//return on own breaks out of function
document.write("<br><br>");

var fam=['Boog','Lucy','Tobes','Hughie']
for (var i=0 ; i<4 ; i++){          //oldskool
  document.write("\n"+fam[i]+"\n")
}
document.write("<br><br>");


function whoFam(famMember){
  document.write(famMember+"!\n")
}
fam.forEach(whoFam); //calls a function for each array member
document.write("<br><br>");

function whoFamNum(famMember,famNum){ //does same but includes index
  document.write(famMember+" index \n"+famNum+", ")
}
fam.forEach(whoFamNum);
document.write("<br><br>");

function whoFamNumArray(famMember,famNum,array){ //does same but accesses array
  document.write(famMember+" index \n"+famNum+", ")
  if(famNum==array.length-1){document.write("Last one!")}
}
fam.forEach(whoFamNumArray);
document.write("<br><br>");
