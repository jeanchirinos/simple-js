const dataTypes = '(?<tipo_de_dato>int|double)';
const curlyBraces = '(?<llave_de_apertura>{)|(?<llave_de_cierre>})';
const reserverdWords = '(?<palabra_reservada>const|if|else|for)';
const relations = '(?<relacion><=|>=|<>|<|>|=)';
const ids = '(?<id>[a-zA-Z]+\\w*)';
const nums = '(?<numero>\\d+\\.\\d+|\\d+)';
const literals = '"(?<literal>[^"\\s.]+)"';
const arithmetic = '(?<aritmetico>\\+|\\-|/|\\*||%)';

const regExpPattern = `${dataTypes}|${curlyBraces}|${reserverdWords}|${relations}|${ids}|${nums}|${literals}|${arithmetic}`;

export const regExpPerLine = new RegExp(regExpPattern, 'dg');

const BLOCK_IF =
  '^(?<Bloque_IF>(?<palabra_reservada>if)(?<inicio_condicion>\\()(?<condicion>.+)(?<fin_condicion>\\))\\s(?<inicio_bloque>{)\\n(?<instruccion>.+);\\n(?<fin_bloque>}))';
// const BLOCK_FOR = '(?<Bloque_FOR>for\\(\\))';

const regExpPattern2 = `${BLOCK_IF}`;

export const regExpMultiline = new RegExp(regExpPattern2, 'dgm');
