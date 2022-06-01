const nums = '(?<![\\w."])(?:\\d+\\.\\d+|\\d+)(?![\\w."])';
const texts = '"[^"]*"';
const variable = '[a-zA-Z]\\w*';

const declaracion_funcion = `(?<HB_declaracion_funcion>(?<p_reservada>\\bfunc\\b)\\s*(?<nombre_funcion>\\w*)\\s*(?<i_condicion>\\(?)\\s*(?<f_condicion>\\)?)\\s*(?<i_instruccion>\\{?)\\s*(?<instruccion>[^\\}]*)\\s*(?<f_instruccion>\\}?))`;

const declaracion_variable = `(?<H_declaracion_variable>(?<palabra_reservada>\\btxt\\b|\\bnum\\b)(?!\\s*(?:txt|num))\\s*(?<variable>(?:${variable})?)\\s*(?:(?<simbolo_asignacion>=)\\s*(?<valor>(?:${texts}|${nums})?))?\\s*(?<declaracion_fin>;)?)`;

const incorrecto = '(?<incorrecto>[^\\s\\}]+)';

export const regexLineas = new RegExp(
  `${declaracion_funcion}|${declaracion_variable}|${incorrecto}`,
  'gd'
);

export const regexBloques = new RegExp(
  `${declaracion_funcion}|${declaracion_variable}`,
  'gd'
);
