/* eslint-disable
    no-undef,
    no-unused-expressions,
    no-unused-vars
*/
var expect = require('chai').expect
var moment = require('moment')
var ehDiaUtil = require('../src/')

describe('É dia útil?', function () {
  it('Dado uma data inválida, o resultado esperado é false', function () {
    expect(ehDiaUtil('8787-52-67')).to.equal(false)
  })
})

describe('É dia útil? (Não considerando o estado)', function () {
  var tests = [
    { givenDate: '2017-09-11', description: 'uma Segunda', expectedResult: true },
    { givenDate: '2017-09-12', description: 'uma Terça', expectedResult: true },
    { givenDate: '2017-09-13', description: 'uma Quarta', expectedResult: true },
    { givenDate: '2017-09-14', description: 'uma Quinta', expectedResult: true },
    { givenDate: '2017-09-15', description: 'uma Sexta', expectedResult: true },
    { givenDate: '2017-09-09', description: 'um Sábado', expectedResult: false },
    { givenDate: '2017-05-13', description: 'um Sábado', expectedResult: false },
    { givenDate: '2022-09-10', description: 'um Sábado', expectedResult: false },
    { givenDate: '2017-09-30', description: 'um Sábado', expectedResult: false },
    { givenDate: '2017-10-01', description: 'um Domingo', expectedResult: false },
    { givenDate: '2017-09-10', description: 'um Domingo', expectedResult: false },
    { givenDate: '2017-05-06', description: 'um Domingo', expectedResult: false },
    { givenDate: '2017-01-07', description: 'um Domingo', expectedResult: false },
    { givenDate: '2015-12-25', description: 'Natal', expectedResult: false },
    { givenDate: '1988-12-25', description: 'Natal', expectedResult: false },
    { givenDate: '2018-12-25', description: 'Natal', expectedResult: false },
    { givenDate: '2019-11-15', description: 'Proclamação da República', expectedResult: false },
    { givenDate: '2020-11-15', description: 'Proclamação da República', expectedResult: false },
    { givenDate: '2050-11-15', description: 'Proclamação da República', expectedResult: false },
    { givenDate: '1990-11-15', description: 'Proclamação da República', expectedResult: false },
    { givenDate: '2017-11-02', description: 'Dia de Finados', expectedResult: false },
    { givenDate: '1990-11-02', description: 'Dia de Finados', expectedResult: false },
    { givenDate: '2017-10-12', description: 'Dia de Nossa Senhora Aparecida', expectedResult: false },
    { givenDate: '2016-10-12', description: 'Dia de Nossa Senhora Aparecida', expectedResult: false },
    { givenDate: '1980-10-12', description: 'Dia de Nossa Senhora Aparecida', expectedResult: false },
    { givenDate: '1988-10-12', description: 'Dia de Nossa Senhora Aparecida', expectedResult: false },
    { givenDate: '2050-10-12', description: 'Dia de Nossa Senhora Aparecida', expectedResult: false },
    { givenDate: '2023-10-12', description: 'Dia de Nossa Senhora Aparecida', expectedResult: false },
    { givenDate: '1988-09-07', description: 'Independência do Brasil', expectedResult: false },
    { givenDate: '2033-09-07', description: 'Independência do Brasil', expectedResult: false },
    { givenDate: '2000-09-07', description: 'Independência do Brasil', expectedResult: false },
    { givenDate: '2035-05-01', description: 'Dia do Trabalho', expectedResult: false },
    { givenDate: '2000-05-01', description: 'Dia do Trabalho', expectedResult: false },
    { givenDate: '2040-04-21', description: 'Tiradentes', expectedResult: false },
    { givenDate: '2012-04-21', description: 'Tiradentes', expectedResult: false },
    { givenDate: '2010-01-01', description: 'Ano novo', expectedResult: false },
    { givenDate: '2001-01-01', description: 'Ano novo', expectedResult: false },
    { givenDate: '2017-02-28', description: 'Carnaval 2017', expectedResult: false },
    { givenDate: '2018-02-13', description: 'Carnaval 2018', expectedResult: false },
    { givenDate: '2019-03-05', description: 'Carnaval 2019', expectedResult: false },
    { givenDate: '2017-04-14', description: 'Sexta-feira Santa 2017', expectedResult: false },
    { givenDate: '2018-03-30', description: 'Sexta-feira Santa 2018', expectedResult: false },
    { givenDate: '2019-04-19', description: 'Sexta-feira Santa 2019', expectedResult: false },
    { givenDate: '2017-04-16', description: 'Páscoa 2017', expectedResult: false },
    { givenDate: '2018-04-01', description: 'Páscoa 2018', expectedResult: false },
    { givenDate: '2019-04-21', description: 'Páscoa 2019', expectedResult: false }
  ]

  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate)).to.equal(test.expectedResult)
    })
  })
})

