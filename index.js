var moment = require('moment');
var getBraziliansYearHolidays = require('./lib/brazilianHolidays');

var ehDiaUtil = function(date) {

    var givenDate = moment(date);
    var dayOfWeek = givenDate.day();
    var isSaturday = dayOfWeek === 6;
    var isSunday = dayOfWeek === 0;

    if (isSaturday || isSunday) {
        return false;
    }

    var holidays = getBraziliansYearHolidays(givenDate.year());
    for (var i = 0; i < holidays.length; i++) {
        var holiday = holidays[i];
        if (holiday.date.isSame(givenDate, 'day')) {
            return false;
        }
    }

    return true;
};

module.exports = ehDiaUtil;