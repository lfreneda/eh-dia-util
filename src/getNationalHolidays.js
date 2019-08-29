const moment = require('moment')

const _calculateEaster = (year) => {
  const C = Math.floor(year / 100)
  const N = year - 19 * Math.floor(year / 19)
  const K = Math.floor((C - 17) / 25)
  let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15
  I = I - 30 * Math.floor((I / 30))
  I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11))
  let J = year + Math.floor(year / 4) + I + 2 - C + Math.floor(C / 4)
  J = J - 7 * Math.floor(J / 7)
  const L = I - J
  const M = 3 + Math.floor((L + 40) / 44)
  const D = L + 28 - 31 * Math.floor(M / 4)
  const month = (M < 10) ? '0' + M : M
  const day = (D < 10) ? '0' + D : D
  const easterDate = year + '-' + month + '-' + day
  return moment(easterDate)
}

const _calculateCorpusChristi = (easterDate) => {
  return easterDate.clone().add(60, 'd')
}

const _calculateCarnival = (easterDate) => {
  return easterDate.clone().add(-47, 'd')
}

const _calculateGodsFriday = (easterDate) => {
  return easterDate.clone().add(-2, 'd')
}

const getNationalHolidays = (year) => {
  const easterDate = _calculateEaster(year)
  const corpusChristiDate = _calculateCorpusChristi(easterDate)
  const carnivalDate = _calculateCarnival(easterDate)
  const godsFridayDate = _calculateGodsFriday(easterDate)

  return [
    { date: easterDate, description: 'Páscoa ou Domingo da Ressurreição é uma festividade religiosa e um feriado que celebra a ressurreição de Jesus ocorrida três dias depois da sua crucificação no Calvário, conforme o relato do Novo Testamento.' },
    { date: corpusChristiDate, description: 'Corpus Christi (expressão latina que significa Corpo de Cristo), generalizada em Portugal como Corpo de Deus é um evento baseado em tradições católicas realizado na quinta-feira seguinte ao domingo da Santíssima Trindade, que, por sua vez, acontece no domingo seguinte ao de Pentecostes.' },
    { date: carnivalDate, description: 'Carnaval é um festival do cristianismo ocidental que ocorre antes da estação litúrgica da Quaresma. Os principais eventos ocorrem tipicamente durante fevereiro ou início de março, durante o período historicamente conhecido como Tempo da Septuagésima (ou pré-quaresma).' },
    { date: godsFridayDate, description: 'Sexta-feira Santa ou Sexta-Feira da Paixão é uma data religiosa cristã que relembra a crucificação de Jesus Cristo e sua morte no Calvário. O feriado é observado sempre na sexta-feira que antecede o Domingo de Páscoa.' },
    { date: moment(`${String(year)}-01-01`), description: 'O Dia da Fraternidade Universal ou Dia da Confraternização Universal é um feriado nacional no Brasil, comemorado no dia 1 de janeiro. Foi instituído por lei em 1935, por Getúlio Vargas.' },
    { date: moment(`${String(year)}-04-21`), description: 'Joaquim José da Silva Xavier, o Tiradentes, foi um dentista, tropeiro, minerador, comerciante, militar e ativista político que atuou no Brasil. O dia de sua execução, 21 de abril, é feriado nacional.' },
    { date: moment(`${String(year)}-05-01`), description: 'O Dia do Trabalhador, Dia do Trabalho ou Dia Internacional dos Trabalhadores é celebrado anualmente no dia 1º de maio em numerosos países do mundo, sendo feriado no Brasil, em Portugal, Angola, Moçambique e outros países.' },
    { date: moment(`${String(year)}-09-07`), description: 'Independência do Brasil é um processo que se estende de 1821 a 1825 e coloca em violenta oposição o Reino do Brasil e o Reino de Portugal, dentro do Reino Unido de Portugal, Brasil e Algarves.' },
    { date: moment(`${String(year)}-10-12`), description: 'Nossa Senhora da Conceição Aparecida, popularmente chamada de Nossa Senhora Aparecida, é a padroeira do Brasil. Sua festa litúrgica é celebrada em 12 de outubro, um feriado nacional no Brasil desde 1980.' },
    { date: moment(`${String(year)}-11-02`), description: 'Dia dos Fiéis Defuntos ou Dia de Finados (conhecido ainda como Dia dos Mortos no México) é celebrado pela Igreja Católica no dia 2 de novembro.' },
    { date: moment(`${String(year)}-11-15`), description: 'A Proclamação da República Brasileira foi um levante político-militar ocorrido em 15 de novembro de 1889 que instaurou a forma republicana federativa presidencialista do governo no Brasil, derrubando a monarquia constitucional parlamentarista do Império do Brasil e, por conseguinte, pondo fim à soberania do imperador D. Pedro II. Foi, então, proclamada a República do Brasil.' },
    { date: moment(`${String(year)}-12-25`), description: 'Natal ou Dia de Natal é um feriado e festival religioso cristão comemorado anualmente em 25 de dezembro. A data é o centro das festas de fim de ano e da temporada de férias, sendo, no cristianismo, o marco inicial do Ciclo do Natal, que dura doze dias.' }
  ]
}

const isNationalHoliday = (givenDate) => {
  const nationalHolidays = getNationalHolidays(givenDate.year())
  for (const holiday of nationalHolidays) {
    if (holiday.date.isSame(givenDate, 'day')) {
      return true
    }
  }
  return false
}

module.exports = {
  getNationalHolidays,
  isNationalHoliday
}
