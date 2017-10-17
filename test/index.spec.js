'use strict';

var expect = require('chai').expect;
var moment = require('moment');
var ehDiaUtil = require('./../index');

describe('É dia útil?', function () {

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
    ];

    tests.forEach(function(test) {
        it('Dado dia ' + moment(test.givenDate).format('YYYY-MM-DD') + ' (que é ' + test.description + '), o resultado esperado é ' + test.expectedResult, function() {
            expect(ehDiaUtil(test.givenDate)).to.equal(test.expectedResult);
        });
    });

});