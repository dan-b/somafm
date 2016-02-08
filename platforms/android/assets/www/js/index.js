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
        $scope.stations = null;
        $scope.init = function () {
            $scope.stations = stationsJson;
        }
    }
);

var stationsJson = [
    {
        "name": "Groove Salad",
        "desc": "A nicely chilled plate of ambient/downtempo beats and grooves.",
        "img": "groovesalad120.png"
    },
    {
        "name": "Drone Zone",
        "desc": "Served best chilled, safe with most medications. Atmospheric textures with minimal beats.",
        "img": "dronezone120.jpg"
    },
    {
        "name": "Indie Pop Rocks!",
        "desc": "New and classic favorite indie pop tracks.",
        "img": "indychick.jpg"
    },
    {
        "name": "Christmas Lounge",
        "desc": "Chilled holiday grooves and classic winter lounge tracks. (Kid and Parent safe!)",
        "img": "christmaslounge120.png"
    },
    {
        "name": "Space Station Soma",
        "desc": "Tune in, turn on, space out. Spaced-out ambient and mid-tempo electronica.",
        "img": "sss.jpg"
    },
    {
        "name": "Underground 80s",
        "desc": "Early 80s UK Synthpop and a bit of New Wave.",
        "img": "u80s-120.png"
    },
    {
        "name": "Secret Agent",
        "desc": "The soundtrack for your stylish, mysterious, dangerous life. For Spies and PIs too!",
        "img": "secretagent120.jpg"
    },
    {
        "name": "Lush",
        "desc": "Sensuous and mellow vocals, mostly female, with an electronic influence.",
        "img": "lush-x120.jpg"
    },
    {
        "name": "Beat Blender",
        "desc": "A late night blend of deep-house and downtempo chill.",
        "img": "blender120.png"
    },
    {
        "name": "Deep Space One",
        "desc": "Deep ambient electronic, experimental and space music. For inner and outer space exploration.",
        "img": "deepspaceone120.gif"
    },
    {
        "name": "Boot Liquor",
        "desc": "Americana Roots music for Cowhands, Cowpokes and Cowtippers",
        "img": "bootliquor120.jpg"
    },
    {
        "name": "Folk Forward",
        "desc": "Indie Folk, Alt-folk and the occasional folk classics.",
        "img": "folkfwd120.jpg"
    },
    {
        "name": "Sonic Universe",
        "desc": "Transcending the world of jazz with eclectic, avant-garde takes on tradition.",
        "img": "sonicuniverse120.jpg"
    },
    {
        "name": "Suburbs of Goa",
        "desc": "Desi-influenced Asian world beats and beyond.",
        "img": "sog120.jpg"
    },
    {
        "name": "PopTron",
        "desc": "Electropop and indie dance rock with sparkle and pop.",
        "img": "poptron120.png"
    },
    {
        "name": "BAGeL Radio",
        "desc": "What alternative rock radio should sound like.",
        "img": "bagel120.png"
    },
    {
        "name": "DEF CON Radio",
        "desc": "Music for Hacking. The DEF CON Year-Round Channel.",
        "img": "defcon120.png"
    },
    {
        "name": "Illinois Street Lounge",
        "desc": "Classic bachelor pad, playful exotica and vintage music of tomorrow.",
        "img": "illstreet.jpg"
    },
    {
        "name": "The Trip",
        "desc": "Progressive house / trance. Tip top tunes.",
        "img": "thetrip120.jpg"
    },
    {
        "name": "cliqhop idm",
        "desc": "Blips'n'beeps backed mostly w/beats. Intelligent Dance Music.",
        "img": "cliqhop120.png"
    },
    {
        "name": "Fluid",
        "desc": "NEW! Drown in the electronic sound of instrumental hiphop, future soul and liquid trap.",
        "img": "fluid120.jpg"
    },
    {
        "name": "Left Coast 70s",
        "desc": "NEW! Mellow album rock from the Seventies. Yacht friendly.",
        "img": "seventies120.jpg"
    },
    {
        "name": "ThistleRadio",
        "desc": "Exploring music from Celtic roots and branches",
        "img": "thistle120.png"
    },
    {
        "name": "Seven Inch Soul",
        "desc": "Vintage soul tracks from the original 45 RPM vinyl.",
        "img": "7soul120.png"
    },
    {
        "name": "Digitalis",
        "desc": "Digitally affected analog rock to calm the agitated heart.",
        "img": "digitalis120.png"
    },
    {
        "name": "Dub Step Beyond",
        "desc": "Dubstep, Dub and Deep Bass. May damage speakers at high volume.",
        "img": "dubstep120.png"
    },
    {
        "name": "Mission Control",
        "desc": "Celebrating NASA and Space Explorers everywhere.",
        "img": "missioncontrol120.jpg"
    },
    {
        "name": "Christmas Rocks!",
        "desc": "Have your self an indie/alternative holiday season!",
        "img": "xmasrocks120.png"
    },
    {
        "name": "Xmas in Frisko",
        "desc": "SomaFM's wacky and eclectic holiday mix. Not for the easily offended.",
        "img": "xmasinfrisco120.jpg"
    },
    {
        "name": "Black Rock FM",
        "desc": "From the Playa to the world, back for the 2015 Burning Man festival.",
        "img": "1023brc.jpg"
    },
    {
        "name": "Doomed",
        "desc": "Dark industrial/ambient music for tortured souls.",
        "img": "doomed120.png"
    },
    {
        "name": "Jolly Ol' Soul",
        "desc": "Where we cut right to the soul of the season.",
        "img": "jollysoul120.png"
    },
    {
        "name": "Covers",
        "desc": "Just covers. Songs you know by artists you don't. We've got you covered.",
        "img": "covers120.jpg"
    },
    {
        "name": "SF 10-33",
        "desc": "Ambient music mixed with the sounds of San Francisco public safety radio traffic.",
        "img": "sf1033120.png"
    },
    {
        "name": "Metal Detector",
        "desc": "NEW! From black to doom, prog to sludge, thrash to post, stoner to crossover, punk to industrial.",
        "img": "metal120.png"
    },
    {
        "name": "Earwaves",
        "desc": "Spanning the history of electronic and experimental music from the early pioneers to the latest innovators.",
        "img": "earwaves120.jpg"
    }
];