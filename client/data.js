var hamster_data = {
    images: ["hamster.png"],
    frames: [[2, 2, 90, 120], [92, 2, 90, 120], [182, 2, 90, 120], [272, 2, 90, 120], [362, 2, 90, 120],
                 [2, 122, 90, 120], [92, 122, 90, 120], [182, 122, 90, 120], [272, 122, 90, 120], [362, 122, 90, 120],
                 [2, 242, 90, 120], [92, 242, 90, 120], [182, 242, 90, 120], [272, 242, 90, 120], [362, 242, 90, 120],
                 [2, 362, 90, 120], [92, 362, 90, 120], [182, 362, 90, 120], [272, 362, 90, 120], [362, 362, 90, 120],
                 [2, 482, 90, 120], [92, 482, 90, 120], [182, 482, 90, 120], [272, 482, 90, 120], [362, 482, 90, 120],
                 [2, 602, 90, 120], [92, 602, 90, 120], [182, 602, 90, 120], [272, 602, 90, 120], [362, 602, 90, 120]],
    animations: {
        "stand4": [0],
        "stand5": [5],
        "stand6": [5],
        "stand7": [10],
        "stand0": [15],
        "stand1": [20],
        "stand2": [25],
        "stand3": [25],
        "walk4": [0, 4],
        "walk5": [5, 9],
        "walk6": [5, 9],
        "walk7": [10, 14],
        "walk0": [15, 19],
        "walk1": [20, 24],
        "walk2": [25, 29],
        "walk3": [25, 29]
    },

    scaleX: .5, //90 big hamster | 5 normal critter
    scaleY: .5, //90 big hamster | 5 normal critter
    regX: 45,
    regY: 100,
    framerate: 24,
    balloonY: 60, //80 big hamster | 60 normal critter
    balloonX: 0
};

var room_data = {
    name: 'Tavern',
    width: 850,
    height: 480,
    margin: 0,
    minDistance: 20,
    artwork: {
      background: 'HamTavern_BG.png',
      foreground: 'HamTavern_FG.png',
      sprites: {
        images: [
          'HamTavern_SM.png'
        ],
        frames: [
          [
            577,
            161,
            170,
            61,
            0,
            85,
            42
          ],
          [
            221,
            0,
            147,
            240,
            0,
            74,
            118
          ],
          [
            625,
            0,
            181,
            161,
            0,
            90,
            52
          ],
          [
            806,
            0,
            127,
            118,
            0,
            64,
            103
          ],
          [
            0,
            0,
            221,
            174,
            0,
            110,
            133
          ],
          [
            235,
            240,
            42,
            38,
            0,
            21,
            1
          ],
          [
            353,
            242,
            37,
            35,
            0,
            18,
            2
          ],
          [
            316,
            240,
            37,
            35,
            0,
            18,
            2
          ],
          [
            933,
            0,
            83,
            151,
            0,
            31,
            122
          ],
          [
            719,
            222,
            68,
            63,
            0,
            24,
            29
          ],
          [
            195,
            240,
            40,
            40,
            0,
            20,
            2
          ],
          [
            277,
            240,
            39,
            40,
            0,
            20,
            2
          ],
          [
            0,
            174,
            103,
            78,
            0,
            52,
            49
          ],
          [
            103,
            174,
            68,
            88,
            0,
            34,
            38
          ],
          [
            965,
            239,
            53,
            33,
            0,
            26,
            4
          ],
          [
            171,
            174,
            24,
            68,
            0,
            12,
            59
          ],
          [
            906,
            151,
            118,
            88,
            0,
            59,
            37
          ],
          [
            368,
            137,
            128,
            105,
            0,
            64,
            19
          ],
          [
            368,
            0,
            257,
            137,
            0,
            129,
            48
          ],
          [
            496,
            137,
            81,
            138,
            0,
            40,
            94
          ],
          [
            806,
            118,
            100,
            147,
            0,
            70,
            111
          ],
          [
            577,
            222,
            65,
            84,
            0,
            32,
            44
          ],
          [
            779,
            161,
            22,
            34,
            0,
            11,
            23
          ],
          [
            747,
            161,
            32,
            57,
            0,
            16,
            15
          ],
          [
            642,
            222,
            77,
            64,
            0,
            39,
            45
          ],
          [
            906,
            239,
            59,
            68,
            0,
            29,
            13
          ]
        ]
      },
      props: [
        [
          0,
          455,
          180
        ],
        [
          1,
          314,
          201
        ],
        [
          2,
          301,
          341
        ],
        [
          3,
          259,
          434
        ],
        [
          4,
          670,
          245
        ],
        [
          5,
          665,
          274
        ],
        [
          6,
          592,
          252
        ],
        [
          7,
          548,
          208
        ],
        [
          8,
          830,
          245
        ],
        [
          9,
          837,
          279
        ],
        [
          10,
          484,
          307
        ],
        [
          11,
          339,
          320
        ],
        [
          12,
          409,
          336
        ],
        [
          13,
          563,
          380
        ],
        [
          14,
          430,
          415
        ],
        [
          15,
          411,
          442
        ],
        [
          16,
          496,
          399
        ],
        [
          17,
          812,
          309
        ],
        [
          18,
          722,
          357
        ],
        [
          19,
          28,
          213
        ],
        [
          20,
          12,
          292
        ],
        [
          21,
          9,
          331
        ],
        [
          22,
          162,
          246
        ],
        [
          23,
          85,
          250
        ],
        [
          24,
          127,
          204
        ],
        [
          25,
          205,
          221
        ]
      ]
    },
    tileMap: [
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    ],
    tileSize: 100
  };

var settings = {
    character: hamster_data,
    roomPath: './media/rooms/'
};