// Implementações baseadas em https://pt.wikipedia.org/wiki/Feriados_no_Brasil

/*
  Por meio da lei estadual nº 2.247/2009, os feriados estaduais que caírem entre as terças e quintas-feiras
  são comemorados, por adiamento, nas sextas-feiras, à exceção do feriado alusivo ao aniversário do estado do Acre.[25]
*/

describe('É dia útil no estado do Acre?', function () {
  var tests = [
    { givenDate: '2000-01-23', description: 'Dia do evangélico - Lei Estadual nº 1.538/2004', expectedResult: false },
    { givenDate: '2000-03-08', description: 'Alusivo ao Dia Internacional da Mulher - Lei Estadual nº 1.411/2001', expectedResult: false },
    { givenDate: '2000-06-15', description: 'Aniversário do estado - Lei Estadual nº 14/1964', expectedResult: false },
    { givenDate: '2000-09-05', description: 'Dia da Amazônia - Lei Estadual nº 1.526/2004', expectedResult: false },
    { givenDate: '2000-11-17', description: 'Assinatura do Tratado de Petrópolis - Lei estadual nº 57/1965', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'AC')).to.equal(test.expectedResult)
    })
  })
})

/*
  Caso o dia 11 de agosto e o 25 de novembro coincidirem com dias úteis da semana, os feriados e os eventos alusivos às datas são transferidos para o domingo subsequente. [63]
*/

