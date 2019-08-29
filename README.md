# eh-dia-util

[![Codeship Status for lfreneda/eh-dia-util](https://app.codeship.com/projects/c0781340-76d1-0135-1b40-3a2518fac0ae/status?branch=master)](https://app.codeship.com/projects/244570)
[![Code Climate](https://codeclimate.com/github/lfreneda/eh-dia-util/badges/gpa.svg)](https://codeclimate.com/github/lfreneda/eh-dia-util)

Hoje é um dia útil? 

Você sabe que no Brasil essa coisa de feriado é meio confuso, não? As datas de Carnaval, Corpus Christi e Sexta-feira Santa cada ano cai em um dia diferente (são "móveis") e cada estado tem suas datas comemorativas.

Essa lib contém uma pequena lógica para determinar se uma data é dia útil considerando feriados nacionais (móveis ou não) e também feriados estaduais :)

A implementação foi baseada no seguinte artigo do Wikipédia: https://pt.wikipedia.org/wiki/Feriados_no_Brasil

## Instalação

```
npm install @lfreneda/eh-dia-util --save
```

## Exemplos

```js
const ehDiaUtil = require('@lfreneda/eh-dia-util')
ehDiaUtil('2020-05-15') // true
```

Todos os exemplos estão [aqui!](https://github.com/lfreneda/eh-dia-util/blob/master/test/index.spec.js)

## Limitações conhecidas

Para feriados estaduais, as seguintes regras ainda não são levadas em consideração nessa implementação:

- Para o estado do Acre, por meio da lei estadual nº 2.247/2009, os feriados estaduais que caírem entre as terças e quintas-feiras são comemorados, por adiamento, nas sextas-feiras, à exceção do feriado alusivo ao aniversário do estado do Acre.

- Para o estado de Santa Catarina, caso o dia 11 de agosto e o 25 de novembro coincidirem com dias úteis da semana, os feriados e os eventos alusivos às datas são transferidos para o domingo subsequente.

Pull Request são bem vindos :)