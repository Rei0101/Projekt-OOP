//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// ovdje pišete svoje klase

class Character extends Sprite {
  constructor(x, y, layer) {
    super(x + 4, y + 4, 64 - 8, 64 - 8);

    this.frame_sets = {};

    this.layer = layer;
    this.visible = true;//tek kad se postavi layer

    if (this.constructor == Character) {
      throw new Error("Character se ne može instancirati");
    }
  }

  //* ovo je samo izminjena metoda iz frameworka za efikasan prolaz kroz platforme
  collideBox(box) {
    //if (box.constructor.name != "Box") throw new Error("Metoda mora primiti parametar tipa Box");
    let dira = this.touching(box);
    if (dira) {
      // ušao je u prostor kutije
      box.enter = true;
    }

    if (!dira) {
      // ako ne dira, ali je bio u prostoru kutije
      if (box.enter)
        if (this.stopFall)
          //ako je izašao van granica kutije
          if (this.right < box.left || this.left > box.right) {
            this.stopFall = false;
            this.jumping = false;
            box.enter = false;
          }
      return null;
    }

    if (this.oldBottom <= box.top) {
      // malo modificirano iz OTTER-a da "ljepše" radi
      this.bottom = box.top - 0.1;
      this.jumping = false;
      this.velocity_y = 0;

      this.stopFall = true;
      return "top";
    }
    return "other";
  } //collideBox


  switchFrameSet(direction, tile_number) {
    this.frame_sets[direction] = [tile_number];
  }

  currentShotSetup (b){
    b.direction = this.direction;

    b.distance = 0;
    b.visible = true;
    b.move = true;
  }
}


class Marco extends Character {
  constructor(layer) {
    super(0, 0, layer);

    this.frame_sets = {
      "up": [1],
      "walk-up": [1, 2, 3],
      "right": [4],
      "walk-right": [4, 5, 6],
      "down": [7],
      "walk-down": [7],
      "left": [8],
      "walk-left": [8, 9, 10]
    };

    this.isShooting = false;
    this.direction = 90;
  }

  // urednije sa getterima
  get centerX() {
    return this.x + this.width / 2;
  }
  get topY() {
    return this.y;
  }
  get bottomY() {
    return this.y + this.height;
  }

  updatePosition() {
    if (this.stopFall) {
      super.updatePosition(0, 0.8);
    }
    else {
      //* za opcenito podesit gravitaciju
      super.updatePosition(3, 0.8);
    }

    // padanje sa mape
    if (this.bottomY >= 10 * 64) {
      this.loseLife();
    }
  }

  start() {
    this.x = 0;
    this.y = 8 * 64;
  }

  moveRight() {
    super.moveRight();
    this.velocity_x += 1;
  }
  moveLeft() {
    super.moveLeft();
    this.velocity_x -= 1;
  }

  // kad bi stavia override moveUp/moveDown pocea bi letit priko platformi
  aimUp() {
    this.direction = 0
    this.velocity_y -= 0;
  }
  aimDown() {
    this.direction = 180
    this.velocity_y += 0;
  }

  // da nemoze skakat u zraku iznad platformi
  jump() {
    super.jump();
    this.stopFall = false;
  }

  loseLife() {
    Postavke.lives--;
    Postavke.points -= 50;
    setup();
  }

  shoot() {
    let b;
    if (arguments.length == 0) {
      b = new Bullet(GAME.getSpriteLayer(Postavke.currentPowerUp));
    }
    else {
      switch (arguments[0]) {
        case "heavyMG":
          b = new HMGBullet(GAME.getSpriteLayer(Postavke.currentPowerUp + this.direction));
          break;
        case "flameShot":
          b = new FSBullet(GAME.getSpriteLayer(Postavke.currentPowerUp + this.direction));
          break;
        default:
          b = new RLBullet(GAME.getSpriteLayer(Postavke.currentPowerUp + this.direction));
          break;
      }
    }

    //! ne rotirat objekte u tiledu jer se zeznu ID-evi
    GAME.addSprite(b);
    Postavke.bullets.push(b);

    //* postavi na poziciju i smjer trenutnog lika
    switch (this.direction) {
      case 0:
        b.x = this.x + (this.width - b.width) / 2;
        b.y = this.y - b.height;
        break;
      case 90:
        b.x = this.x + this.width;
        b.y = this.y + (this.height - b.height) / 2;
        break;
      case 180:
        b.x = this.x + (this.width - b.width) / 2;
        b.y = this.y + this.height;
        break;
      default:
        b.x = this.x - b.width;
        b.y = this.y + (this.height - b.height) / 2;
        break;
    }

    super.currentShotSetup(b);

    Postavke.ammo--;
  }

