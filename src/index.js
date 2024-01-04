import moment from 'moment'
import { isNationalHoliday } from './getNationalHolidays.js'
import { isProvinceHoliday }  from './getProvincesHolidays.js'

const isBusinessDay = (date, stateCode) => {
  const givenDate = moment(date)
  if (!givenDate.isValid()) {
    return false
  }

  if (isWeekend(givenDate)) {
    return false
  }

  if (isHoliday(date, stateCode)) {
    return false
  }

  return true
}

const isWeekend = (givenDate) => {
  const dayOfWeek = givenDate.day()
  const isWeekend = (dayOfWeek === 6 || dayOfWeek === 0)
  return isWeekend
}

const isHoliday = (date, stateCode) => {
  const givenDate = moment(date)
  if (!givenDate.isValid()) {
    return false
  }
  if (isNationalHoliday(givenDate) || isProvinceHoliday(givenDate, stateCode)) {
    return true
  }
  return false
}

export { isBusinessDay, isHoliday, isWeekend }