var LeapYear = function() {};


LeapYear.prototype.isLeap = function(input) {
  'use strict';

  if(input % 4 | 400 === 0)
  {
    return true;
  }
  else if (input % 100 === 0) {
    return false;
  }
  else {
    return false;
  }
};

module.exports = LeapYear;
