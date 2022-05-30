// const funciones =
//   /(?<palabra_reservada>\bfunction\b)\s*(?<inicio_parametros>\()(?<fin_parametros>\))\s*(?<llave>\{?)/;

// const variables =
//   /(?<tipo_variable>\w+)?\s?(?<nombre_variable>\w+)(?:\s?=\s?)?(?<valor>[\w"]+)?;/;

// export const numero =
//   /(?<B_declaracion_numero>\s*(?<palabra_reservada>\bnum\b)\s*(?<variable>(?:[a-zA-Z](?:\w*))?)\s*(?:(?<simbolo_asignacion>=)\s*(?<valor>\d*))?\s*(?<O_fin_declaracion>;)?\s*)/;

// todo menos epsacio

const nums = '(?<![\\w."])(?:\\d+\\.\\d+|\\d+)(?![\\w."])';
const texts = '"[^"]*"';
const variable = '[a-zA-Z]\\w*';

const numeroA =
  /\s*(?<palabra_reservada>\btxt\b|\bnum\b)\s*(?<variable>(?:[a-zA-Z](?:\w*))?)\s*(?<O_fin_declaracion>;)?\s*/;

const numeroB =
  /\s*(?<palabra_reservada>\btxt\b|\bnum\b)\s*(?<variable>(?:[a-zA-Z](?:\w*))?)\s*(?<simbolo_asignacion>=)\s*(?<valor>(?:"[^"]*"|(?<![\w."])(?:\d+\.\d+|\d+)(?![\w."]))?)\s*(?<O_fin_declaracion>;)?\s*/;

export const numero2 = new RegExp(
  `(?<B_declaracion_variable>(?<palabra_reservada>\\btxt\\b|\\bnum\\b)\\s*(?<variable>${variable})?\\s*(?<simbolo_asignacion>=)?\\s*(?<valor>${texts}|${nums})?\\s*(?<fin_declaracion>;)?)`,
  'dgm'
);

// export const numero2Alt = new RegExp(
//   `(?<B_declaracion_variable>(?<palabra_reservada>\\btxt\\b|\\bnum\\b)\\s*(?<variable>${variable})?\\s*(?<simbolo_asignacion>=)?\\s*(?<valor>${texts}|${nums})?\\s*(?<fin_declaracion>;)?)`,
//   'dgm'
// );

// export const numero3 =
//   /(?<B_declaracion_variable>\s*(?<palabra_reservada>\btxt\b|\bnum\b)\s*(?<variable>(?:[a-zA-Z](?:\w*))?)\s*(?:(?<simbolo_asignacion>=?)\s*(?<valor>(?:"[^"]*"|(?<![\w."])(?:\d+\.\d+|\d+)(?![\w."])))?)\s*(?<fin_declaracion>;)?\s*)/dgm;

// export const regexs = [functions, vars];
export const regexs = [numeroB, numeroA];