describe('É dia útil no estado de Santa Catarina?', function () {
  var tests = [
    { givenDate: '2019-08-11', description: 'Dia de Santa Catarina (criação da capitania, separando-se de São Paulo)', expectedResult: false },
    { givenDate: '2020-08-11', description: 'Dia de Santa Catarina (criação da capitania, separando-se de São Paulo)', expectedResult: false },
    { givenDate: '2021-08-11', description: 'Dia de Santa Catarina (criação da capitania, separando-se de São Paulo)', expectedResult: false },
    { givenDate: '2015-11-25', description: 'Dia de Santa Catarina de Alexandria', expectedResult: false },
    { givenDate: '2016-11-25', description: 'Dia de Santa Catarina de Alexandria', expectedResult: false },
    { givenDate: '2017-11-25', description: 'Dia de Santa Catarina de Alexandria', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'SC')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de São Paulo?', function () {
  var tests = [
    { givenDate: '2000-07-09', description: 'Revolução Constitucionalista de 1932 - Lei estadual nº 9.497/1997', expectedResult: false },
    { givenDate: '2013-07-09', description: 'Revolução Constitucionalista de 1932 - Lei estadual nº 9.497/1997', expectedResult: false },
    { givenDate: '2018-07-09', description: 'Revolução Constitucionalista de 1932 - Lei estadual nº 9.497/1997', expectedResult: false },
    { givenDate: '2025-07-09', description: 'Revolução Constitucionalista de 1932 - Lei estadual nº 9.497/1997', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'SP')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Sergipe?', function () {
  var tests = [
    { givenDate: '2000-07-08', description: 'Emancipação política de Sergipe - Art. 269 da Constituição estadual', expectedResult: false },
    { givenDate: '2012-07-08', description: 'Emancipação política de Sergipe - Art. 269 da Constituição estadual', expectedResult: false },
    { givenDate: '2019-07-08', description: 'Emancipação política de Sergipe - Art. 269 da Constituição estadual', expectedResult: false },
    { givenDate: '2022-07-08', description: 'Emancipação política de Sergipe - Art. 269 da Constituição estadual', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'SE')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Tocantins?', function () {
  var tests = [
    { givenDate: '2001-10-05', description: 'Criação do estado - Lei estadual nº 98/1989', expectedResult: false },
    { givenDate: '2040-10-05', description: 'Criação do estado - Lei estadual nº 98/1989', expectedResult: false },
    { givenDate: '2045-10-05', description: 'Criação do estado - Lei estadual nº 98/1989', expectedResult: false },
    { givenDate: '2004-10-05', description: 'Criação do estado - Lei estadual nº 98/1989', expectedResult: false },
    { givenDate: '2005-10-05', description: 'Criação do estado - Lei estadual nº 98/1989', expectedResult: false },
    { givenDate: '2016-03-18', description: 'Autonomia do Estado (criação da Comarca do Norte) - Lei estadual nº 960/1998', expectedResult: false },
    { givenDate: '2027-03-18', description: 'Autonomia do Estado (criação da Comarca do Norte) - Lei estadual nº 960/1998', expectedResult: false },
    { givenDate: '2008-03-18', description: 'Autonomia do Estado (criação da Comarca do Norte) - Lei estadual nº 960/1998', expectedResult: false },
    { givenDate: '2009-03-18', description: 'Autonomia do Estado (criação da Comarca do Norte) - Lei estadual nº 960/1998', expectedResult: false },
    { givenDate: '2010-03-18', description: 'Autonomia do Estado (criação da Comarca do Norte) - Lei estadual nº 960/1998', expectedResult: false },
    { givenDate: '2011-09-08', description: 'Padroeira do Estado (Nossa Senhora da Natividade) - Lei estadual nº 627/1993', expectedResult: false },
    { givenDate: '2028-09-08', description: 'Padroeira do Estado (Nossa Senhora da Natividade) - Lei estadual nº 627/1993', expectedResult: false },
    { givenDate: '2020-09-08', description: 'Padroeira do Estado (Nossa Senhora da Natividade) - Lei estadual nº 627/1993', expectedResult: false },
    { givenDate: '2014-09-08', description: 'Padroeira do Estado (Nossa Senhora da Natividade) - Lei estadual nº 627/1993', expectedResult: false },
    { givenDate: '2015-09-08', description: 'Padroeira do Estado (Nossa Senhora da Natividade) - Lei estadual nº 627/1993', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'TO')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Roraima?', function () {
  var tests = [
    { givenDate: '1988-10-05', description: 'Criação do estado - Art. 9 da Constituição estadual', expectedResult: false },
    { givenDate: '1995-10-05', description: 'Criação do estado - Art. 9 da Constituição estadual', expectedResult: false },
    { givenDate: '2000-10-05', description: 'Criação do estado - Art. 9 da Constituição estadual', expectedResult: false },
    { givenDate: '2007-10-05', description: 'Criação do estado - Art. 9 da Constituição estadual', expectedResult: false },
    { givenDate: '2019-10-05', description: 'Criação do estado - Art. 9 da Constituição estadual', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'RR')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Rondônia?', function () {
  var tests = [
    { givenDate: '2019-01-04', description: 'Criação do estado - Lei estadual nº 2291/2010', expectedResult: false },
    { givenDate: '2020-01-04', description: 'Criação do estado - Lei estadual nº 2291/2010', expectedResult: false },
    { givenDate: '2021-01-04', description: 'Criação do estado - Lei estadual nº 2291/2010', expectedResult: false },
    { givenDate: '2022-01-04', description: 'Criação do estado - Lei estadual nº 2291/2010', expectedResult: false },
    { givenDate: '2023-01-04', description: 'Criação do estado - Lei estadual nº 2291/2010', expectedResult: false },
    { givenDate: '2025-06-18', description: 'Dia do evangélico - Lei estadual nº 1.026/2001', expectedResult: false },
    { givenDate: '2026-06-18', description: 'Dia do evangélico - Lei estadual nº 1.026/2001', expectedResult: false },
    { givenDate: '2027-06-18', description: 'Dia do evangélico - Lei estadual nº 1.026/2001', expectedResult: false },
    { givenDate: '2028-06-18', description: 'Dia do evangélico - Lei estadual nº 1.026/2001', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'RO')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Rio Grande do Sul?', function () {
  var tests = [
    { givenDate: '1999-09-20', description: 'Proclamação da República Rio-Grandense - Art. 6, parágrafo único da constituição estadual', expectedResult: false },
    { givenDate: '2019-09-20', description: 'Proclamação da República Rio-Grandense - Art. 6, parágrafo único da constituição estadual', expectedResult: false },
    { givenDate: '2030-09-20', description: 'Proclamação da República Rio-Grandense - Art. 6, parágrafo único da constituição estadual', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'RS')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Rio Grande do Norte?', function () {
  var tests = [
    { givenDate: '2019-10-03', description: 'Mártires de Cunhaú e Uruaçu - Lei estadual nº 8.913/2006', expectedResult: false },
    { givenDate: '2022-10-03', description: 'Mártires de Cunhaú e Uruaçu - Lei estadual nº 8.913/2006', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'RN')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Piauí?', function () {
  var tests = [
    { givenDate: '2000-10-19', description: 'Dia do Piauí - Lei estadual nº 176/1937', expectedResult: false },
    { givenDate: '2002-10-19', description: 'Dia do Piauí - Lei estadual nº 176/1937', expectedResult: false },
    { givenDate: '2008-10-19', description: 'Dia do Piauí - Lei estadual nº 176/1937', expectedResult: false },
    { givenDate: '2019-10-19', description: 'Dia do Piauí - Lei estadual nº 176/1937', expectedResult: false },
    { givenDate: '2024-10-19', description: 'Dia do Piauí - Lei estadual nº 176/1937', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'PI')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Pernambuco?', function () {
  var tests = [
    { givenDate: '2019-03-06', description: 'Revolução Pernambucana de 1817 - Lei estadual nº 13.835/2009', expectedResult: false },
    { givenDate: '2019-06-24', description: 'Festa de São João (Festa Junina) - Feriado Estadual', expectedResult: false },
    { givenDate: '2019-07-16', description: 'Dia de Nossa Senhora do Carmo (Padroeira da Cidade do Recife) - Feriado religioso', expectedResult: false },
    { givenDate: '2019-12-08', description: 'Dia de Nossa Senhora da Conceição (santa de grande devoção pela população da cidade do Recife) - Feriado religioso', expectedResult: false },
    { givenDate: '2020-12-08', description: 'Dia de Nossa Senhora da Conceição (santa de grande devoção pela população da cidade do Recife) - Feriado religioso', expectedResult: false },
    { givenDate: '2021-12-08', description: 'Dia de Nossa Senhora da Conceição (santa de grande devoção pela população da cidade do Recife) - Feriado religioso', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'PE')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Paraná?', function () {
  var tests = [
    { givenDate: '1997-12-19', description: 'Emancipação política do estado do Paraná - Lei estadual nº 4.658/1962', expectedResult: false },
    { givenDate: '2005-12-19', description: 'Emancipação política do estado do Paraná - Lei estadual nº 4.658/1962', expectedResult: false },
    { givenDate: '2019-12-19', description: 'Emancipação política do estado do Paraná - Lei estadual nº 4.658/1962', expectedResult: false },
    { givenDate: '2035-12-19', description: 'Emancipação política do estado do Paraná - Lei estadual nº 4.658/1962', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'PR')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Paraíba?', function () {
  var tests = [
    { givenDate: '2010-07-26', description: 'Homenagem à memória do ex-presidente João Pessoa - Lei Estadual 3.489/67, Art. 2º', expectedResult: false },
    { givenDate: '2012-07-26', description: 'Homenagem à memória do ex-presidente João Pessoa - Lei Estadual 3.489/67, Art. 2º', expectedResult: false },
    { givenDate: '2013-07-26', description: 'Homenagem à memória do ex-presidente João Pessoa - Lei Estadual 3.489/67, Art. 2º', expectedResult: false },
    { givenDate: '2016-07-26', description: 'Homenagem à memória do ex-presidente João Pessoa - Lei Estadual 3.489/67, Art. 2º', expectedResult: false },
    { givenDate: '2019-07-26', description: 'Homenagem à memória do ex-presidente João Pessoa - Lei Estadual 3.489/67, Art. 2º', expectedResult: false },
    { givenDate: '2019-08-05', description: 'Fundação do Estado em 1585 e dia da sua padroeira, Nossa Senhora das Neves - Lei Estadual 3.489/1967', expectedResult: false },
    { givenDate: '2020-08-05', description: 'Fundação do Estado em 1585 e dia da sua padroeira, Nossa Senhora das Neves - Lei Estadual 3.489/1967', expectedResult: false },
    { givenDate: '2022-08-05', description: 'Fundação do Estado em 1585 e dia da sua padroeira, Nossa Senhora das Neves - Lei Estadual 3.489/1967', expectedResult: false },
    { givenDate: '2026-08-05', description: 'Fundação do Estado em 1585 e dia da sua padroeira, Nossa Senhora das Neves - Lei Estadual 3.489/1967', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'PB')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Pará?', function () {
  var tests = [
    { givenDate: '1996-08-15', description: 'Adesão do Pará à independência do Brasil - Lei estadual nº 5.999/1996', expectedResult: false },
    { givenDate: '2000-08-15', description: 'Adesão do Pará à independência do Brasil - Lei estadual nº 5.999/1996', expectedResult: false },
    { givenDate: '2001-08-15', description: 'Adesão do Pará à independência do Brasil - Lei estadual nº 5.999/1996', expectedResult: false },
    { givenDate: '2016-08-15', description: 'Adesão do Pará à independência do Brasil - Lei estadual nº 5.999/1996', expectedResult: false },
    { givenDate: '2022-08-15', description: 'Adesão do Pará à independência do Brasil - Lei estadual nº 5.999/1996', expectedResult: false },
    { givenDate: '2027-08-15', description: 'Adesão do Pará à independência do Brasil - Lei estadual nº 5.999/1996', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'PA')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Minas Gerais?', function () {
  var tests = [
    { givenDate: '2002-04-21', description: 'Data magna do estado - Art. 256 da constituição estadual[43]; coincide com o feriado nacional de Tiradentes', expectedResult: false },
    { givenDate: '2019-04-21', description: 'Data magna do estado - Art. 256 da constituição estadual[43]; coincide com o feriado nacional de Tiradentes', expectedResult: false },
    { givenDate: '2040-04-21', description: 'Data magna do estado - Art. 256 da constituição estadual[43]; coincide com o feriado nacional de Tiradentes', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'MG')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Mato Grosso do Sul?', function () {
  var tests = [
    { givenDate: '2019-10-11', description: 'Criação do estado - Lei estadual nº 10/1979', expectedResult: false },
    { givenDate: '2020-10-11', description: 'Criação do estado - Lei estadual nº 10/1979', expectedResult: false },
    { givenDate: '2022-10-11', description: 'Criação do estado - Lei estadual nº 10/1979', expectedResult: false },
    { givenDate: '2027-10-11', description: 'Criação do estado - Lei estadual nº 10/1979', expectedResult: false },
    { givenDate: '2034-10-11', description: 'Criação do estado - Lei estadual nº 10/1979', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'MS')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Mato Grosso?', function () {
  var tests = [
    { givenDate: '2019-11-20', description: 'Dia da Consciência Negra - Lei estadual nº 7.879/2002', expectedResult: false },
    { givenDate: '2023-11-20', description: 'Dia da Consciência Negra - Lei estadual nº 7.879/2002', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'MT')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Maranhão?', function () {
  var tests = [
    { givenDate: '2019-07-28', description: 'Adesão do Maranhão à independência do Brasil - Lei estadual nº 2.457/1964', expectedResult: false },
    { givenDate: '2020-07-28', description: 'Adesão do Maranhão à independência do Brasil - Lei estadual nº 2.457/1964', expectedResult: false },
    { givenDate: '2021-07-28', description: 'Adesão do Maranhão à independência do Brasil - Lei estadual nº 2.457/1964', expectedResult: false },
    { givenDate: '2022-07-28', description: 'Adesão do Maranhão à independência do Brasil - Lei estadual nº 2.457/1964', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'MA')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado de Espírito Santo?', function () {
  it('Espírito Santo não tem feriado estadual <3', () => {})
})

describe('É dia útil no estado de Alagoas?', function () {
  var tests = [
    { givenDate: '2019-06-24', description: 'São João - Lei estadual nº 5.508/1993', expectedResult: false },
    { givenDate: '2020-06-24', description: 'São João - Lei estadual nº 5.508/1993', expectedResult: false },
    { givenDate: '2021-06-24', description: 'São João - Lei estadual nº 5.508/1993', expectedResult: false },
    { givenDate: '2022-06-29', description: 'São Pedro - Lei estadual nº 5.509/1993', expectedResult: false },
    { givenDate: '2023-06-29', description: 'São Pedro - Lei estadual nº 5.509/1993', expectedResult: false },
    { givenDate: '2024-06-29', description: 'São Pedro - Lei estadual nº 5.509/1993', expectedResult: false },
    { givenDate: '2025-09-16', description: 'Emancipação política', expectedResult: false },
    { givenDate: '2026-09-16', description: 'Emancipação política', expectedResult: false },
    { givenDate: '2027-09-16', description: 'Emancipação política', expectedResult: false },
    { givenDate: '2028-11-20', description: 'Morte de Zumbi dos Palmares - Lei estadual nº 5.724/1995', expectedResult: false },
    { givenDate: '2029-11-20', description: 'Morte de Zumbi dos Palmares - Lei estadual nº 5.724/1995', expectedResult: false },
    { givenDate: '2030-11-20', description: 'Morte de Zumbi dos Palmares - Lei estadual nº 5.724/1995', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'AL')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado do Distrito Federal?', function () {
  var tests = [
    { givenDate: '2019-04-21', description: 'Fundação de Brasília - Coincide com o feriado nacional de Tiradentes', expectedResult: false },
    { givenDate: '2019-11-30', description: 'Dia do evangélico - Lei distrital nº 963/1995', expectedResult: false },
    { givenDate: '2020-11-30', description: 'Dia do evangélico - Lei distrital nº 963/1995', expectedResult: false },
    { givenDate: '2021-11-30', description: 'Dia do evangélico - Lei distrital nº 963/1995', expectedResult: false },
    { givenDate: '2022-11-30', description: 'Dia do evangélico - Lei distrital nº 963/1995', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'DF')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado do Ceará?', function () {
  var tests = [
    { givenDate: '2019-03-19', description: 'Dia de São José (Padroeiro do Ceará) - Lei Federal nº 9.093/1995', expectedResult: false },
    { givenDate: '2019-03-25', description: 'Data magna do estado (data da abolição da escravidão no Ceará) - Art. 18, parágrafo único da constituição estadual', expectedResult: false },
    { givenDate: '2019-08-15', description: 'Dia de Nossa Senhora da Assunção (Padroeira de Fortaleza) - Lei Federal nº 9.093/1995', expectedResult: false }

  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'CE')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado da Bahia?', function () {
  var tests = [
    { givenDate: '2002-07-02', description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual', expectedResult: false },
    { givenDate: '2003-07-02', description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual', expectedResult: false },
    { givenDate: '2010-07-02', description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual', expectedResult: false },
    { givenDate: '2015-07-02', description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual', expectedResult: false },
    { givenDate: '2020-07-02', description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual', expectedResult: false },
    { givenDate: '2025-07-02', description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual', expectedResult: false },
    { givenDate: '2030-07-02', description: 'Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'BA')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado do Amazonas?', function () {
  var tests = [
    { givenDate: '2019-09-05', description: 'Elevação do Amazonas à categoria de província - Lei estadual nº 25/1977', expectedResult: false },
    { givenDate: '2019-11-20', description: 'Dia da Consciência Negra - Lei estadual nº 84/2010', expectedResult: false },
    { givenDate: '2019-12-08', description: 'Nossa Senhora da Conceição', expectedResult: false },
    { givenDate: '2020-12-08', description: 'Nossa Senhora da Conceição', expectedResult: false },
    { givenDate: '2021-12-08', description: 'Nossa Senhora da Conceição', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'AM')).to.equal(test.expectedResult)
    })
  })
})

describe('É dia útil no estado do Amapá?', function () {
  var tests = [
    { givenDate: '2019-03-19', description: 'Dia de São José, santo padroeiro do Estado do Amapá - Lei estadual nº 667, de 16 de abril de 2002', expectedResult: false },
    { givenDate: '2019-09-13', description: 'Criação do Território Federal (Data Magna do estado) - Art. 335 da Constituição estadual', expectedResult: false }
  ]
  tests.forEach(function (test) {
    it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function () {
      expect(ehDiaUtil(test.givenDate, 'AP')).to.equal(test.expectedResult)
    })
  })
})
