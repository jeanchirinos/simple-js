const dataTypes = '(?<tipo_de_dato>number|text)',
  curlyBraces = '(?<puntuacion>{|}|\\(|\\))',
  reserverdWords = '(?<palabra_reservada>const|if|else|for)',
  relations = '(?<relacion><=|>=|<>|<|>|=)',
  variables = '(?<![\\w."])(?<variable>[a-zA-Z]\\w*)(?![\\w].")',
  nums = '(?<![\\w."])(?<numero>\\d+\\.\\d+|\\d+)(?![\\w."])',
  literals = '"(?<literal>[^"]+)"',
  arithmetic = '(?<aritmetico>\\+|\\-|/|\\*|%)';

const regExpPattern = `${dataTypes}|${curlyBraces}|${reserverdWords}|${relations}|${variables}|${nums}|${literals}|${arithmetic}`;

export const regexForLines = new RegExp(regExpPattern, 'dg');

// BLOCKS
const BLOCK = type =>
  `\\s*(?<i_bloque_${type}>{)\\s*(?<instruccion_${type}>.+)\\s*(?<f_bloque_${type}>})`;

const BLOCK_IFELSE = `(?<Bloque_IFELSE>(?<p_reservada_IE>\\bif\\b)\\s*(?<i_condicion_IE>\\()(?<condicion_IE>.+)(?<f_condicion_IE>\\))${BLOCK(
  'IE'
)}\\s*(?<p_reservada_E>\\belse\\b)\\s*(?<i_bloque_E>{)\\s*(?<instruccion_E>.+)\\s*(?<f_bloque_E>}))`;

const BLOCK_IF = `(?<Bloque_IF>(?<p_reservada_I>\\bif\\b)\\s*(?<i_condicion_I>\\()(?<condicion_I>.+)(?<f_condicion_I>\\))${BLOCK(
  'I'
)})`;

const BLOCK_FOR = `(?<Bloque_FOR>(?<p_reservada_F>\\bfor\\b)\\s*(?<i_condicion_F>\\()(?<condicion_F>.+;.+;.+)(?<f_condicion_F>\\))${BLOCK(
  'F'
)})`;

const regExpPattern2 = `${BLOCK_IFELSE}|${BLOCK_IF}|${BLOCK_FOR}`;

export const regexForBlocks = new RegExp(regExpPattern2, 'dgm');
