var gameChar = {
  name:"Boogie",
  caveX:128,
  caveY:256,
  turnsLeft:50,
  inventory:["Ruby","Quartz","Limestone"],
  caveJump:function(jX,jY){
    this.caveX=jX;
    this.caveY=jY;
  }
}

document.write(gameChar.name+"<br>"); //access obj value

gameChar.turnsLeft-=1; //change obj value
document.write("Turns left="+gameChar.turnsLeft+"<br>");

gameChar.caveJump(42,69); // call obj function
document.write("You are in cave "+gameChar.caveX+"/"+gameChar.caveY+"<br>");

gameChar.resetCave = function(){ //add function to obj
  this.caveX=128;
  this.caveY=256;
  document.write("*WHOOSH!*<br>");
}

gameChar.resetCave(); //call new function
document.write("You are in cave "+gameChar.caveX+"/"+gameChar.caveY+"<br>");

function listInv(item){ //access array via iteration
  document.write(item+"<br>");
}
gameChar.inventory.forEach(listInv); // call function for each item

function bike() {
  document.write(this.name);
}


var artist= "Billy Joel"; //The songs you will play ***** see apply below
function playGig(){
  let instruments= ["piano", "microphone", "acousticGuitar", "harmonica"];
  document.write("We are going to be playing music from " + this.artist + " tonight!<br>");
}

playGig(); // not called on an object so is called on the global window object
          //which can access the artist variable
document.write(this.artist+"<br>"); // same thing, global execution context


let bar = {
  artist:"coldplay",
  playGig: function(){
    //instruments that your band will use
    let instruments= ["piano", "microphone", "guitar", "drumset"];
    document.write("We are going to be playing music from " + this.artist + " tonight!<br>");
  }
}
bar.playGig(); //called on object so execution context is with that object, not global

playGig.apply(bar); //swaps context to the bar object when calling  function, more coldplay! *****


artist= "Billy Joel"; // global window

let battle = {
  artist:"acdc",
  playGig: function(){
    let instruments= ["microphone", "electricguitar", "bass", "drumset"];
    document.write("We are going to be playing music from " + this.artist + " tonight! - this="+this+"<br>");
  }
}

let practice = battle.playGig;
practice();  // global window object again because of var assignment

let practice2 = battle.playGig.bind(battle);
practice2();  // object bound to variable, works correctly

var example = function () {
  document.write(this);
};
example();

var person = {
    firstName   :"Andy",
    lastName    :"Booth",
    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,
    // "this" will have the value of the person object because the person object will invoke showFullName ()
    showFullName:function () {
    document.write ("<br>"+this.firstName + " " + this.lastName);
    }}
    person.showFullName ();
