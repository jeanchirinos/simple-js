const tiposDeDatos = '(?<tipo_de_dato>number|text)',
  puntuaciones = '(?<puntuacion>{|}|\\(|\\))',
  palabrasReservadas = '(?<palabra_reservada>txt|num|func)',
  relaciones = '(?<relacion><=|>=|<>|<|>|=)',
  variables = '(?<![\\w."])(?<variable>[a-zA-Z]\\w*)(?![\\w].")',
  numeros = '(?<![\\w."])(?<numero>\\d+\\.\\d+|\\d+)(?![\\w."])',
  literales = '"(?<literal>[^"]+)"',
  aritmeticos = '(?<aritmetico>\\+|\\-|/|\\*|%)';

const patron = `${tiposDeDatos}|${puntuaciones}|${palabrasReservadas}|${relaciones}|${variables}|${numeros}|${literales}|${aritmeticos}`;

export default new RegExp(patron, 'g');
