const numeros = '(?<![\\w."])(?:\\d+\\.\\d+|\\d+)(?![\\w."])';
const textos = '"[^"]*"';
const variables = '[a-zA-Z]\\w*';

const declaracion_funcion = `(?<H_declaracion_funcion>(?<p_reservada>\\bfunc\\b)\\s*(?<nombre_funcion>\\w*)\\s*(?<i_condicion>\\(?)\\s*(?<f_condicion>\\)?)\\s*(?<i_instruccion>\\{?)(?<instruccion>[^\\}]*)(?<f_instruccion>\\}?))`;

const declaracion_variable = `(?<H_declaracion_variable>(?<palabra_reservada>\\btxt|\\bnum)(?!\\s*(?:txt|num))\\s*(?<variable>(?:${variables})?)\\s*(?:(?<simbolo_asignacion>=)\\s*(?<valor>(?:${textos}|${numeros})?))?\\s*(?<declaracion_fin>;)?)`;

const incorrecto = '(?<incorrecto>\\S+)';

export default new RegExp(
  `${declaracion_funcion}|${declaracion_variable}|${incorrecto}`,
  'gd'
);

// BLOQUES

// const BLOQUE = tipo =>
//   `\\s*(?<i_bloque_${tipo}>{)\\s*(?<instruccion_${tipo}>.+)\\s*(?<f_bloque_${tipo}>})`;

// const BLOQUE_IFELSE = `(?<Bloque_IFELSE>(?<p_reservada_IE>\\bif\\b)\\s*(?<i_condicion_IE>\\()(?<condicion_IE>.+)(?<f_condicion_IE>\\))${BLOQUE(
//   'IE'
// )}\\s*(?<p_reservada_E>\\belse\\b)\\s*(?<i_bloque_E>{)\\s*(?<instruccion_E>.+)\\s*(?<f_bloque_E>}))`;

// const BLOQUE_IF = `(?<Bloque_IF>(?<p_reservada_I>\\bif\\b)\\s*(?<i_condicion_I>\\()(?<condicion_I>.+)(?<f_condicion_I>\\))${BLOQUE(
//   'I'
// )})`;

// const BLOQUE_FOR = `(?<Bloque_FOR>(?<p_reservada_F>\\bfor\\b)\\s*(?<i_condicion_F>\\()(?<condicion_F>.+;.+;.+)(?<f_condicion_F>\\))${BLOQUE(
//   'F'
// )})`;

// `${BLOQUE_IFELSE}|${BLOQUE_IF}|${BLOQUE_FOR}`;
