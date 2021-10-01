const repeatString = function(str, num) {
    for (let i = 0; i < 1000; i++) {
        str.repeat(i);
    }
    if (num < 0) {
        return 'ERROR'
    } else if (str == '') {
        return str;
    } else {
        return str.repeat(num);
    }
};

// Do not edit below this line
module.exports = repeatString;
