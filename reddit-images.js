$(document).ready(function() {
    getRedditJSON();
})

function getRedditJSON() {
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'https://www.reddit.com/r/softwaregore/hot.json?limit=100',
        success: onSuccess,
        error: function(err) { console.log(err) }
    })
}



function onSuccess(redditJson) {
    //think about clearing html elements to store image
    var rndNum = Math.floor(Math.random()*100) + 1;
    var attempts = 10;
    var giveUp = false;
    var jumboImage = document.getElementById("rndImg");
    var jumboImageCaption = document.getElementById("rndImgCap");

    //ten attempts to find a post with an image
    while (attempts > 0) {
        if(!redditJson.data.children[rndNum].data.preview.enabled) {
            rndNum = Math.floor(Math.random()*100) + 1;
            attempts -= 1;
            if(attempts == 0) { giveUp = true; }
        }
        else {
            attempts = 0;
        }
    }
    var caption = redditJson.data.children[rndNum].data.title;
    var pic = redditJson.data.children[rndNum].data.preview.images[0].source.url;
    //gets rid of the encoding on '&' which would return a 403 err otherwise
    pic = pic.replace(/amp;/ig, '');
    console.log(pic);
    if(!giveUp) {
        var windowPerc = 0.5;
        console.log(jumboImage.width > window.innerWidth);
        console.log(jumboImage.height > window.innerHeight);
        jumboImage.src = pic;
        if(jumboImage.width > window.innerWidth ||
        jumboImage.height > window.innerHeight) {
            windowPerc = 0.9;
        }
        if(jumboImage.width > jumboImage.height) {
            console.log("width GREATER THAN height");
            jumboImage.width = windowPerc*window.innerWidth;
        }
        else {
            console.console.log("width LESSER THAN height");
            jumboImage.width = windowPerc*window.innerHeight;
        }
        jumboImageCaption.innerHTML = caption + "<br><i>- A random image grabbed from r/softwaregore";
    }

}
