export const valores = [
  ['inicio_condicion', '('],
  ['fin_condicion', ')'],
  ['inicio_instruccion', '{'],
  ['fin_instruccion', '}'],
];

export const reemplazos = [
  [/func/g, 'function'],
  [/txt|num/g, 'let'],
  [/cond/g, 'if'],
  [/loop/g, 'for'],
  [/log/g, 'console.log'],
];
