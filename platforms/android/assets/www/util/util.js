var getStationsInfoScraper = function () {
    var stationsData = [];
    var cards = document.querySelectorAll('.row.card');
    for (var i = 0; i < cards.length; i++) {
        var stationImageUrl = cards[i].getElementsByClassName('img-responsive')[0].src;
        var cardDetails = cards[i].getElementsByClassName('copy-col')[0];
        var stationName = cardDetails.getElementsByTagName('h4')[0].innerText;
        var stationDescription = cardDetails.getElementsByTagName('p')[0].innerText;
        stationsData.push({
            imgUrl: stationImageUrl,
            name: stationName,
            desc: stationDescription
        });
    }
    console.log(JSON.stringify(stationsData, null, 2));
}

/* Get https://somafm.com/channels.xml, then convert to JSON, then extract necessary data */
var getStationsDataFromChannelsXml = function () {
    var stationsData = [];
    for (var i = 0; i < channels.length; i++) {
        var id = channels[i]['@attributes'].id;
        var title = channels[i].title;
        var desc = channels[i].description;
        var imgUrl = channels[i].largeimage;
        stationsData.push({
            id: id,
            title: title,
            desc: desc,
            imgUrl: imgUrl
        })
    }
    console.log(JSON.stringify(stationsData, null, 2));
}

/* Get https://somafm.com/channels.xml, then convert to JSON, then extract necessary data, img ref to local files */
var getStationsDataFromChannelsXml2 = function () {
    var stationsData = [];
    for (var i = 0; i < channels.length; i++) {
        var id = channels[i]['-id'];
        var title = channels[i].title;
        var desc = channels[i].description;
        var imgUrl = channels[i].image;
        var img = imgUrl.slice(imgUrl.lastIndexOf("/")+1, imgUrl.length);
        stationsData.push({
            id: id,
            title: title,
            desc: desc,
            img: img
        })
    }
    console.log(JSON.stringify(stationsData, null, 2));
}