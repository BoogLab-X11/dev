function sayhi(person = "Stranger")
{
var hello="Hello ";
document.write(hello+person+"\n");
}
person="Boogie"
sayhi(person);
person="Lucy"
sayhi(person);
sayhi();
if(person=="Boogie"){
  document.write("Boy")
} else if (person=="Lucy") {
  document.write("Girl")
} else{
  document.write("Stranger")
}
