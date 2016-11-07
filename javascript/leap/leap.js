
var Year = function(year) {
    this.year = year;
};

Year.prototype.isLeap = function() {
    var year = this.year;

    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 === 0) {
        return false;
    } else {
        return true;
    }
};

module.exports = Year;
