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

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

btnStart.addEventListener("click", Postavke.timeCounterStart)
btnStop.addEventListener("click", Postavke.timeCounterStop)

function setup() {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  setupGeneral();

  switch (odabrana) {
    case "mission1":
      setupMission1();
      break;
    case "mission2":
      setupMission2();
      break;
    case "mission3":
      setupMission3();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
  }

  render_main();
}

//* sve vrste powerupova
let allPowerUps = [
  { type: "heavyMG", ammo: 150 },
  { type: "flameShot", ammo: 20 },
  { type: "rLauncher", ammo: 15 }
];


function setupGeneral() {
  //! poredak je bitan
  GAME.clearSprites();
  Postavke.newMissionReset();

  Postavke.marco = new Marco(GAME.getSpriteLayer("marco"));
  Postavke.marco.start();
  GAME.addSprite(Postavke.marco);

  let pow = new POW(GAME.getSpriteLayer("pow"));
  GAME.addSprite(pow);

  const randomPowerUp = Math.floor(Math.random() * allPowerUps.length);
  Postavke.powerUp = new PowerUp(GAME.getSpriteLayer(allPowerUps[randomPowerUp].type), allPowerUps[randomPowerUp].ammo);
  GAME.addSprite(Postavke.powerUp);
}


/* LEVELS */
function setupMission1() {
  GAME.activeWorldMap.setCollisions("floor");
  
  Postavke.rebels = [
    new RifleRebel(5 * 64, 2.9 * 64),
    new RifleRebel(12 * 64, 2.9 * 64),
    new RifleRebel(15 * 64, 2.9 * 64),
    new RifleRebel(8 * 64, 4.9 * 64),
    new RifleRebel(14 * 64, 5.9 * 64),
    new RifleRebel(13 * 64, 7.9 * 64)
  ]
  for (const rebel of Postavke.rebels) {
    GAME.addSprite(rebel);
  }

  let rope = new NoGravItem(GAME.getSpriteLayer("rope"));
  GAME.addSprite(rope);

  Platform.platformCreation();

  let goSign = new GoSign(GAME.getSpriteLayer("go"))
  GAME.addSprite(goSign)

}

function setupMission2() {
  Postavke.rebels = [
    new RifleRebel(3.5 * 64, 1.9 * 64),
    new RifleRebel(5.5 * 64, 1.9 * 64),
    new RifleRebel(11 * 64, 1.9 * 64),
    new RifleRebel(13 * 64, 1.9 * 64),
    new RifleRebel(15 * 64, 1.9 * 64),
    new RifleRebel(18 * 64, 2.9 * 64),
    new RifleRebel(2 * 64, 4.9 * 64),
    new RifleRebel(11 * 64, 4.9 * 64),
    new RifleRebel(15 * 64, 4.9 * 64),
    new RifleRebel(5.5 * 64, 6.9 * 64),
  ]
  for (const rebel of Postavke.rebels) {
    GAME.addSprite(rebel);
  }

  Platform.platformCreation();

  let goSign = new GoSign(GAME.getSpriteLayer("go"))
  GAME.addSprite(goSign)
}

function setupMission3() {  
  Postavke.rebels = [new PlaneRebel()];
  GAME.addSprite(Postavke.rebels[0]);

  Platform.platformCreation();

}