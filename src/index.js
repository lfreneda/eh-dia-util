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

const holidaysByStateCode = {
  SP: (year) => [
    { date: moment(`${String(year)}-07-09`), description: 'Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte.' }
  ],
  SE: (year) => [
    { date: moment(`${String(year)}-07-08`), description: 'Dia da Emancipação do Estado de Sergipe' }
  ],
  RR: (year) => [
    { date: moment(`${String(year)}-10-05`), description: 'Feriado no estado de Roraima — aniversário da elevação a estado.' }
  ],
  RS: (year) => [
    { date: moment(`${String(year)}-09-20`), description: 'Em 1835 foi desencadeada a Revolução Farroupilha, que manifestava o descontentamento da Província de São Pedro do Rio Grande, a mais meridional do Império, com o governo regencial do Império do Brasil.' }
  ],
  RN: (year) => [
    { date: moment(`${String(year)}-10-03`), description: 'Feriado dos Mártires de Cunhaú e Uruaçu, Rio Grande do Norte' }
  ],
  PI: (year) => [
    { date: moment(`${String(year)}-10-19`), description: 'Dia do Piauí que é Piauí é uma das 27 unidades federativas do Brasil. Localiza-se no noroeste da Região Nordeste.' }
  ],
  PR: (year) => [
    { date: moment(`${String(year)}-12-19`), description: 'A emancipação política do Paraná foi um acontecimento pelo qual o Paraná desmembrou-se da Província de São Paulo, transformando-se na mais nova província do Brasil Império, em 19 de dezembro de 1853. Foi marcante para a história do Paraná a sua emancipação política, que ocorreu em 1853, quando se desmembrou da Província de São Paulo.' }
  ],
  PA: (year) => [
    { date: moment(`${String(year)}-08-15`), description: 'Adesão do Pará à independência do Brasil (data magna) - Lei estadual nº 5.999/1996' }
  ],
  MG: (year) => [
    { date: moment(`${String(year)}-04-21`), description: 'Data magna do estado - Art. 256 da constituição estadual[43]; coincide com o feriado nacional de Tiradentes' }
  ],
  MS: (year) => [
    { date: moment(`${String(year)}-10-11`), description: 'Criação do estado - Lei estadual nº 10/1979' }
  ],
  MT: (year) => [
    { date: moment(`${String(year)}-11-20`), description: 'Dia da Consciência Negra - Lei estadual nº 7.879/2002' }
  ],
  MA: (year) => [
    { date: moment(`${String(year)}-07-28`), description: 'Adesão do Maranhão à independência do Brasil - Lei estadual nº 2.457/1964' }
  ],
  BA: (year) => [
    { date: moment(`${String(year)}-07-02`), description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual' }
  ],
  TO: (year) => [
    { date: moment(`${String(year)}-10-05`), description: 'Criação do estado - Lei estadual nº 98/1989' },
    { date: moment(`${String(year)}-03-18`), description: 'Autonomia do Estado (criação da Comarca do Norte) - Lei estadual nº 960/1998' },
    { date: moment(`${String(year)}-09-08`), description: 'Padroeira do Estado (Nossa Senhora da Natividade) - Lei estadual nº 627/1993' }
  ],
  RO: (year) => [
    { date: moment(`${String(year)}-01-04`), description: 'Criação do estado - Lei estadual nº 2291/2010' },
    { date: moment(`${String(year)}-06-18`), description: 'Dia do evangélico - Lei estadual nº 1.026/2001' }
  ],
  PE: (year) => [
    { date: moment(`${String(year)}-03-06`), description: 'Revolução Pernambucana de 1817 - Lei estadual nº 13.835/2009' },
    { date: moment(`${String(year)}-06-24`), description: 'Festa de São João (Festa Junina) - Feriado Estadual' },
    { date: moment(`${String(year)}-07-16`), description: 'Dia de Nossa Senhora do Carmo (Padroeira da Cidade do Recife) - Feriado religioso' },
    { date: moment(`${String(year)}-12-08`), description: 'Dia de Nossa Senhora da Conceição (santa de grande devoção pela população da cidade do Recife) - Feriado religioso' }
  ],
  PB: (year) => [
    { date: moment(`${String(year)}-07-26`), description: 'Homenagem à memória do ex-presidente João Pessoa - Lei Estadual 3.489/67, Art. 2º' },
    { date: moment(`${String(year)}-08-05`), description: 'Fundação do Estado em 1585 e dia da sua padroeira, Nossa Senhora das Neves - Lei Estadual 3.489/1967' }
  ],
  AL: (year) => [
    { date: moment(`${String(year)}-06-24`), description: 'São João - Lei estadual nº 5.508/1993' },
    { date: moment(`${String(year)}-06-29`), description: 'São Pedro - Lei estadual nº 5.509/1993' },
    { date: moment(`${String(year)}-09-16`), description: 'Emancipação política' },
    { date: moment(`${String(year)}-11-20`), description: 'Morte de Zumbi dos Palmares - Lei estadual nº 5.724/1995' }
  ],
  CE: (year) => [
    { date: moment(`${String(year)}-03-19`), description: 'Dia de São José (Padroeiro do Ceará) - Lei Federal nº 9.093/1995' },
    { date: moment(`${String(year)}-03-25`), description: 'Data magna do estado (data da abolição da escravidão no Ceará) - Art. 18, parágrafo único da constituição estadual' },
    { date: moment(`${String(year)}-08-15`), description: 'Dia de Nossa Senhora da Assunção (Padroeira de Fortaleza) - Lei Federal nº 9.093/1995' }
  ],
  DF: (year) => [
    { date: moment(`${String(year)}-04-21`), description: 'Fundação de Brasília - Coincide com o feriado nacional de Tiradentes' },
    { date: moment(`${String(year)}-11-30`), description: 'Dia do evangélico - Lei distrital nº 963/1995' }
  ],
  AM: (year) => [
    { date: moment(`${String(year)}-09-05`), description: 'Elevação do Amazonas à categoria de província - Lei estadual nº 25/1977' },
    { date: moment(`${String(year)}-11-20`), description: 'Dia da Consciência Negra - Lei estadual nº 84/2010' },
    { date: moment(`${String(year)}-12-08`), description: 'Nossa Senhora da Conceição' }
  ],
  AP: (year) => [
    { date: moment(`${String(year)}-03-19`), description: 'Dia de São José, santo padroeiro do Estado do Amapá - Lei estadual nº 667, de 16 de abril de 2002' },
    { date: moment(`${String(year)}-09-13`), description: 'Criação do Território Federal (Data Magna do estado) - Art. 335 da Constituição estadual' }
  ],
  SC: (year) => [
    { date: moment(`${String(year)}-08-11`), description: 'Dia de Santa Catarina (criação da capitania, separando-se de São Paulo)' },
    { date: moment(`${String(year)}-11-25`), description: 'Dia de Santa Catarina de Alexandria' }
  ],
  AC: (year) => [
    { date: moment(`${String(year)}-01-23`), description: 'Dia do evangélico' },
    { date: moment(`${String(year)}-03-08`), description: 'Alusivo ao Dia Internacional da Mulher' },
    { date: moment(`${String(year)}-06-15`), description: 'Aniversário do estado' },
    { date: moment(`${String(year)}-09-05`), description: 'Dia da Amazônia' },
    { date: moment(`${String(year)}-11-17`), description: 'Assinatura do Tratado de Petrópolis' }
  ]
}

const getStateHolidays = (year, uf) => {
  if (uf && holidaysByStateCode[uf.toUpperCase()] !== undefined) {
    const getCurrentStateHolidays = holidaysByStateCode[uf.toUpperCase()]
    return getCurrentStateHolidays(year)
  }
  return []
}

const ehDiaUtil = (date, stateCode) => {
  const givenDate = moment(date)
  if (!givenDate.isValid()) {
    console.warn('provided date ' + date + ' is not valid @w@~')
    return false
  }

  const dayOfWeek = givenDate.day()
  const isSaturday = dayOfWeek === 6
  const isSunday = dayOfWeek === 0

  if (isSaturday || isSunday) {
    return false
  }

  const nationalHolidays = getNationalHolidays(givenDate.year())
  for (const holiday of nationalHolidays) {
    if (holiday.date.isSame(givenDate, 'day')) {
      return false
    }
  }

  if (stateCode) {
    const stateHolidays = getStateHolidays(givenDate.year(), stateCode)
    for (const holiday of stateHolidays) {
      if (holiday.date.isSame(givenDate, 'day')) {
        return false
      }
    }
  }

  return true
}

module.exports = ehDiaUtil
