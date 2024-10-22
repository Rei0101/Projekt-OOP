class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  /** @type {Marco} */
  static marco = null;

  static rebels = [];

  static platforms = [];

  /** @type {PowerUp} */
  static powerUp = null;
  static currentPowerUp = "pistol";
  static bullets = [];

  static #lives = 5;
  static #ammo = Infinity;
  static #points = 0;
  static time = 0;

  static intervalId = null;

  static get points() {
    return this.#points;
  }
  static set points(v) {
    if (v < 0) {
      this.#points = 0;
    }
    else {
      this.#points = v;
    }
  }

  static get ammo() {
    return this.#ammo
  }
  static set ammo(v) {
    if (v <= 0) {
      this.#ammo = Infinity;
      this.marco.isShooting = true;
      this.currentPowerUp = "pistol";
    }
    else {
      this.#ammo = v;
    }
  }

  static get lives() {
    return this.#lives
  }
  static set lives(v) {
    if (v <= 0) {
      this.gameEndReset();

      clearInterval(Postavke.intervalId);
      btnStart.addEventListener("click", Postavke.timeCounterStart)
      btnStop.addEventListener("click", Postavke.timeCounterStop)

      GameSettings.output(
        `Lives: ${Postavke.lives}\n` +
        `Ammo: ${((Postavke.ammo == Infinity) ? "unlimited" : Postavke.ammo)}\n` +
        `Points: ${Postavke.points}\n` +
        `Time: ${Postavke.time}`
        , true);

      alert("GAME OVER!");
      SENSING.reset();
      GAME.setActiveWorldMap("mission1");
      ENGINE.stop();
      GameSettings.showElement(btnStart);
      GameSettings.showElement(document.getElementById("selectMaps"));

      //* uzeto iz ottera i malo izminjeno
      let t = '<span class="emoji">&#128736;</span> Setup game: <b style="color: blue">mission1</b>';
      document.getElementById("btnSetupGame").innerHTML = t;
    }
    else {
      this.#lives = v;
    }
  }

  static timeCounterStart() {
    try{
      if (GAME.activeWorldMap.name.length != 0 && GAME.activeWorldMap.sprites.length != 0){
        Postavke.intervalId = setInterval(() => Postavke.time++, 1000);
        btnStart.removeEventListener("click", Postavke.timeCounterStart);
      } 
    }
    catch{
      return;
    }
  }
  static timeCounterStop() {
    try{
      if (Postavke.intervalId) {
        clearInterval(Postavke.intervalId);
        btnStart.addEventListener("click", Postavke.timeCounterStart)
      }
    }
    catch{
      return;
    }
  }

  static newMissionReset() {
    this.rebels = [];
    this.platforms = [];
    this.bullets = [];
  }

  static gameEndReset() {
    Postavke.marco.visible = false;
    this.lives = 5;
    this.ammo = Infinity;
    this.powerUp = null;
    this.currentPowerUp = "pistol";
    this.points = 0;
    this.time = 0;
  }

  static totalPointCalculation() {
    if (this.time <= 150){
      this.points += (150 - this.time);
    }

    this.points += (30 * this.lives)
  }

  static removeBullet(p) {
    for (let i = Postavke.bullets.length - 1; i >= 0; i--) {
      if (Postavke.bullets[i] === p) {
        Postavke.bullets.splice(i, 1);
        break;
      }
    }
  }
  
}