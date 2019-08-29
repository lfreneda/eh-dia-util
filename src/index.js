const moment = require('moment')
const { isNationalHoliday } = require('./getNationalHolidays')
const { isStateHoliday } = require('./getStateHolidays')

const ehDiaUtil = (date, stateCode) => {
  const givenDate = moment(date)
  if (!givenDate.isValid()) {
    return false
  }

  const dayOfWeek = givenDate.day()
  const isWeekend = (dayOfWeek === 6 || dayOfWeek === 0)
  if (isWeekend) {
    return false
  }

  if (isNationalHoliday(givenDate) || isStateHoliday(givenDate, stateCode)) {
    return false
  }

  return true
}

module.exports = ehDiaUtil
