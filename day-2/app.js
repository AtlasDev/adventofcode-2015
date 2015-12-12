var fs = require('fs');

var calculateSurface = function (input) {
    var splitted = input.split("x");
    var lw = splitted[0]*splitted[1];
    var wh = splitted[1]*splitted[2];
    var hl = splitted[2]*splitted[0];
    var extra = Math.min(lw, wh, hl);
    var total = 2*lw + 2*wh + 2*hl + extra;
    return total;
}

var calculateRibbon = function (input) {
    var splitted = input.split("x");
    var bow = splitted[0]*splitted[1]*splitted[2];
    var sFace = Math.min(splitted[0], splitted[1], splitted[2]);
    splitted.splice(splitted.indexOf(sFace.toString()), 1);
    var mFace = Math.min(splitted[0], splitted[1]);
    var wrap = sFace+sFace + mFace+mFace;
    var total = bow + wrap;
    return total;
}

fs.readFile('input.txt', 'utf8', function (err, input) {
    var array = input.trim().split("\n");
    var area = 0;
    var ribbon = 0;
    for (var i = 0; i < array.length; i++) {
        area += calculateSurface(array[i].trim());
        ribbon += calculateRibbon(array[i].trim());
        if(i == array.length - 1) {
            console.log("The elves need to order " + area + " square feet wrapping paper. (Part 1)");
            console.log("The elves need to order " + ribbon + " feet ribbon. (Part 2)");
        }
    }
});
