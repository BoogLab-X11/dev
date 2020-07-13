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

document.write(gameChar.name+"<br>");
gameChar.turnsLeft-=1;
document.write("Turns left="+gameChar.turnsLeft+"<br>");
gameChar.caveJump(42,69);
document.write("You are in cave "+gameChar.caveX+"/"+gameChar.caveY+"<br>");