  bulletStop(b) {
    if (!b._layer.name.startsWith("flameShot"))
      b.stop();
  }

  knife(){
    // da se ne ispali dodatni metak
    this.isShooting = true;
        this.frame_sets = {
          "up": [11],
          "walk-up": [11],
          "right": [11],
          "walk-right": [11],
          "down": [11],
          "walk-down": [11],
          "left": [11],
          "walk-left": [11]
        };
        setTimeout(() => this.defaultFrameSets(), 500)
  }
  
  defaultFrameSets(){
    Postavke.marco.frame_sets = {
      "up": [1],
      "walk-up": [1, 2, 3],
      "right": [4],
      "walk-right": [4, 5, 6],
      "down": [7],
      "walk-down": [7],
      "left": [8],
      "walk-left": [8, 9, 10]
    };
  }
}

class Rebel extends Character {
  constructor(x, y) {
    super(x, y, GAME.getSpriteLayer("rebels"));

    this.x = x;
    this.y = y;

    this.frame_sets = {};

    this.lastShotTime = performance.now();

    if (this.constructor == Rebel) {
      throw new Error("Rebel se ne može instancirati");
    }
  }

  get centerX() {
    return this.x + this.width / 2;
  }
  get centerY() {
    return this.y + this.height / 2;
  }

  aimLeft() {
    this.direction = 270;
  }
  aimRight() {
    this.direction = 90;
  }

  initializeShoot() {
    let b;
    if (arguments.length == 0)
      b = new RifleRebelBullet(GAME.getSpriteLayer("rebelBullet"));
    else if (typeof arguments[0] == "string")
      b = new RifleRebelBullet(GAME.getSpriteLayer(arguments[0]));

    GAME.addSprite(b);
    Postavke.bullets.push(b);
    return b;
  }

  intervalShooting() {
    let currentTime;
    let elapsedTime;

    switch (arguments.length) {
      case 0:
        throw console.error("Nedovoljan broj parametara");
      case 1:
        currentTime = performance.now();
        elapsedTime = currentTime - Postavke.rebels[0].lastShotTime;

        if (elapsedTime >= arguments[0]) {
          Postavke.rebels[0].shoot();
          Postavke.rebels[0].lastShotTime = currentTime;
        }
        break;
      default:
        currentTime = performance.now();
        elapsedTime = currentTime - Postavke.rebels[arguments[1]].lastShotTime;

        if (elapsedTime >= arguments[0]) {
          Postavke.rebels[arguments[1]].shoot();
          Postavke.rebels[arguments[1]].lastShotTime = currentTime;
        }
        break;
        
    }
    
  }

  takeDamage(b = "knife", i = 0) {
    if (b == "knife")
      this.health -= 999
    else
      this.health -= b.damage;

    if (this.health <= 0) {
      if (this instanceof RifleRebel) {
        this.frame_sets = {
          "up": [26],
          "walk-up": [26],
          "right": [26],
          "walk-right": [26],
          "down": [26],
          "walk-down": [26],
          "left": [25],
          "walk-left": [25]
        };

        this.width = 74;
        this.height = 40;
        // pocetni height od rebela - trenutni
        this.y += 34

        Postavke.points += 20;
        Postavke.rebels.splice(i, 1);
      }
      else{
        this.visible = false;
        Postavke.points += 100;
      }
    }
  }

}


class RifleRebel extends Rebel {
  constructor(x, y, layer) {
    super(x, y, layer);

    this.x = x;
    this.y = y;

    this.frame_sets = {
      "up": [23],
      "walk-up": [23],
      "right": [24],
      "walk-right": [24],
      "down": [23],
      "walk-down": [23],
      "left": [23],
      "walk-left": [23]
    };

    this.width = 74;
    this.height = 74;
    this.direction = 270;
    this.health = 20;
  }

  updatePosition() { }

  isFacingPlayer() {
    return Postavke.marco.topY < this.centerY && Postavke.marco.bottomY > this.centerY
  }

