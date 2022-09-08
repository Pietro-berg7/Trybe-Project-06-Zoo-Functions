const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna undefined se não receber nenhum parâmetro', () => {
    const expected = undefined;
    expect(handlerElephants()).toBe(expected);
  });

  it('retorna "Parâmetro inválido, é necessário uma string" se o parâmetro não for uma string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = 10;
    expect(handlerElephants(actual)).toBe(expected);
  });

  it('retorna 4 se o parâmetro for count', () => {
    const expected = 4;
    const actual = 'count';
    expect(handlerElephants(actual)).toBe(expected);
  });

  it('retorna ["Ilana", "Orval", "Bea", "Jefferson"] se o parâmetro for names', () => {
    const expected = ["Ilana", "Orval", "Bea", "Jefferson"];
    const actual = 'names';
    expect(handlerElephants(actual)).toEqual(expected);
  });

  it('retorna 10.5 se o parâmetro for averageAge', () => {
    const expected = 10.5;
    const actual = 'averageAge';
    expect(handlerElephants(actual)).toEqual(expected);
  });

  it('retorna "NW" se o parâmetro for location', () => {
    const expected = 'NW';
    const actual = 'location';
    expect(handlerElephants(actual)).toEqual(expected);
  });

  it('retorna 5 se o parâmetro for popularity', () => {
    const expected = 5;
    const actual = 'popularity';
    expect(handlerElephants(actual)).toEqual(expected);
  });

  it('retorna ["Friday", "Saturday", "Sunday", "Tuesday"] se o parâmetro for availability', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const actual = 'availability';
    expect(handlerElephants(actual)).toEqual(expected);
  });

  it('retorna null se o parâmetro for inexistente', () => {
    const expected = null;
    const actual = 'parametro';
    expect(handlerElephants(actual)).toEqual(expected);
  });
});
