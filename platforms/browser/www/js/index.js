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
        "imgUrl": "http://api.somafm.com/logos/256/7soul256.png"
    },
    {
        "id": "bagel",
        "title": "BAGeL Radio",
        "desc": "What alternative rock radio should sound like.",
        "imgUrl": "http://api.somafm.com/logos/256/bagel256.jpg"
    },
    {
        "id": "beatblender",
        "title": "Beat Blender",
        "desc": "A late night blend of deep-house and downtempo chill.",
        "imgUrl": "http://api.somafm.com/logos/256/beatblender256.png"
    },
    {
        "id": "bootliquor",
        "title": "Boot Liquor",
        "desc": "Americana Roots music for Cowhands, Cowpokes and Cowtippers",
        "imgUrl": "http://api.somafm.com/logos/256/bootliquor256.png"
    },
    {
        "id": "brfm",
        "title": "Black Rock FM",
        "desc": "From the Playa to the world, back for the 2015 Burning Man festival.",
        "imgUrl": "http://api.somafm.com/logos/256/brfm256.jpg"
    },
    {
        "id": "christmas",
        "title": "Christmas Lounge",
        "desc": "Chilled holiday grooves and classic winter lounge tracks. (Kid and Parent safe!)",
        "imgUrl": "http://api.somafm.com/logos/256/christmas256.png"
    },
    {
        "id": "cliqhop",
        "title": "cliqhop idm",
        "desc": "Blips'n'beeps backed mostly w/beats. Intelligent Dance Music.",
        "imgUrl": "http://api.somafm.com/logos/256/cliqhop256.png"
    },
    {
        "id": "covers",
        "title": "Covers",
        "desc": "Just covers. Songs you know by artists you don't. We've got you covered.",
        "imgUrl": "http://api.somafm.com/logos/256/covers256.png"
    },
    {
        "id": "deepspaceone",
        "title": "Deep Space One",
        "desc": "Deep ambient electronic, experimental and space music. For inner and outer space exploration.",
        "imgUrl": "http://api.somafm.com/logos/256/deepspaceone256.png"
    },
    {
        "id": "defcon",
        "title": "DEF CON Radio",
        "desc": "Music for Hacking. The DEF CON Year-Round Channel.",
        "imgUrl": "http://api.somafm.com/logos/256/defcon256.png"
    },
    {
        "id": "digitalis",
        "title": "Digitalis",
        "desc": "Digitally affected analog rock to calm the agitated heart.",
        "imgUrl": "http://api.somafm.com/logos/256/digitalis256.png"
    },
    {
        "id": "doomed",
        "title": "Doomed",
        "desc": "Dark industrial/ambient music for tortured souls.",
        "imgUrl": "http://api.somafm.com/logos/256/doomed256.png"
    },
    {
        "id": "dronezone",
        "title": "Drone Zone",
        "desc": "Served best chilled, safe with most medications. Atmospheric textures with minimal beats.",
        "imgUrl": "http://api.somafm.com/logos/256/dronezone256.png"
    },
    {
        "id": "dubstep",
        "title": "Dub Step Beyond",
        "desc": "Dubstep, Dub and Deep Bass. May damage speakers at high volume.",
        "imgUrl": "http://api.somafm.com/logos/256/dubstep256.png"
    },
    {
        "id": "earwaves",
        "title": "Earwaves",
        "desc": "Spanning the history of electronic and experimental music from the early pioneers to the latest innovators.",
        "imgUrl": "http://api.somafm.com/logos/256/earwaves256.jpg"
    },
    {
        "id": "fluid",
        "title": "Fluid",
        "desc": "NEW! Drown in the electronic sound of instrumental hiphop, future soul and liquid trap.",
        "imgUrl": "http://api.somafm.com/logos/256/fluid256.jpg"
    },
    {
        "id": "folkfwd",
        "title": "Folk Forward",
        "desc": "Indie Folk, Alt-folk and the occasional folk classics.",
        "imgUrl": "http://api.somafm.com/logos/256/folkfwd256.png"
    },
    {
        "id": "groovesalad",
        "title": "Groove Salad",
        "desc": "A nicely chilled plate of ambient/downtempo beats and grooves.",
        "imgUrl": "http://api.somafm.com/logos/256/groovesalad256.png"
    },
    {
        "id": "illstreet",
        "title": "Illinois Street Lounge",
        "desc": "Classic bachelor pad, playful exotica and vintage music of tomorrow."
    },
    {
        "id": "indiepop",
        "title": "Indie Pop Rocks!",
        "desc": "New and classic favorite indie pop tracks.",
        "imgUrl": "http://api.somafm.com/logos/256/indiepop256.png"
    },
    {
        "id": "jollysoul",
        "title": "Jolly Ol' Soul",
        "desc": "Where we cut right to the soul of the season.",
        "imgUrl": "http://api.somafm.com/logos/256/jollysoul256.png"
    },
    {
        "id": "lush",
        "title": "Lush",
        "desc": "Sensuous and mellow vocals, mostly female, with an electronic influence.",
        "imgUrl": "http://api.somafm.com/logos/256/lush256.png"
    },
    {
        "id": "missioncontrol",
        "title": "Mission Control",
        "desc": "Celebrating NASA and Space Explorers everywhere.",
        "imgUrl": "http://api.somafm.com/logos/256/missioncontrol256.png"
    },
    {
        "id": "poptron",
        "title": "PopTron",
        "desc": "Electropop and indie dance rock with sparkle and pop.",
        "imgUrl": "http://api.somafm.com/logos/256/poptron256.png"
    },
    {
        "id": "secretagent",
        "title": "Secret Agent",
        "desc": "The soundtrack for your stylish, mysterious, dangerous life. For Spies and PIs too!",
        "imgUrl": "http://api.somafm.com/logos/256/secretagent256.png"
    },
    {
        "id": "seventies",
        "title": "Left Coast 70s",
        "desc": "NEW! Mellow album rock from the Seventies. Yacht friendly.",
        "imgUrl": "http://api.somafm.com/logos/256/seventies256.jpg"
    },
    {
        "id": "sf1033",
        "title": "SF 10-33",
        "desc": "Ambient music mixed with the sounds of San Francisco public safety radio traffic.",
        "imgUrl": "http://api.somafm.com/logos/256/sf1033256.png"
    },
    {
        "id": "sonicuniverse",
        "title": "Sonic Universe",
        "desc": "Transcending the world of jazz with eclectic, avant-garde takes on tradition.",
        "imgUrl": "http://api.somafm.com/logos/256/sonicuniverse256.png"
    },
    {
        "id": "spacestation",
        "title": "Space Station Soma",
        "desc": "Tune in, turn on, space out. Spaced-out ambient and mid-tempo electronica.",
        "imgUrl": "http://api.somafm.com/logos/256/spacestation256.png"
    },
    {
        "id": "suburbsofgoa",
        "title": "Suburbs of Goa",
        "desc": "Desi-influenced Asian world beats and beyond.",
        "imgUrl": "http://api.somafm.com/logos/256/suburbsofgoa256.png"
    },
    {
        "id": "thetrip",
        "title": "The Trip",
        "desc": "Progressive house / trance. Tip top tunes.",
        "imgUrl": "http://api.somafm.com/logos/256/thetrip256.jpg"
    },
    {
        "id": "thistle",
        "title": "ThistleRadio",
        "desc": "Exploring music from Celtic roots and branches",
        "imgUrl": "http://api.somafm.com/logos/256/thistle256.jpg"
    },
    {
        "id": "u80s",
        "title": "Underground 80s",
        "desc": "Early 80s UK Synthpop and a bit of New Wave.",
        "imgUrl": "http://api.somafm.com/logos/256/u80s256.png"
    },
    {
        "id": "xmasinfrisko",
        "title": "Xmas in Frisko",
        "desc": "SomaFM's wacky and eclectic holiday mix. Not for the easily offended.",
        "imgUrl": "http://api.somafm.com/logos/256/xmasinfrisko256.jpg"
    },
    {
        "id": "xmasrocks",
        "title": "Christmas Rocks!",
        "desc": "Have your self an indie/alternative holiday season!",
        "imgUrl": "http://api.somafm.com/logos/256/xmasrocks256.png"
    },
    {
        "id": "metal",
        "title": "Metal Detector",
        "desc": "NEW! From black to doom, prog to sludge, thrash to post, stoner to crossover, punk to industrial.",
        "imgUrl": "http://api.somafm.com/logos/256/metal256.png"
    }
];