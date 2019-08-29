const moment = require('moment')

const getStateHolidays = (year, uf) => {
  const holidaysByStateCode = [
    { state: 'SP', date: moment(`${String(year)}-07-09`), description: 'Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte.' },
    { state: 'SE', date: moment(`${String(year)}-07-08`), description: 'Dia da Emancipação do Estado de Sergipe' },
    { state: 'RR', date: moment(`${String(year)}-10-05`), description: 'Feriado no estado de Roraima — aniversário da elevação a estado.' },
    { state: 'RS', date: moment(`${String(year)}-09-20`), description: 'Em 1835 foi desencadeada a Revolução Farroupilha, que manifestava o descontentamento da Província de São Pedro do Rio Grande, a mais meridional do Império, com o governo regencial do Império do Brasil.' },
    { state: 'RN', date: moment(`${String(year)}-10-03`), description: 'Feriado dos Mártires de Cunhaú e Uruaçu, Rio Grande do Norte' },
    { state: 'PI', date: moment(`${String(year)}-10-19`), description: 'Dia do Piauí que é Piauí é uma das 27 unidades federativas do Brasil. Localiza-se no noroeste da Região Nordeste.' },
    { state: 'PR', date: moment(`${String(year)}-12-19`), description: 'A emancipação política do Paraná foi um acontecimento pelo qual o Paraná desmembrou-se da Província de São Paulo, transformando-se na mais nova província do Brasil Império, em 19 de dezembro de 1853. Foi marcante para a história do Paraná a sua emancipação política, que ocorreu em 1853, quando se desmembrou da Província de São Paulo.' },
    { state: 'PA', date: moment(`${String(year)}-08-15`), description: 'Adesão do Pará à independência do Brasil (data magna) - Lei estadual nº 5.999/1996' },
    { state: 'MG', date: moment(`${String(year)}-04-21`), description: 'Data magna do estado - Art. 256 da constituição estadual[43]; coincide com o feriado nacional de Tiradentes' },
    { state: 'MS', date: moment(`${String(year)}-10-11`), description: 'Criação do estado - Lei estadual nº 10/1979' },
    { state: 'MT', date: moment(`${String(year)}-11-20`), description: 'Dia da Consciência Negra - Lei estadual nº 7.879/2002' },
    { state: 'MA', date: moment(`${String(year)}-07-28`), description: 'Adesão do Maranhão à independência do Brasil - Lei estadual nº 2.457/1964' },
    { state: 'BA', date: moment(`${String(year)}-07-02`), description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual' },
    { state: 'TO', date: moment(`${String(year)}-10-05`), description: 'Criação do estado - Lei estadual nº 98/1989' },
    { state: 'TO', date: moment(`${String(year)}-03-18`), description: 'Autonomia do Estado (criação da Comarca do Norte) - Lei estadual nº 960/1998' },
    { state: 'TO', date: moment(`${String(year)}-09-08`), description: 'Padroeira do Estado (Nossa Senhora da Natividade) - Lei estadual nº 627/1993' },
    { state: 'RO', date: moment(`${String(year)}-01-04`), description: 'Criação do estado - Lei estadual nº 2291/2010' },
    { state: 'RO', date: moment(`${String(year)}-06-18`), description: 'Dia do evangélico - Lei estadual nº 1.026/2001' },
    { state: 'PE', date: moment(`${String(year)}-03-06`), description: 'Revolução Pernambucana de 1817 - Lei estadual nº 13.835/2009' },
    { state: 'PE', date: moment(`${String(year)}-06-24`), description: 'Festa de São João (Festa Junina) - Feriado Estadual' },
    { state: 'PE', date: moment(`${String(year)}-07-16`), description: 'Dia de Nossa Senhora do Carmo (Padroeira da Cidade do Recife) - Feriado religioso' },
    { state: 'PE', date: moment(`${String(year)}-12-08`), description: 'Dia de Nossa Senhora da Conceição (santa de grande devoção pela população da cidade do Recife) - Feriado religioso' },
    { state: 'PB', date: moment(`${String(year)}-07-26`), description: 'Homenagem à memória do ex-presidente João Pessoa - Lei Estadual 3.489/67, Art. 2º' },
    { state: 'PB', date: moment(`${String(year)}-08-05`), description: 'Fundação do Estado em 1585 e dia da sua padroeira, Nossa Senhora das Neves - Lei Estadual 3.489/1967' },
    { state: 'AL', date: moment(`${String(year)}-06-24`), description: 'São João - Lei estadual nº 5.508/1993' },
    { state: 'AL', date: moment(`${String(year)}-06-29`), description: 'São Pedro - Lei estadual nº 5.509/1993' },
    { state: 'AL', date: moment(`${String(year)}-09-16`), description: 'Emancipação política' },
    { state: 'AL', date: moment(`${String(year)}-11-20`), description: 'Morte de Zumbi dos Palmares - Lei estadual nº 5.724/1995' },
    { state: 'CE', date: moment(`${String(year)}-03-19`), description: 'Dia de São José (Padroeiro do Ceará) - Lei Federal nº 9.093/1995' },
    { state: 'CE', date: moment(`${String(year)}-03-25`), description: 'Data magna do estado (data da abolição da escravidão no Ceará) - Art. 18, parágrafo único da constituição estadual' },
    { state: 'CE', date: moment(`${String(year)}-08-15`), description: 'Dia de Nossa Senhora da Assunção (Padroeira de Fortaleza) - Lei Federal nº 9.093/1995' },
    { state: 'DF', date: moment(`${String(year)}-04-21`), description: 'Fundação de Brasília - Coincide com o feriado nacional de Tiradentes' },
    { state: 'DF', date: moment(`${String(year)}-11-30`), description: 'Dia do evangélico - Lei distrital nº 963/1995' },
    { state: 'AM', date: moment(`${String(year)}-09-05`), description: 'Elevação do Amazonas à categoria de província - Lei estadual nº 25/1977' },
    { state: 'AM', date: moment(`${String(year)}-11-20`), description: 'Dia da Consciência Negra - Lei estadual nº 84/2010' },
    { state: 'AM', date: moment(`${String(year)}-12-08`), description: 'Nossa Senhora da Conceição' },
    { state: 'AP', date: moment(`${String(year)}-03-19`), description: 'Dia de São José, santo padroeiro do Estado do Amapá - Lei estadual nº 667, de 16 de abril de 2002' },
    { state: 'AP', date: moment(`${String(year)}-09-13`), description: 'Criação do Território Federal (Data Magna do estado) - Art. 335 da Constituição estadual' },
    { state: 'SC', date: moment(`${String(year)}-08-11`), description: 'Dia de Santa Catarina (criação da capitania, separando-se de São Paulo)' },
    { state: 'SC', date: moment(`${String(year)}-11-25`), description: 'Dia de Santa Catarina de Alexandria' },
    { state: 'AC', date: moment(`${String(year)}-01-23`), description: 'Dia do evangélico' },
    { state: 'AC', date: moment(`${String(year)}-03-08`), description: 'Alusivo ao Dia Internacional da Mulher' },
    { state: 'AC', date: moment(`${String(year)}-06-15`), description: 'Aniversário do estado' },
    { state: 'AC', date: moment(`${String(year)}-09-05`), description: 'Dia da Amazônia' },
    { state: 'AC', date: moment(`${String(year)}-11-17`), description: 'Assinatura do Tratado de Petrópolis' }
  ]
  return holidaysByStateCode.filter((holiday) => holiday.state === ('' + uf).toUpperCase())
}

const isStateHoliday = (givenDate, stateCode) => {
  const stateHolidays = getStateHolidays(givenDate.year(), stateCode)
  for (const holiday of stateHolidays) {
    if (holiday.date.isSame(givenDate, 'day')) {
      return true
    }
  }
  return false
}

module.exports = {
  getStateHolidays,
  isStateHoliday
}
