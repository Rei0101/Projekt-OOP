(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("mission2",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
            188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207,
            238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257,
            288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307,
            338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357,
            388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407,
            438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457,
            488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507,
            538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557,
            588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607],
         "height":10,
         "id":1,
         "name":"backgrounds",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":9,
         "name":"powerups",
         "objects":[
                {
                 "gid":58,
                 "height":30,
                 "id":124,
                 "name":"heavyMG",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":30,
                 "x":40,
                 "y":81
                }, 
                {
                 "gid":59,
                 "height":30,
                 "id":125,
                 "name":"flameShot",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":30,
                 "x":40,
                 "y":81
                }, 
                {
                 "gid":60,
                 "height":30,
                 "id":126,
                 "name":"rLauncher",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":30,
                 "x":40,
                 "y":81
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"powerups"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":10,
         "name":"pows",
         "objects":[
                {
                 "gid":69,
                 "height":64,
                 "id":131,
                 "name":"pow",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":23.3333,
                 "y":64
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"pows"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            61, 62, 63, 64, 71, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":6,
         "name":"rebels",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"rebels"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[1, 2, 3, 8, 9, 10, 4, 5, 6, 7, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":5,
         "name":"marco",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"marco"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":3,
         "name":"platforms",
         "objects":[
                {
                 "gid":40,
                 "height":128,
                 "id":5,
                 "name":"p1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":0,
                 "y":576
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":58,
                 "name":"p2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":128,
                 "y":576
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":59,
                 "name":"p4",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":128,
                 "y":384
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":60,
                 "name":"p8",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":320,
                 "y":512
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":61,
                 "name":"p9",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":448,
                 "y":384
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":62,
                 "name":"p7",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":285,
                 "y":320
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":63,
                 "name":"p10",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":704,
                 "y":384
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":64,
                 "name":"p14",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":960,
                 "y":384
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":65,
                 "name":"p15",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":1125,
                 "y":256
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":66,
                 "name":"p13",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":960,
                 "y":192
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":67,
                 "name":"p12",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":832,
                 "y":192
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":68,
                 "name":"p11",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":704,
                 "y":192
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":69,
                 "name":"p3",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":0,
                 "y":128
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":70,
                 "name":"p6",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":320,
                 "y":192
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":71,
                 "name":"p5",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":192,
                 "y":192
                }, 
                {
                 "gid":40,
                 "height":128,
                 "id":72,
                 "name":"p16",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":1152,
                 "y":576
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"platforms"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":4,
         "name":"decorations",
         "objects":[
                {
                 "gid":29,
                 "height":64,
                 "id":89,
                 "name":"d1",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":0,
                 "y":512
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":90,
                 "name":"d2",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":128,
                 "y":512
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":91,
                 "name":"d8",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":320,
                 "y":448
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":92,
                 "name":"d4",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":128,
                 "y":320
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":93,
                 "name":"d7",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":285,
                 "y":256
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":94,
                 "name":"d6",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":320,
                 "y":128
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":95,
                 "name":"d5",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":192,
                 "y":128
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":96,
                 "name":"d3",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":0,
                 "y":64
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":97,
                 "name":"d10",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":704,
                 "y":320
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":98,
                 "name":"d9",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":448,
                 "y":320
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":99,
                 "name":"d11",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":704,
                 "y":128
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":100,
                 "name":"d12",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":832,
                 "y":128
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":101,
                 "name":"d13",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":960,
                 "y":128
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":102,
                 "name":"d14",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":960,
                 "y":320
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":103,
                 "name":"d15",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":1125,
                 "y":192
                }, 
                {
                 "gid":29,
                 "height":64,
                 "id":104,
                 "name":"d16",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":128,
                 "x":1152,
                 "y":512
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"decorations"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":7,
         "name":"bullets",
         "objects":[
                {
                 "gid":45,
                 "height":10,
                 "id":105,
                 "name":"pistol",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":10,
                 "x":725.5,
                 "y":446.083
                }, 
                {
                 "gid":46,
                 "height":25,
                 "id":106,
                 "name":"heavyMG0",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":10,
                 "x":749.83,
                 "y":434.417
                }, 
                {
                 "gid":48,
                 "height":25,
                 "id":107,
                 "name":"heavyMG180",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":10,
                 "x":766.33,
                 "y":434.417
                }, 
                {
                 "gid":47,
                 "height":10,
                 "id":108,
                 "name":"heavyMG90",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":25,
                 "x":750.33,
                 "y":467.917
                }, 
                {
                 "gid":49,
                 "height":10,
                 "id":109,
                 "name":"heavyMG270",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":25,
                 "x":750.83,
                 "y":487.417
                }, 
                {
                 "gid":50,
                 "height":250,
                 "id":110,
                 "name":"flameShot0",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":55,
                 "x":814.33,
                 "y":388.417
                }, 
                {
                 "gid":52,
                 "height":250,
                 "id":111,
                 "name":"flameShot180",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":55,
                 "x":899,
                 "y":379.083
                }, 
                {
                 "gid":51,
                 "height":55,
                 "id":112,
                 "name":"flameShot90",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":250,
                 "x":540,
                 "y":524.583
                }, 
                {
                 "gid":53,
                 "height":55,
                 "id":113,
                 "name":"flameShot270",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":250,
                 "x":538,
                 "y":580.583
                }, 
                {
                 "gid":54,
                 "height":60,
                 "id":114,
                 "name":"rLauncher0",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":20,
                 "x":623.83,
                 "y":376.917
                }, 
                {
                 "gid":56,
                 "height":60,
                 "id":115,
                 "name":"rLauncher180",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":20,
                 "x":653.33,
                 "y":378.417
                }, 
                {
                 "gid":55,
                 "height":20,
                 "id":116,
                 "name":"rLauncher90",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":60,
                 "x":619.83,
                 "y":448.917
                }, 
                {
                 "gid":57,
                 "height":20,
                 "id":117,
                 "name":"rLauncher270",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":60,
                 "x":616.33,
                 "y":480.417
                }, 
                {
                 "gid":65,
                 "height":10,
                 "id":118,
                 "name":"rebelBullet",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":10,
                 "x":725.66,
                 "y":474.417
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"bullets"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":8,
         "name":"sign",
         "objects":[
                {
                 "gid":66,
                 "height":70,
                 "id":119,
                 "name":"go",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":100,
                 "x":1175,
                 "y":499
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"sign"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":11,
 "nextobjectid":132,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":64,
 "tilesets":[
        {
         "columns":11,
         "firstgid":1,
         "image":"maps\/projekt\/pictures\/mc_spritesheet.png",
         "imageheight":64,
         "imagewidth":704,
         "margin":0,
         "name":"mc_spritesheet",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":11,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":11,
         "firstgid":12,
         "image":"maps\/projekt\/pictures\/Neo Geo NGCD - Metal Slug - Mission 1- platforme.png",
         "imageheight":229,
         "imagewidth":711,
         "margin":0,
         "name":"Metal Slug - Mission 1- platforme",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":33,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":13,
         "firstgid":45,
         "image":"maps\/projekt\/pictures\/bullet_spritesheet.png",
         "imageheight":64,
         "imagewidth":832,
         "margin":0,
         "name":"bullet_spritesheet",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":13,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":3,
         "firstgid":58,
         "image":"maps\/projekt\/pictures\/powerup_spritesheet.png",
         "imageheight":64,
         "imagewidth":192,
         "margin":0,
         "name":"powerup_spritesheet",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":3,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":5,
         "firstgid":61,
         "image":"maps\/projekt\/pictures\/rr_spritesheet.png",
         "imageheight":64,
         "imagewidth":320,
         "margin":0,
         "name":"rr_spritesheet",
         "spacing":0,
         "tilecount":5,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":7,
         "firstgid":66,
         "image":"maps\/projekt\/pictures\/misc_spritesheet.png",
         "imageheight":64,
         "imagewidth":448,
         "margin":0,
         "name":"misc_spritesheet",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":7,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":50,
         "firstgid":73,
         "image":"maps\/projekt\/pictures\/Neo Geo NGCD - Metal Slug - Mission 1 - backdrop.png",
         "imageheight":1737,
         "imagewidth":3200,
         "margin":0,
         "name":"Metal Slug - Mission 1 - backdrop",
         "spacing":0,
         "tilecount":1350,
         "tileheight":64,
         "tilewidth":64
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":20
});