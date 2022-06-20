const temaOscuro = {
  oscuro: true,
  primario: '#1d1f20',
  secundario: '#222526',
  fuente: '#e3e1de',
  fuente_light: '#B9C6C3',
  barra_scroll: 'rgba(255, 255, 255, 0.2)',
  seleccion: 'rgba(233, 233, 99, 0.2)',
  editor_borde: '#393d3f',
  editor_borde_seleccionado: '#44494c',
  editor_sombra: '1px 4px 4px 1px rgba(0,0,0,0.4)',
  tabla_fila_fondo: 'hsl(60, 55%, 13%)',
  tabla_fila_fuente: 'hsl(60, 55%, 79%)',
  notificador_fondo_exito: '#0f3327',
  notificador_fuente_exito: '#ace7d3',
  notificador_fondo_error: '#33150f',
  notificador_fuente_error: '#e7b6ac',
  advertencia_fondo: '#3a3a08',
  advertencia_fuente: '#f2f2a1',
  error_fondo: '#330f0f',
  error_fuente: '#fca5a5',
};

const temaClaro = {
  primario: '#FFFFFF',
  secundario: '#f6f6f6',
  fuente: '#000000',
  fuente_light: '#978e81',
  barra_scroll: 'rgba(0, 0, 0, 0.2)',
  seleccion: 'rgba(233, 233, 99, 0.5)',
  editor_borde: '#ededed',
  editor_borde_seleccionado: '#c4c4c4',
  editor_sombra: '1px 4px 4px 1px rgba(194,194,194,0.4)',
  tabla_fila_fondo: 'hsl(60, 56%, 93%)',
  tabla_fila_fuente: 'hsl(60, 55%, 39%)',
  notificador_fondo_exito: '#e3f7f0',
  notificador_fuente_exito: '#2d9a76',
  notificador_fondo_error: '#f7e6e3',
  notificador_fuente_error: '#9a3f2d',
  advertencia_fondo: '#F6F6C1',
  advertencia_fuente: '#AEAE19',
  error_fondo: '#FECACA',
  error_fuente: '#C84141',
};

export const coloresOscuros = {
  ...temaOscuro,
  opuesto: {
    primario: temaClaro.primario,
  },
};

export const coloresClaros = {
  ...temaClaro,
  opuesto: {
    primario: temaOscuro.primario,
  },
};
