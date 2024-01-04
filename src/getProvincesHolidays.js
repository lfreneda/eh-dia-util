import moment from 'moment'
import br_provinces_holidays from './holidays/brazil/index.js'

const getStateHolidays = function (year, uf) {
  return br_provinces_holidays
    .map(function (stateHoliday) {
      return { ...stateHoliday, date: moment(stateHoliday.date.replace('_year', year)) }
    })
    .filter(stateHolidays => stateHolidays.state == uf)
}

const isProvinceHoliday = (givenDate, stateCode) => {
  const stateHolidays = getStateHolidays(givenDate.year(), stateCode)
  for (const holiday of stateHolidays) {
    if (holiday.date.isSame(givenDate, 'day')) {
      return true
    }
  }
  return false
}

export { getStateHolidays, isProvinceHoliday }
