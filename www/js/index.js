/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();*/

var radio = angular.module('radioApp', ['ngMaterial']);
radio.controller('stationsCtrl', function($scope) {
        $scope.player = null;
        $scope.streamUrl = "http://ice.somafm.com/";
        $scope.stations = null;
        $scope.currentStation = null;
        $scope.init = function () {
            $scope.stations = stationsJson;
            $scope.player = document.querySelector('audio');
        }
        $scope.selectStation = function (station) {
            $scope.currentStation = station;
            $scope.player.src = $scope.streamUrl + station.id;
            $scope.player.play();
        }
    }
);

var stationsJson = [
    {
        "id": "7soul",
        "title": "Seven Inch Soul",
        "desc": "Vintage soul tracks from the original 45 RPM vinyl.",
        "img": "7soul120.png"
    },
    {
        "id": "bagel",
        "title": "BAGeL Radio",
        "desc": "What alternative rock radio should sound like. ",
        "img": "bagel120.png"
    },
    {
        "id": "beatblender",
        "title": "Beat Blender",
        "desc": "A late night blend of deep-house and downtempo chill.",
        "img": "blender120.png"
    },
    {
        "id": "bootliquor",
        "title": "Boot Liquor",
        "desc": "Americana Roots music for Cowhands, Cowpokes and Cowtippers",
        "img": "bootliquor120.jpg"
    },
    {
        "id": "brfm",
        "title": "Black Rock FM",
        "desc": "From the Playa to the world, back for the 2015 Burning Man festival.",
        "img": "1023brc.jpg"
    },
    {
        "id": "cliqhop",
        "title": "cliqhop idm",
        "desc": "Blips'n'beeps backed mostly w/beats. Intelligent Dance Music.",
        "img": "cliqhop120.png"
    },
    {
        "id": "covers",
        "title": "Covers",
        "desc": "Just covers. Songs you know by artists you don't. We've got you covered. ",
        "img": "covers120.jpg"
    },
    {
        "id": "deepspaceone",
        "title": "Deep Space One",
        "desc": "Deep ambient electronic, experimental and space music. For inner and outer space exploration.",
        "img": "deepspaceone120.gif"
    },
    {
        "id": "defcon",
        "title": "DEF CON Radio",
        "desc": "Music for Hacking. The DEF CON Year-Round Channel.",
        "img": "defcon120.png"
    },
    {
        "id": "digitalis",
        "title": "Digitalis",
        "desc": "Digitally affected analog rock to calm the agitated heart.",
        "img": "digitalis120.png"
    },
    {
        "id": "doomed",
        "title": "Doomed",
        "desc": "Dark industrial/ambient music for tortured souls. ",
        "img": "doomed120.png"
    },
    {
        "id": "dronezone",
        "title": "Drone Zone",
        "desc": "Served best chilled, safe with most medications. Atmospheric textures with minimal beats.",
        "img": "dronezone120.jpg"
    },
    {
        "id": "dubstep",
        "title": "Dub Step Beyond",
        "desc": "Dubstep, Dub and Deep Bass. May damage speakers at high volume.",
        "img": "dubstep120.png"
    },
    {
        "id": "earwaves",
        "title": "Earwaves",
        "desc": "Spanning the history of electronic and experimental music from the early pioneers to the latest innovators. ",
        "img": "earwaves120.jpg"
    },
    {
        "id": "fluid",
        "title": "Fluid",
        "desc": "NEW! Drown in the electronic sound of instrumental hiphop, future soul and liquid trap.",
        "img": "fluid120.jpg"
    },
    {
        "id": "folkfwd",
        "title": "Folk Forward",
        "desc": "Indie Folk, Alt-folk and the occasional folk classics. ",
        "img": "folkfwd120.jpg"
    },
    {
        "id": "groovesalad",
        "title": "Groove Salad",
        "desc": "A nicely chilled plate of ambient/downtempo beats and grooves.",
        "img": "groovesalad120.png"
    },
    {
        "id": "illstreet",
        "title": "Illinois Street Lounge",
        "desc": "Classic bachelor pad, playful exotica and vintage music of tomorrow.",
        "img": "illstreet.jpg"
    },
    {
        "id": "indiepop",
        "title": "Indie Pop Rocks!",
        "desc": "New and classic favorite indie pop tracks.",
        "img": "indychick.jpg"
    },
    {
        "id": "lush",
        "title": "Lush",
        "desc": "Sensuous and mellow vocals, mostly female, with an electronic influence.",
        "img": "lush-x120.jpg"
    },
    {
        "id": "missioncontrol",
        "title": "Mission Control",
        "desc": "Celebrating NASA and Space Explorers everywhere.",
        "img": "missioncontrol120.jpg"
    },
    {
        "id": "poptron",
        "title": "PopTron",
        "desc": "Electropop and indie dance rock with sparkle and pop.",
        "img": "poptron120.png"
    },
    {
        "id": "secretagent",
        "title": "Secret Agent",
        "desc": "The soundtrack for your stylish, mysterious, dangerous life. For Spies and PIs too!",
        "img": "secretagent120.jpg"
    },
    {
        "id": "seventies",
        "title": "Left Coast 70s",
        "desc": "NEW! Mellow album rock from the Seventies. Yacht friendly.",
        "img": "seventies120.jpg"
    },
    {
        "id": "sf1033",
        "title": "SF 10-33",
        "desc": "Ambient music mixed with the sounds of San Francisco public safety radio traffic.",
        "img": "sf1033120.png"
    },
    {
        "id": "sonicuniverse",
        "title": "Sonic Universe",
        "desc": "Transcending the world of jazz with eclectic, avant-garde takes on tradition.",
        "img": "sonicuniverse120.jpg"
    },
    {
        "id": "spacestation",
        "title": "Space Station Soma",
        "desc": "Tune in, turn on, space out. Spaced-out ambient and mid-tempo electronica.",
        "img": "sss.jpg"
    },
    {
        "id": "suburbsofgoa",
        "title": "Suburbs of Goa",
        "desc": "Desi-influenced Asian world beats and beyond.",
        "img": "sog120.jpg"
    },
    {
        "id": "thetrip",
        "title": "The Trip",
        "desc": "Progressive house / trance. Tip top tunes.",
        "img": "thetrip120.jpg"
    },
    {
        "id": "thistle",
        "title": "ThistleRadio",
        "desc": "Exploring music from Celtic roots and branches",
        "img": "thistle120.png"
    },
    {
        "id": "u80s",
        "title": "Underground 80s",
        "desc": "Early 80s UK Synthpop and a bit of New Wave.",
        "img": "u80s-120.png"
    },
    {
        "id": "metal",
        "title": "Metal Detector",
        "desc": "NEW! From black to doom, prog to sludge, thrash to post, stoner to crossover, punk to industrial.",
        "img": "metal120.png"
    }
];