  shoot() {
    let b = super.initializeShoot();

    switch (this.direction) {
      case 90:
        b.x = this.x + this.width;
        b.y = this.y + (this.height - b.height) / 2;
        break;
      default:
        b.x = this.x - b.width;
        b.y = this.y + (this.height - b.height) / 2;
        break;
    }

    super.currentShotSetup(b);
  }

  static enemyPlayerInteractions(i) {
    if (Postavke.marco.centerX < Postavke.rebels[i].centerX) {
      Postavke.rebels[i].aimLeft();
      if (Postavke.rebels[i].isFacingPlayer()) {
        Postavke.rebels[i].switchFrameSet("left", 21);
        Postavke.rebels[i].intervalShooting(1500, i);
      }
      else
        Postavke.rebels[i].switchFrameSet("left", 23);
    }
    else {
      Postavke.rebels[i].aimRight();
      if (Postavke.rebels[i].isFacingPlayer()) {
        Postavke.rebels[i].switchFrameSet("right", 22);
        Postavke.rebels[i].intervalShooting(1500, i);
      }
      else
        Postavke.rebels[i].switchFrameSet("right", 24);
    }
  }
}

class PlaneRebel extends Rebel {
  constructor(layer) {
    super(950, 100, layer);

    this.frame_sets = {
      "up": [21],
      "walk-up": [21],
      "right": [25],
      "walk-right": [25, 26, 27, 28],
      "down": [21],
      "walk-down": [21],
      "left": [21],
      "walk-left": [21, 22, 23, 24]
    };

    this.width = 300;
    this.height = 150;
    this.direction = 180;
    this.health = 200;
    this.flyingLeft = true;
  }

  updatePosition() {
    super.updatePosition(0, 0.8);
  }

  updateAnimation() {
    //* malo izminjeno iz ottera
    if (this.flyingLeft == false) {
      if (this.velocity_x > 0.1) this.changeFrameSet(this.frameSets("walk-right"), "loop", 5);
      else this.changeFrameSet(this.frameSets("right"), "pause");
    }
    else if (this.flyingLeft == true) {
      if (this.velocity_x < -0.1) this.changeFrameSet(this.frameSets("walk-left"), "loop", 5);
      else this.changeFrameSet(this.frameSets("left"), "pause");
    }

    this.animate(); 
  } 
  
  moveLeft(){
    this.velocity_x -= 2;
  }
  moveRight(){
    this.velocity_x += 2;
  }
  flying() {
    if (this.flyingLeft){
      this.moveLeft()

      if (this.x <= 35)
        this.flyingLeft = false;
    }
    else{
      this.moveRight();

      if (this.x >= 950) 
        this.flyingLeft = true;
    }
  }

  shoot() {
    let b = super.initializeShoot("rebelBomb");

    b.x = this.x + (this.width - b.width) / 2;
    b.y = this.y + this.height;

    super.currentShotSetup(b);
  }
}


class Platform extends Box {
  constructor(layer) {
    super(layer);

    this.okvir = false;
    //! ovo polje ispod mora uvijek vrijediti za platform (mission 2 i 3)
    this.mozeVan = true;
  }

  static platformCreation() {
    let platformNumber = 0;
    for (let i = 0; i < GAME.activeWorldMap.layers.length; i++) {
      if (GAME.activeWorldMap.layers[i].properties[0] != undefined &&
        GAME.activeWorldMap.layers[i].properties[0].value != undefined &&
        GAME.activeWorldMap.layers[i].properties[0].value == "platforms") { platformNumber++; }
    }
    for (let i = 0; i < platformNumber; i++) {
      let platform = new Platform(GAME.getSpriteLayer("p" + (i + 1)));
      let decoration = new NoGravItem(GAME.getSpriteLayer("d" + (i + 1)));
      GAME.addSprite(platform);
      GAME.addSprite(decoration);
      Postavke.platforms.push(platform);
    }
  }

}


class NoGravItem extends Item {
  constructor(layer) {
    super(layer);

    this.visible = true;
  }

  updatePosition() { }
}

class Bullet extends Item {
  #distance;
  constructor(layer) {
    super(layer);
    this.#distance = 0;
    this.visible = false;
    this.move = true;
    // klasa Sprite nema svojstvo, a collidedPlatform se koristi na više mjesta
    this._collidedPlatform = "";
    //! ovo polje ispod mora uvijek vrijediti za bullet
    this.mozeVan = true;
    this.damage = 5;
    this.bulletSpeed = 10;
  }

