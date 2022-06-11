(function() {
    "use strict";
    
    var Images = [
        '/images/sites/random/dora-fly.png',
        '/images/sites/random/dora-cast-min.png',
        '/images/sites/random/dora-allsix.png',
        '/images/sites/random/dora-family-fly.png',
        '/images/sites/random/dora-cute.png',
        '/images/sites/random/dora-door.png',
        '/images/sites/random/dora-draw.png',
        '/images/sites/random/dora-flying.png',
        '/images/sites/random/dora-friends.png',
        '/images/sites/random/dora-logo-all.png',
        '/images/sites/random/dora-stand.png',
        '/images/sites/random/dora-time.png',
        '/images/sites/random/dora-time-new.png',
        '/images/sites/random/dora-two.png',
        '/images/sites/random/dora-sailing.png',
        '/images/sites/random/dora-mantel.png',
        '/images/sites/random/dora-family.png'
    ];

    function getRandomImage(images) {
        var num = Math.floor(Math.random() * images.length),
            pic = images[num],
            imgString = '<img src="' + pic + '" id="dora-three" alt="Doraemon-Stand By Me!" title="Doraemon-Stand By Me!" />';

        return imgString;
    }

    $("#random-images").append(getRandomImage(Images));

})();