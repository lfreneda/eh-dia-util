const moment = require('moment')
const { isNationalHoliday } = require('./getNationalHolidays')
const { isStateHoliday } = require('./getStateHolidays')

const ehDiaUtil = (date, stateCode) => {
  const givenDate = moment(date)
  if (!givenDate.isValid()) {
    return false
  }

  if (ehFinalDeSemana(givenDate)) {
    return false
  }

  if (ehFeriado(date, stateCode)) {
    return false
  }

  return true
}

const ehFinalDeSemana = (givenDate) => {
  const dayOfWeek = givenDate.day()
  const isWeekend = (dayOfWeek === 6 || dayOfWeek === 0)
  return isWeekend
}

const ehFeriado = (date, stateCode) => {
  const givenDate = moment(date)
  if (!givenDate.isValid()) {
    return false
  }
  if (isNationalHoliday(givenDate) || isStateHoliday(givenDate, stateCode)) {
    return true
  }
  return false
}

module.exports = ehDiaUtil
module.exports.ehFeriado = ehFeriado
module.exports.ehFinalDeSemana = ehFinalDeSemana
