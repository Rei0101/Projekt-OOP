WorldMap.prototype.collideWithPlatform = function (sprite) {
  // Rubovi
  //! za lijevo
  if (!sprite.mozeVan && sprite.left < 0) {
    sprite.left = 0;
    sprite.velocity_x = 0;
  }
  // Ako se jumping ne postavi na false ovdje, neće skakati s ruba
  if (!sprite.mozeVan && sprite.bottom > this.heightPx) {
    sprite.bottom = this.heightPx;
    sprite.velocity_y = 0;
    sprite.jumping = false;
  }
  // Izbjegava zalijepiti za 1 px ako -1 nije postavljen
  //! za desno
  if (!sprite.mozeVan && sprite.right > this.widthPx - 1) {
    sprite.right = this.widthPx - 1;
    sprite.velocity_x = 0;
  }
  //! za gore
  if (!sprite.mozeVan && sprite.top < 0) {
    sprite.top = 0;
    sprite.velocity_y = 0;
  }
  //* dodan uvjet da moze proc player
  //! za dolje
  if (!sprite.mozeVan && sprite.bottom > this.heightPx) {
    sprite.bottom = this.heightPx;
    sprite.velocity_y = 0;
  }

  // kolizije

  // top-left
  let topi = Math.floor(sprite.top / this.tileheight);
  let lefti = Math.floor(sprite.left / this.tilewidth);
  let cmi = topi * this.width + lefti;
  let v = this.collision_map[cmi];
  this.collider.collide(v, sprite, lefti * this.tilewidth, topi * this.tileheight, this.tilewidth, this.tileheight);

  // bottom-left
  let bottomi = Math.floor(sprite.bottom / this.tileheight);
  lefti = Math.floor(sprite.left / this.tilewidth);
  cmi = bottomi * this.width + lefti;
  v = this.collision_map[cmi];
  this.collider.collide(v, sprite, lefti * this.tilewidth, bottomi * this.tileheight, this.tilewidth, this.tileheight);

  // top-right
  topi = Math.floor(sprite.top / this.tileheight);
  let righti = Math.floor(sprite.right / this.tilewidth);
  cmi = topi * this.width + righti;
  v = this.collision_map[cmi];
  this.collider.collide(v, sprite, righti * this.tilewidth, topi * this.tileheight, this.tilewidth, this.tileheight);

  // bottom-right
  bottomi = Math.floor(sprite.bottom / this.tileheight);
  righti = Math.floor(sprite.right / this.tilewidth);
  cmi = bottomi * this.width + righti;
  v = this.collision_map[cmi];
  this.collider.collide(v, sprite, righti * this.tilewidth, bottomi * this.tileheight, this.tilewidth, this.tileheight);
}