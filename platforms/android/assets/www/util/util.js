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