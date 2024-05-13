/*  
    This program rotates banners every time the web page is reloaded.
*/
var banner = [
["https://mycourses.spcollege.edu/d2l/home/325335", "img/money_growing_1.jpg"],
["https://mycourses.spcollege.edu/d2l/home/325335", "img/money_growing_2.jpg"],
["https://mycourses.spcollege.edu/d2l/home/325335", "img/money_growing_3.jpg"],
["https://mycourses.spcollege.edu/d2l/home/325335", "img/US_dollars.jpg"]
];
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
shuffle(banner);
document.getElementById('ad-container').innerHTML = '<a href="'+banner[0][0]+'" target="_blank" rel="nofollow"><img src="'+banner[0][1]+'" height="250" width="500" alt="Money is growing banner ad" /></a>';