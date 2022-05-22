const functions =
  /(?<palabra_reservada>\bfunction\b)\s*(?<inicio_parametros>\()(?<fin_parametros>\))\s*(?<llave>\{?)/;

const vars =
  /(?<tipo_variable>\w+)?\s?(?<nombre_variable>\w+)(?:\s?=\s?)?(?<valor>[\w"]+)?;/;

const closure = /(?<cerradura>\})(?<abertura>\{)?/;

export const regexArray = [functions, vars, closure];
