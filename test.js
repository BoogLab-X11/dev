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
  document.write("?\n")
}}

person="Boogie"
sayhi(person);
gender(person)

person="Lucy"
sayhi(person);
gender(person)

sayhi();
