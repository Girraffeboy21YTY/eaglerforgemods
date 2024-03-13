ModAPI.require("player");
ModAPI.addEventListener("update", ()=>{ //Every client tick
  if(ModAPI.player.isCollidedHorizontally){ //Is player walking in to a wall?
    ModAPI.player.motionY = 0.2; //Default ladder speed
    ModAPI.player.reload() //Tell api that player needs updating
  }
});