  get distance() {
    return this.#distance;
  }
  set distance(v) {
    if (this.x >= 20 * 64 || this.x + this.width <= 0 || this.y >= 10 * 64 || this.y + this.height <= 0) {
      this.#distance = 0;
      this.stop(); // vraća sve postavke za projektil
    }
    else {
      this.#distance = v;
    }
  }

  // potrebno je definirati svojstvo kako bi se točno znalo u kojem trenutku dira neku platformu
  get collidedPlatform() {
    return this._collidedPlatform;
  }
  set collidedPlatform(v) {
    // ako dira platformu, onda string nije prazan već se radi o strani s koje je dira
    if (v != "") {
      // zaustavi projektil
      this.stop();
    }

    this._collidedPlatform = v;
  }

  updatePosition() {
    //* kretanje projektila ovisno o smjerovima
    if (this.move) {
      switch (this.direction) {
        case 0:
          this.y -= this.bulletSpeed;
          break;
        case 90:
          this.x += this.bulletSpeed;
          break;
        case 180:
          this.y += this.bulletSpeed;
          break;
        default:
          this.x -= this.bulletSpeed;
          break;
      }
      this.distance += 5;
    }
  }

  stop() {
    this.visible = false;
    this.move = false;

    // popis svih likova u mapi
    let sprites = GAME.activeWorldMap.sprites;

    // izbaci onog koji staje (tako da se više ne crta)
    for (let i = sprites.length - 1; i >= 0; i--) {
      if (sprites[i] === this) {
        sprites.splice(i, 1); // brisanje i-tog elementa
        Postavke.removeBullet(this);
        break;
      }
    }
  }

  shotEnemy(i, enemyProjectile) {
    if (this.touching(Postavke.rebels[i]) && this._layer.name != enemyProjectile) {
      Postavke.marco.bulletStop(this);

      //! vazno da se ne bi rebeli sami ubili
      if (this._layer.name != enemyProjectile)
        Postavke.rebels[i].takeDamage(this, i);

      return true;
    }
  }

  shotPlayer(enemyProjectile) {
    if (this.touching(Postavke.marco) && this._layer.name == enemyProjectile) {
      this.stop();
      Postavke.marco.loseLife();
      
      return true;
    }
  }
}

class HMGBullet extends Bullet {
  constructor(layer) {
    super(layer);
    this.damage = 2;
    this.bulletSpeed = 25;
  }
}

class FSBullet extends Bullet {
  #distance;
  constructor(layer) {
    super(layer);
    this.#distance = 0;
    this.damage = 2;
    this.bulletSpeed = 20;
  }

  get distance() {
    return this.#distance;
  }
  set distance(v) {
    if (this.#distance > 30) {
      this.#distance = 0;
      this.stop(); // vraća sve postavke za projektil
    }
    else {
      this.#distance = v;
    }
  }
}

class RLBullet extends Bullet {
  constructor(layer) {
    super(layer);
    this.damage = 20;
    this.bulletSpeed = 5;
  }
}

class RifleRebelBullet extends Bullet {
  constructor(layer) {
    super(layer);
    this.bulletSpeed = 7;
  }
}

class PlaneRebelBomb extends Bullet {
  constructor(layer) {
    super(layer);
    this.bulletSpeed = 5;
  }
}

class POW extends NoGravItem {
  constructor(layer) {
    super(layer)
  }

  freePOW() {
    this.visible = false;
    Postavke.powerUp.visible = true;
    Postavke.points += 30;
  }
}

class PowerUp extends NoGravItem {
  constructor(layer, ammo) {
    super(layer);
    this.visible = false;
    this.ammo = ammo;
  }
}

class GoSign extends NoGravItem {
  constructor(layer) {
    super(layer);
  }

  nextMissionAdvancementCheck() {
    if (Postavke.marco.touching(this)) {
      GAME.clearSprites();
      if (GAME.activeWorldMap.name == "mission1") {
        GAME.setActiveWorldMap("mission2");
      }
      else {
        GAME.setActiveWorldMap("mission3");
      }
      setup();

      //* uzea iz ottera i malo prominia
      let t = '<span class="emoji">&#128736;</span> Setup game: <b style="color: blue">x</b>';
      t = t.replace("x", GAME.activeWorldMap.name)
      document.getElementById("btnSetupGame").innerHTML = t;
    }
  }
}