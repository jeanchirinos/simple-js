export const valores = [
  ['i_condicion', '('],
  ['f_condicion', ')'],
  ['i_instruccion', '{'],
  ['f_instruccion', '}'],
];

export const reemplazos = [
  [/func/g, 'function'],
  [/txt|num/g, 'let'],
];
