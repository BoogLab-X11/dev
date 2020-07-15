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
    midName     :"",
    lastName    :"Booth",
    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,
    // "this" will have the value of the person object because the person object will invoke showFullName ()
    showFullName:function () {
    document.write ("<br>"+this.firstName + " " + this.lastName+"<br>");
  },
    get poshName(){
        return this.firstName+" de "+this.lastName;
      },
    set addMidName(mid){
      this.midName=mid;
    }
    }

person.showFullName ();
document.write(person.poshName);
person.addMidName = "<br>Perry"; // call to 'set' in object, don't call like a function!
document.write(person.midName+"<br>");




function constructName(firstName,midName,lastName){ //Constructor function, fuck yeah!
  this.firstName=firstName;
  this.midName=midName;
  this.lastName=lastName;
  this.wholeName=function(){
    document.write(this.firstName+this.midName+this.lastName)
  }
  }


var whoDiss = new constructName("Andrew","Perry","Booth<br>");
var whoDat = new constructName("Lucy","Avril","Wainwright<br>");
//Note, you can't add names or functions once an object is constructed like this: constructName.Title="Mr"
//but you can add to constructed objects like below:
whoDat.title="Miss";
whoDiss.title="Mr";
whoDiss.wholeName();
document.write(whoDat.title+" "+whoDat.firstName+" "+whoDat.lastName)

constructName.prototype.disposition="The lovely "; // adds to all current or future objects
document.write(whoDat.disposition+whoDat.title+" "+whoDat.firstName+" "+whoDat.lastName);

var titleTest = function(){  // adding a function via prototype
  if (this.title=="Mr"){
    document.write("Boy<br>")
  }
  else {
    document.write("Girl")
  }
  }

constructName.prototype.titleTest=titleTest; // adding a function via prototype
whoDiss.titleTest();


class myCrapClass {  // OO way of creating objects, does same as above but allows inheritence
  constructor(wee,poo){
    this.wee=wee; // <-----see below
    this.poo=poo; // <-----
  }
}

var gc1 = new myCrapClass('Yellow<br>','Brown'); // create object
document.write(gc1.wee);

class bodyFluids extends myCrapClass{ // subclass bodyFluids inherits from myCrapClass
  constructor(wee,poo){
    super(wee,poo); // the superclass is myCrapClass, this just runs  <---- above
    this.snot="Green<br>"; // only exists in this class, not the superclass
}
}

var bf1 = new bodyFluids('Yellow','Brown'); // create object
document.write(bf1.snot);
