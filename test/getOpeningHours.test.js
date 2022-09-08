const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna true se o argumento passado estiver em inglês', () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const actual = 'Thursday';
    expect(days).toContain(actual);
  });

  it('retorna closed se o dia for segunda', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('monday', '8:15-am')).toEqual(expected);
  });

  it('retorna open se o zoológico estiver aberto na terça', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('tuesday', '11:15-am')).toEqual(expected);
  });

  it('retorna closed se o zoológico estiver fechado na terça', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('tuesday', '5:15-am')).toEqual(expected);
  });

  it('retorna open se o zoológico estiver aberto na quarta', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('wednesday', '11:15-am')).toEqual(expected);
  });

  it('retorna closed se o zoológico estiver fechado na quarta', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('wednesday', '5:15-am')).toEqual(expected);
  });

  it('retorna open se o zoológico estiver aberto na quinta', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('thursday', '11:15-am')).toEqual(expected);
  });

  it('retorna closed se o zoológico estiver fechado na quinta', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('thursday', '5:15-am')).toEqual(expected);
  });

  it('retorna open se o zoológico estiver aberto na sexta', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('friday', '11:15-am')).toEqual(expected);
  });

  it('retorna closed se o zoológico estiver fechado na sexta', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('friday', '5:15-am')).toEqual(expected);
  });

  it('retorna open se o zoológico estiver aberto no sábado', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('saturday', '11:15-am')).toEqual(expected);
  });

  it('retorna closed se o zoológico estiver fechado no sábado', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('saturday', '5:15-am')).toEqual(expected);
  });

  it('retorna open se o zoológico estiver aberto no domingo', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('sunday', '11:15-am')).toEqual(expected);
  });

  it('retorna closed se o zoológico estiver fechado no domingo', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('sunday', '5:15-am')).toEqual(expected);
  });

  it('retorna data.hours se nenhum argumento for passado', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected)
  });

  it('retorna erro se o argumento day for inválido', () => {
    expect(() => getOpeningHours('Segunda', '03:15-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('retorna erro se o argumento dataHour tiver a hora inválida', () => {
    expect(() => getOpeningHours('Friday', 'teste:15-AM')).toThrow(`The hour should represent a number`);
  });

  it('retorna erro se o argumento dataHour tiver os minutos inválidos', () => {
    expect(() => getOpeningHours('Friday', '11:teste-AM')).toThrow(`The minutes should represent a number`);
  });

  it('retorna erro se o argumento dataHour tiver a abreviação inválida', () => {
    expect(() => getOpeningHours('Friday', '11:15-teste')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('retorna erro se o argumento dataHour receber um número inválido de horas', () => {
    expect(() => getOpeningHours('Friday', '13:15-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('retorna erro se o argumento dataHour receber um número inválido de minutos', () => {
    expect(() => getOpeningHours('Friday', '11:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
