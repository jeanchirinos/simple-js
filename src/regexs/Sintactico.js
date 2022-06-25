import id from 'uniqid';

const p_reservada = 'palabra_reservada__',
  i_condicion = 'inicio_condicion__',
  f_condicion = 'fin_condicion__',
  condicion = 'condicion__',
  instruccion = 'instruccion__',
  i_instruccion = 'inicio_instruccion__',
  f_instruccion = 'fin_instruccion__';

const numeros = '(?<![\\w."])(?:\\d+\\.\\d+|\\d+)(?![\\w."])';
const textos = '"[^"]*"';
const variables = '[a-zA-Z]\\w*';

const BLOQUE_INSTRUCCION = () =>
  `(?<${id(i_instruccion)}>\\{?)(?<${id(instruccion)}>[^\\}]*)(?<${id(
    f_instruccion
  )}>\\}?)`;

const BLOQUE_CONDICION = () =>
  `(?<${id(i_condicion)}>\\(?)(?<${id(condicion)}>[^\\)]*)(?<${id(
    f_condicion
  )}>\\)?)`;

const declaracion_funcion = `(?<H_declaracion_funcion>(?<${id(
  p_reservada
)}>\\bfunc\\b)\\s*(?<nombre_funcion>\\w*)\\s*(?<${id(i_condicion)}>\\(?)(?<${id(
  condicion
)}>[^\\)]*)?(?<${id(f_condicion)}>\\)?)\\s*${BLOQUE_INSTRUCCION()})`;

const declaracion_variable = `(?<H_declaracion_variable>(?<${id(
  p_reservada
)}>\\btxt|\\bnum)(?!\\s*(?:txt|num))\\s*(?<variable>(?:${variables})?)\\s*(?:(?<simbolo_asignacion>=)\\s*(?<valor>(?:${textos}|${numeros})?))?\\s*(?<fin_declaracion>;)?)`;

const declaracion_condicion = `(?<H_condicion>(?<${id(
  p_reservada
)}>\\bcond\\b)\\s*${BLOQUE_CONDICION()}\\s*${BLOQUE_INSTRUCCION()})`;

const declaracion_loop = `(?<H_loop>(?<${id(
  p_reservada
)}>\\bloop\\b)\\s*${BLOQUE_CONDICION()}\\s*${BLOQUE_INSTRUCCION()})`;

const impresion = `(?<H_impresion>(?<${id(
  p_reservada
)}>\\blog\\b)\\s*(?<inicio_valor>\\(?)(?<valor_impresion>[^\\)]*)(?<fin_valor>\\)?)(?<fin_impresion>;)?)`;

const incorrecto = '(?<incorrecto>\\S+)';

export default new RegExp(
  `${declaracion_funcion}|${declaracion_variable}|${impresion}|${declaracion_condicion}|${declaracion_loop}|${incorrecto}`,
  'gd'
);
