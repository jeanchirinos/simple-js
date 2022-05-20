const regExpPattern =
  '^(?<Bloque>(?<palabra_reservada>if)(?<inicio_condicion>\\()(?<condicion>.+)(?<fin_condicion>\\))\\s(?<inicio_bloque>{)\\n(?<instruccion>.+);\\n(?<fin_bloque>}))';

export const regExp = new RegExp(regExpPattern, 'd'),
  regExpAll = new RegExp(regExpPattern, 'dgm');
