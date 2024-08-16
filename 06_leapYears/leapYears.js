const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR";

    let divisibleByFour        = year % 4   == 0;    
    let divisibleByHundred     = year % 100 == 0;
    let divisibleByFourHundred = year % 400 == 0;

    if (!divisibleByFour) return false;
    if (divisibleByHundred && divisibleByFourHundred) return true;
    if (divisibleByHundred) return false;
    return true
};

// Do not edit below this line
module.exports = leapYears;
