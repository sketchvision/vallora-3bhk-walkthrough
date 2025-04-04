var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.006835155862798814,
        "pitch": -0.026582061534190515,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.23684148188820942,
          "pitch": 0.00005675932039750364,
          "rotation": 0,
          "target": "1-living-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-space",
      "name": "LIVING SPACE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6505910235473653,
          "pitch": 0.022572144594320775,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 2.304930351956852,
          "pitch": 0.03022311823512247,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5556539086486865,
          "pitch": -0.010414154492320193,
          "rotation": 0,
          "target": "1-living-space"
        },
        {
          "yaw": 2.807702839159032,
          "pitch": -0.09947214452476771,
          "rotation": 0,
          "target": "3-common-washroom"
        },
        {
          "yaw": 2.587876862001914,
          "pitch": -0.03501334653208943,
          "rotation": 0,
          "target": "4-bedroom-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-common-washroom",
      "name": "COMMON WASHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.956770448467555,
          "pitch": -0.003138629616547206,
          "rotation": 0,
          "target": "5-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-01",
      "name": "BEDROOM 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1159552498461025,
          "pitch": 0.02831333622614629,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-passage",
      "name": "PASSAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.192047804495994,
          "pitch": 0.006919459567125585,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.989956194882992,
          "pitch": 0.007459144797236306,
          "rotation": 0,
          "target": "1-living-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-02",
      "name": "BEDROOM 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6763247569948874,
          "pitch": 0.017445605043743484,
          "rotation": 0,
          "target": "8-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom02-washroom",
      "name": "BEDROOM02 WASHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8174057654711033,
          "pitch": 0.06573349271438644,
          "rotation": 0,
          "target": "6-bedroom-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7714230075232429,
          "pitch": 0.006638045680997351,
          "rotation": 0,
          "target": "9-master-bedroom-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-bedroom-washroom",
      "name": "MASTER BEDROOM WASHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07696066936014034,
          "pitch": 0.15088435952071322,
          "rotation": 0,
          "target": "8-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "vallora 3bhk VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
