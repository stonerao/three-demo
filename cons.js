var models = {
    host: {
        obj: "./obj/host.obj",
        mtl: "./obj/host.mtl",
        mesh: null
    },
    router: {
        obj: "./obj/router.obj",
        mtl: "./obj/router.mtl",
        mesh: null
    },
    detection: {
        obj: "./obj/detection.obj",
        mtl: "./obj/detection.mtl",
        mesh: null
    },
    switch: {
        obj: "./obj/switch.obj",
        mtl: "./obj/switch.mtl",
        mesh: null
    },
    firewall: {
        obj: "./obj/firewall.obj",
        mtl: "./obj/firewall.mtl",
        mesh: null
    },
    server: {
        obj: "./obj/server.obj",
        mtl: "./obj/server.mtl",
        mesh: null
    },
};
/* const list = [{
    "x": -150,
    "y": 5,
    "z": -100,
    "id": 1,
    "ip": "10.101.10.50",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": -100,
    "id": 2,
    "ip": "10.101.10.99",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": -100,
    "id": 3,
    "ip": "10.101.10.75",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": -100,
    "id": 4,
    "ip": "10.101.10.17",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": -100,
    "id": 5,
    "ip": "10.101.10.98",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -150,
    "y": 5,
    "z": -130,
    "id": 6,
    "ip": "10.101.10.135",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": -130,
    "id": 7,
    "ip": "10.101.10.68",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": -130,
    "id": 8,
    "ip": "10.101.10.200",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": -130,
    "id": 9,
    "ip": "10.101.10.100",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": -130,
    "id": 10,
    "ip": "10.101.10.93",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": -70,
    "id": 11,
    "ip": "10.101.10.174",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": -70,
    "id": 12,
    "ip": "10.101.10.106",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": -70,
    "id": 13,
    "ip": "10.101.10.29",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": -70,
    "id": 14,
    "ip": "10.101.10.64",
    "dep": "dep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -10,
    "y": 5,
    "z": -100,
    "id": 15,
    "ip": "10.101.11.159",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -30,
    "y": 5,
    "z": -100,
    "id": 16,
    "ip": "10.101.11.45",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -50,
    "y": 5,
    "z": -100,
    "id": 17,
    "ip": "10.101.11.56",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -70,
    "y": 5,
    "z": -100,
    "id": 18,
    "ip": "10.101.11.76",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -90,
    "y": 5,
    "z": -100,
    "id": 19,
    "ip": "10.101.11.23",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -10,
    "y": 5,
    "z": -130,
    "id": 20,
    "ip": "10.101.11.221",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -30,
    "y": 5,
    "z": -130,
    "id": 21,
    "ip": "10.101.11.32",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -50,
    "y": 5,
    "z": -130,
    "id": 22,
    "ip": "10.101.11.209",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -70,
    "y": 5,
    "z": -130,
    "id": 23,
    "ip": "10.101.11.93",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -90,
    "y": 5,
    "z": -130,
    "id": 24,
    "ip": "10.101.11.211",
    "dep": "dep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": -20,
    "id": 25,
    "ip": "10.101.12.229",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": -20,
    "id": 26,
    "ip": "10.101.12.64",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": -20,
    "id": 27,
    "ip": "10.101.12.156",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": -20,
    "id": 28,
    "ip": "10.101.12.43",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": 10,
    "id": 29,
    "ip": "10.101.12.245",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": 10,
    "id": 30,
    "ip": "10.101.12.145",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": 10,
    "id": 31,
    "ip": "10.101.12.179",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": 10,
    "id": 32,
    "ip": "10.101.12.29",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": 40,
    "id": 33,
    "ip": "10.101.12.51",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": 40,
    "id": 34,
    "ip": "10.101.12.30",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": 40,
    "id": 35,
    "ip": "10.101.12.132",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": 40,
    "id": 36,
    "ip": "10.101.12.185",
    "dep": "dep3",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": 90,
    "id": 37,
    "ip": "10.101.13.23",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": 90,
    "id": 38,
    "ip": "10.101.13.157",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": 90,
    "id": 39,
    "ip": "10.101.13.53",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": 90,
    "id": 40,
    "ip": "10.101.13.97",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -150,
    "y": 5,
    "z": 90,
    "id": 41,
    "ip": "10.101.13.168",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": 120,
    "id": 42,
    "ip": "10.101.13.125",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": 120,
    "id": 43,
    "ip": "10.101.13.77",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": 120,
    "id": 44,
    "ip": "10.101.13.217",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": 120,
    "id": 45,
    "ip": "10.101.13.93",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -150,
    "y": 5,
    "z": 120,
    "id": 46,
    "ip": "10.101.13.249",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -230,
    "y": 5,
    "z": 150,
    "id": 47,
    "ip": "10.101.13.50",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -210,
    "y": 5,
    "z": 150,
    "id": 48,
    "ip": "10.101.13.74",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -190,
    "y": 5,
    "z": 150,
    "id": 49,
    "ip": "10.101.13.124",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -170,
    "y": 5,
    "z": 150,
    "id": 50,
    "ip": "10.101.13.126",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -150,
    "y": 5,
    "z": 150,
    "id": 51,
    "ip": "10.101.13.116",
    "dep": "dep4",
    "type": 1,
    "typeName": "host"
}, {
    "x": -10,
    "y": 5,
    "z": 90,
    "id": 52,
    "ip": "10.101.20.112",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -30,
    "y": 5,
    "z": 90,
    "id": 53,
    "ip": "10.101.20.167",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -50,
    "y": 5,
    "z": 90,
    "id": 54,
    "ip": "10.101.20.143",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -70,
    "y": 5,
    "z": 90,
    "id": 55,
    "ip": "10.101.20.137",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -90,
    "y": 5,
    "z": 90,
    "id": 56,
    "ip": "10.101.20.122",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -10,
    "y": 5,
    "z": 120,
    "id": 57,
    "ip": "10.101.20.203",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -30,
    "y": 5,
    "z": 120,
    "id": 58,
    "ip": "10.101.20.118",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -50,
    "y": 5,
    "z": 120,
    "id": 59,
    "ip": "10.101.20.26",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -70,
    "y": 5,
    "z": 120,
    "id": 60,
    "ip": "10.101.20.205",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -90,
    "y": 5,
    "z": 120,
    "id": 61,
    "ip": "10.101.20.169",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -10,
    "y": 5,
    "z": 150,
    "id": 62,
    "ip": "10.101.20.104",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -30,
    "y": 5,
    "z": 150,
    "id": 63,
    "ip": "10.101.20.161",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -50,
    "y": 5,
    "z": 150,
    "id": 64,
    "ip": "10.101.20.35",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -70,
    "y": 5,
    "z": 150,
    "id": 65,
    "ip": "10.101.20.89",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": -90,
    "y": 5,
    "z": 150,
    "id": 66,
    "ip": "10.101.20.130",
    "dep": "tdep1",
    "type": 1,
    "typeName": "host"
}, {
    "x": 50,
    "y": 5,
    "z": 90,
    "id": 67,
    "ip": "10.101.21.89",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 70,
    "y": 5,
    "z": 90,
    "id": 68,
    "ip": "10.101.21.201",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 90,
    "y": 5,
    "z": 90,
    "id": 69,
    "ip": "10.101.21.161",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 110,
    "y": 5,
    "z": 90,
    "id": 70,
    "ip": "10.101.21.85",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 130,
    "y": 5,
    "z": 90,
    "id": 71,
    "ip": "10.101.21.159",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 150,
    "y": 5,
    "z": 90,
    "id": 72,
    "ip": "10.101.21.128",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 50,
    "y": 5,
    "z": 120,
    "id": 73,
    "ip": "10.101.21.56",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 70,
    "y": 5,
    "z": 120,
    "id": 74,
    "ip": "10.101.21.102",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 90,
    "y": 5,
    "z": 120,
    "id": 75,
    "ip": "10.101.21.176",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 110,
    "y": 5,
    "z": 120,
    "id": 76,
    "ip": "10.101.21.147",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 130,
    "y": 5,
    "z": 120,
    "id": 77,
    "ip": "10.101.21.226",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 150,
    "y": 5,
    "z": 120,
    "id": 78,
    "ip": "10.101.21.81",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 50,
    "y": 5,
    "z": 150,
    "id": 79,
    "ip": "10.101.21.217",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 70,
    "y": 5,
    "z": 150,
    "id": 80,
    "ip": "10.101.21.69",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 90,
    "y": 5,
    "z": 150,
    "id": 81,
    "ip": "10.101.21.169",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 110,
    "y": 5,
    "z": 150,
    "id": 82,
    "ip": "10.101.21.206",
    "dep": "tdep2",
    "type": 1,
    "typeName": "host"
}, {
    "x": 190,
    "y": 5,
    "z": 90,
    "id": 83,
    "ip": "10.101.81.204",
    "dep": "ddep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 220,
    "y": 5,
    "z": 90,
    "id": 84,
    "ip": "10.101.81.180",
    "dep": "ddep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 250,
    "y": 5,
    "z": 90,
    "id": 85,
    "ip": "10.101.81.33",
    "dep": "ddep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 190,
    "y": 5,
    "z": 120,
    "id": 86,
    "ip": "10.101.81.53",
    "dep": "ddep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 220,
    "y": 5,
    "z": 120,
    "id": 87,
    "ip": "10.101.81.220",
    "dep": "ddep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 190,
    "y": 5,
    "z": 40,
    "id": 88,
    "ip": "10.101.80.12",
    "dep": "gdep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 220,
    "y": 5,
    "z": 40,
    "id": 89,
    "ip": "10.101.80.66",
    "dep": "gdep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 250,
    "y": 5,
    "z": 40,
    "id": 90,
    "ip": "10.101.80.224",
    "dep": "gdep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 190,
    "y": 5,
    "z": 10,
    "id": 91,
    "ip": "10.101.80.22",
    "dep": "gdep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 220,
    "y": 5,
    "z": 10,
    "id": 92,
    "ip": "10.101.80.236",
    "dep": "gdep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 250,
    "y": 5,
    "z": 10,
    "id": 93,
    "ip": "10.101.80.173",
    "dep": "gdep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 190,
    "y": 5,
    "z": -40,
    "id": 94,
    "ip": "10.101.0.16",
    "dep": "ndep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 220,
    "y": 5,
    "z": -40,
    "id": 95,
    "ip": "10.101.0.113",
    "dep": "ndep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 250,
    "y": 5,
    "z": -40,
    "id": 96,
    "ip": "10.101.0.180",
    "dep": "ndep",
    "type": 1,
    "typeName": "host"
}, {
    "x": 250,
    "y": 5,
    "z": -100,
    "id": 97,
    "ip": "10.101.1.249",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 230,
    "y": 5,
    "z": -90,
    "id": 98,
    "ip": "10.101.1.239",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 210,
    "y": 5,
    "z": -100,
    "id": 99,
    "ip": "10.101.1.124",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 190,
    "y": 5,
    "z": -90,
    "id": 100,
    "ip": "10.101.1.136",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 170,
    "y": 5,
    "z": -100,
    "id": 101,
    "ip": "10.101.1.63",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 150,
    "y": 5,
    "z": -90,
    "id": 102,
    "ip": "10.101.1.57",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 130,
    "y": 5,
    "z": -100,
    "id": 103,
    "ip": "10.101.1.58",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 110,
    "y": 5,
    "z": -90,
    "id": 104,
    "ip": "10.101.1.81",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 90,
    "y": 5,
    "z": -100,
    "id": 105,
    "ip": "10.101.1.46",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 70,
    "y": 5,
    "z": -90,
    "id": 106,
    "ip": "10.101.1.113",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": 50,
    "y": 5,
    "z": -100,
    "id": 107,
    "ip": "10.101.1.217",
    "type": 2,
    "typeName": "server",
    "dep": "serverCenter"
}, {
    "x": -190,
    "z": -100,
    "y": 65,
    "ip": "10.101.10.0/24",
    "name": "R&D Dept.1",
    "id": 108,
    "type": 3,
    "typeName": "switch"
}, {
    "x": -50,
    "z": -115,
    "y": 65,
    "ip": "10.101.11.0/24",
    "name": "R&D Dept.2",
    "id": 109,
    "type": 3,
    "typeName": "switch"
}, {
    "x": -200,
    "z": 10,
    "y": 65,
    "ip": "10.101.12.0/24",
    "name": "R&D Dept.3",
    "id": 110,
    "type": 3,
    "typeName": "switch"
}, {
    "x": -190,
    "z": 120,
    "y": 65,
    "ip": "10.101.13.0/24",
    "name": "R&D Dept.4",
    "id": 111,
    "type": 3,
    "typeName": "switch"
}, {
    "x": -50,
    "z": 120,
    "y": 65,
    "ip": "10.101.20.0/24",
    "name": "Test Dept.1",
    "id": 112,
    "type": 3,
    "typeName": "switch"
}, {
    "x": 100,
    "z": 120,
    "y": 65,
    "ip": "10.101.21.0/24",
    "name": "Test Dept.2",
    "id": 113,
    "type": 3,
    "typeName": "switch"
}, {
    "x": 220,
    "z": 105,
    "y": 65,
    "ip": "10.101.81.0/24",
    "name": "Design Dept.",
    "id": 114,
    "type": 3,
    "typeName": "switch"
}, {
    "x": 220,
    "z": 25,
    "y": 65,
    "ip": "10.101.80.0/24",
    "name": "General Dept.",
    "id": 115,
    "type": 3,
    "typeName": "switch"
}, {
    "x": 220,
    "z": -40,
    "y": 65,
    "ip": "10.101.0.0/24",
    "name": "Network Center",
    "id": 116,
    "type": 3,
    "typeName": "switch"
}, {
    "x": 150,
    "z": -95,
    "y": 65,
    "ip": "10.101.1.0/24",
    "name": "Data Center",
    "id": 117,
    "type": 3,
    "typeName": "switch"
}, {
    "x": -120,
    "y": 110,
    "z": 10,
    "id": 118,
    "type": 3,
    "typeName": "switch"
}, {
    "x": 30,
    "y": 110,
    "z": 70,
    "id": 119,
    "type": 3,
    "typeName": "switch"
}, {
    "x": 150,
    "y": 110,
    "z": 65,
    "id": 120,
    "type": 3,
    "typeName": "switch"
}, {
    "x": 150,
    "y": 110,
    "z": -50,
    "id": 121,
    "type": 3,
    "typeName": "switch"
}, {
    "x": -120,
    "y": 110,
    "z": 40,
    "id": 122,
    "type": 5,
    "typeName": "detection"
}, {
    "x": 150,
    "y": 110,
    "z": -20,
    "id": 123,
    "type": 5,
    "typeName": "detection"
}, {
    "x": -85,
    "y": 125,
    "z": 10,
    "id": 124,
    "type": 6,
    "typeName": "firewall"
}, {
    "x": 150,
    "y": 98,
    "z": -75,
    "id": 125,
    "type": 6,
    "typeName": "firewall"
}, {
    "x": 10,
    "z": 10,
    "y": 160,
    "type": 4,
    "typeName": "router",
    "id": 126
}]
let nexus = {
    links: [],
    nodes: []
}
let nexus1 = {
    nodes: list,
    links: [{
        "target": 1,
        "source": 108
    }, {
        "target": 2,
        "source": 108
    }, {
        "target": 3,
        "source": 108
    }, {
        "target": 4,
        "source": 108
    }, {
        "target": 5,
        "source": 108
    }, {
        "target": 6,
        "source": 108
    }, {
        "target": 7,
        "source": 108
    }, {
        "target": 8,
        "source": 108
    }, {
        "target": 9,
        "source": 108
    }, {
        "target": 10,
        "source": 108
    }, {
        "target": 11,
        "source": 108
    }, {
        "target": 12,
        "source": 108
    }, {
        "target": 13,
        "source": 108
    }, {
        "target": 14,
        "source": 108
    }, {
        "target": 15,
        "source": 109
    }, {
        "target": 16,
        "source": 109
    }, {
        "target": 17,
        "source": 109
    }, {
        "target": 18,
        "source": 109
    }, {
        "target": 19,
        "source": 109
    }, {
        "target": 20,
        "source": 109
    }, {
        "target": 21,
        "source": 109
    }, {
        "target": 22,
        "source": 109
    }, {
        "target": 23,
        "source": 109
    }, {
        "target": 24,
        "source": 109
    }, {
        "target": 25,
        "source": 110
    }, {
        "target": 26,
        "source": 110
    }, {
        "target": 27,
        "source": 110
    }, {
        "target": 28,
        "source": 110
    }, {
        "target": 29,
        "source": 110
    }, {
        "target": 30,
        "source": 110
    }, {
        "target": 31,
        "source": 110
    }, {
        "target": 32,
        "source": 110
    }, {
        "target": 33,
        "source": 110
    }, {
        "target": 34,
        "source": 110
    }, {
        "target": 35,
        "source": 110
    }, {
        "target": 36,
        "source": 110
    }, {
        "target": 37,
        "source": 111
    }, {
        "target": 38,
        "source": 111
    }, {
        "target": 39,
        "source": 111
    }, {
        "target": 40,
        "source": 111
    }, {
        "target": 41,
        "source": 111
    }, {
        "target": 42,
        "source": 111
    }, {
        "target": 43,
        "source": 111
    }, {
        "target": 44,
        "source": 111
    }, {
        "target": 45,
        "source": 111
    }, {
        "target": 46,
        "source": 111
    }, {
        "target": 47,
        "source": 111
    }, {
        "target": 48,
        "source": 111
    }, {
        "target": 49,
        "source": 111
    }, {
        "target": 50,
        "source": 111
    }, {
        "target": 51,
        "source": 111
    }, {
        "target": 52,
        "source": 112
    }, {
        "target": 53,
        "source": 112
    }, {
        "target": 54,
        "source": 112
    }, {
        "target": 55,
        "source": 112
    }, {
        "target": 56,
        "source": 112
    }, {
        "target": 57,
        "source": 112
    }, {
        "target": 58,
        "source": 112
    }, {
        "target": 59,
        "source": 112
    }, {
        "target": 60,
        "source": 112
    }, {
        "target": 61,
        "source": 112
    }, {
        "target": 62,
        "source": 112
    }, {
        "target": 63,
        "source": 112
    }, {
        "target": 64,
        "source": 112
    }, {
        "target": 65,
        "source": 112
    }, {
        "target": 66,
        "source": 112
    }, {
        "target": 67,
        "source": 113
    }, {
        "target": 68,
        "source": 113
    }, {
        "target": 69,
        "source": 113
    }, {
        "target": 70,
        "source": 113
    }, {
        "target": 71,
        "source": 113
    }, {
        "target": 72,
        "source": 113
    }, {
        "target": 73,
        "source": 113
    }, {
        "target": 74,
        "source": 113
    }, {
        "target": 75,
        "source": 113
    }, {
        "target": 76,
        "source": 113
    }, {
        "target": 77,
        "source": 113
    }, {
        "target": 78,
        "source": 113
    }, {
        "target": 79,
        "source": 113
    }, {
        "target": 80,
        "source": 113
    }, {
        "target": 81,
        "source": 113
    }, {
        "target": 82,
        "source": 113
    }, {
        "target": 83,
        "source": 114
    }, {
        "target": 84,
        "source": 114
    }, {
        "target": 85,
        "source": 114
    }, {
        "target": 86,
        "source": 114
    }, {
        "target": 87,
        "source": 114
    }, {
        "target": 88,
        "source": 115
    }, {
        "target": 89,
        "source": 115
    }, {
        "target": 90,
        "source": 115
    }, {
        "target": 91,
        "source": 115
    }, {
        "target": 92,
        "source": 115
    }, {
        "target": 93,
        "source": 115
    }, {
        "target": 94,
        "source": 116
    }, {
        "target": 95,
        "source": 116
    }, {
        "target": 96,
        "source": 116
    }, {
        "target": 97,
        "source": 117
    }, {
        "target": 98,
        "source": 117
    }, {
        "target": 99,
        "source": 117
    }, {
        "target": 100,
        "source": 117
    }, {
        "target": 101,
        "source": 117
    }, {
        "target": 102,
        "source": 117
    }, {
        "target": 103,
        "source": 117
    }, {
        "target": 104,
        "source": 117
    }, {
        "target": 105,
        "source": 117
    }, {
        "target": 106,
        "source": 117
    }, {
        "target": 107,
        "source": 117
    }, {
        "target": 108,
        "source": 118
    }, {
        "target": 109,
        "source": 118
    }, {
        "target": 110,
        "source": 118
    }, {
        "target": 111,
        "source": 118
    }, {
        "target": 112,
        "source": 119
    }, {
        "target": 113,
        "source": 119
    }, {
        "target": 114,
        "source": 120
    }, {
        "target": 115,
        "source": 120
    }, {
        "target": 116,
        "source": 121
    }, {
        "target": 125,
        "source": 121
    }, {
        "target": 117,
        "source": 125
    }, {
        "target": 123,
        "source": 121
    }, {
        "target": 118,
        "source": 124
    }, {
        "target": 122,
        "source": 118
    }, {
        "target": 124,
        "source": 126
    }, {
        "target": 119,
        "source": 126
    }, {
        "target": 120,
        "source": 126
    }, {
        "target": 121,
        "source": 126
    }]
}
  */