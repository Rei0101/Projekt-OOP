//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

/// <reference path="kod_01-likovi.js"/>
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {
  try{
    general();

    switch (GAME.activeWorldMap.name) {
      case "mission1":
        mission1();
        break;
      case "mission2":
        mission2();
        break;
      case "mission3":
        mission3();
        break;

      default:
        throw "Ne postoji loop za " + GAME.activeWorldMap.name;
    }

    GAME.update();
  }
  catch {
    throw console.error("Greška");
  }
};

let playedStartAlert = false;

function general() {
  // tutorial alert
  if(!playedStartAlert){
    alert(
      "Hello, Marco! Your time starts now!\n" +
      "Your primary objective is to take out the Rebel army's plane. " +
      "Along the way, try to kill as many of General Morden's soldiers as you can " +
      "and free the P.O.W.s (Prisoners Of War) as they will give you a weapon in return. " +
      "Do all this while wasting as little time and lives as possible for the best score at the end.\n" +
      "Controls:\n" +
      "Arrow keys - move/aim\n" +
      "A - jump\n" +
      "S - shoot/knife\n" +
      "Good luck, soldier!\n"
    )
    playedStartAlert = true
  }

  // HUD
  GameSettings.output(
    `Lives: ${Postavke.lives}\n` +
    `Ammo: ${((Postavke.ammo == Infinity) ? "unlimited" : Postavke.ammo)}\n` +
    `Points: ${Postavke.points}\n` +
    `Time: ${Postavke.time}`
    , true);
  // drugi nacin HUD-a
  /* GameSettings.output("Lives:" + Postavke.lives, true);
  GameSettings.output("Ammo: " + ((Postavke.ammo == Infinity) ? "unlimited" : Postavke.ammo));
  GameSettings.output("Points:" + Postavke.points);
  GameSettings.output("Time:" + Postavke.time);*/
  // basic inputs
  if (SENSING.right.active) {
    Postavke.marco.moveRight();
  }
  if (SENSING.left.active) {
    Postavke.marco.moveLeft();
  }
  if (SENSING.up.active) {
    Postavke.marco.aimUp();
  }
  if (SENSING.down.active) {
    Postavke.marco.aimDown();
  }
  if (SENSING.keyA.active) {
    Postavke.marco.jump();
  }

  let pow = GAME.activeWorldMap.sprites[1];
  if (SENSING.keyS.active) {
    for (let i = Postavke.rebels.length - 1; i >= 0; i--) {
      if (Postavke.marco.touching(Postavke.rebels[i])) {
        Postavke.rebels[i].takeDamage("knife", i);
        Postavke.marco.knife();
        break;
      }
      else if (Postavke.marco.touching(pow)) {
        pow.freePOW();
        Postavke.marco.knife();
        break;
      }
    }
    if (!Postavke.marco.isShooting && !(Postavke.marco.direction == 180 && Postavke.marco.stopFall)) {
      // za slucaj da knifeam
      Postavke.marco.defaultFrameSets();
      //* ovo je da ne puca cijelo vrijeme dok je pritisnuta tipka i da ne moze prema doli kad je na platformi  
      switch (Postavke.currentPowerUp) {
        case "pistol":
          Postavke.marco.isShooting = true;
          Postavke.marco.shoot();
          break;
        case "heavyMG":
          Postavke.marco.shoot("heavyMG");
          break;
        case "flameShot":
          Postavke.marco.isShooting = true;
          Postavke.marco.shoot("flameShot");
          break;
        default:
          Postavke.marco.isShooting = true;
          Postavke.marco.shoot("rLauncher");
          break;
      }
    }
  }
  else {
    Postavke.marco.isShooting = false;
  }

  // freeing POWs
  for (const b of Postavke.bullets) {
    if (b.touching(pow) && !b._layer.name.startsWith("rebel")){
      Postavke.marco.bulletStop(b);

      pow.freePOW();
    }
      
  }

  // platform collisions
  for (const platform of Postavke.platforms) {
    Postavke.marco.collideBox(platform);
  };

  // powerup (ammo) skupljanje i logika
  if (Postavke.marco.touching(Postavke.powerUp)) {
    Postavke.currentPowerUp = Postavke.powerUp._layer.name;
    Postavke.powerUp.visible = false;

    if (Postavke.currentPowerUp == "pistol") {
      Postavke.ammo = "unlimited";
    }
    else {
      Postavke.ammo = Postavke.powerUp.ammo;
    }
  }
}

function mission1() {
  let lostLife = false;

  for (let i = Postavke.rebels.length - 1; i >= 0; i--) {
    RifleRebel.enemyPlayerInteractions(i);

    // shooting
    for (const b of Postavke.bullets) {
      if(b.shotEnemy(i, "rebelBullet"))
        break;

      //* za gubljenje zivot (commentat za testiranje)
      if(b.shotPlayer("rebelBullet")){
        lostLife = true;
        break;
      }
    }

    if (lostLife)
      break;
  }

  // goSign
  GAME.activeWorldMap.sprites[32].nextMissionAdvancementCheck();
}


function mission2() {
  let lostLife = false;

  for (let i = Postavke.rebels.length - 1; i >= 0; i--) {
    RifleRebel.enemyPlayerInteractions(i);

    // shooting
    for (const b of Postavke.bullets) {
      if(b.shotEnemy(i, "rebelBullet"))
        break;

      //* za gubljenje zivot (commentat za testiranje)
      if(b.shotPlayer("rebelBullet")){
        lostLife = true;
        break;
      }
    }

    if (lostLife)
      break;
  }

  // goSign
  GAME.activeWorldMap.sprites[45].nextMissionAdvancementCheck();
}

function mission3() {
  Postavke.rebels[0].flying();

  if(Postavke.rebels[0].visible)
    Postavke.rebels[0].intervalShooting(1000);
  else{
    Postavke.totalPointCalculation();

    alert(
      `YOU WIN!\n`+
      `Lives left: ${Postavke.lives}\n`+
      `Elapsed time: ${Postavke.time}\n`+
      `Total points: ${Postavke.points}`
    );

    Postavke.gameEndReset();

    timeCounterStop();

    SENSING.reset();
    ENGINE.stop();
    setup();
    GameSettings.showElement(btnStart);
    GameSettings.showElement(document.getElementById("selectMaps"));
    GameSettings.showElement(document.getElementById("btnSetupGame"));
  }
  
  for (const b of Postavke.bullets) {
    if(b.shotEnemy(0, "rebelBomb"))
      break;

    //* za gubljenje zivot (commentat za testiranje)
    if(b.shotPlayer("rebelBomb"))
      break;
  }

}