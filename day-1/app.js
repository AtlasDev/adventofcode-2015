var fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, input) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    input.trim();
    var level = 0;
    var hasBasement = false
    for (var i = 0; i < input.length; i++) {
        if(input[i] == "(") {
            level += 1;
        } else if(input[i] == ")") {
            level -= 1;
        }
        if(!hasBasement) {
            if(level == -1) {
                var basementLevel = i+1;
                console.log("Santa is in the basement at character position "+ basementLevel +". (Part 2)");
                hasBasement = true;
            }
        }
        if(i == input.length - 1) {
            console.log("Santa has to go to floor "+level+". (Part 1)");
        }
    }
});
