const darkTheme = {
  dark: true,
  primary: '#1d1f20',
  secondary: '#222526',
  editor_border: '#393d3f',
  editor_border_focus: '#44494c',
  font: '#e3e1de',
  font_light: '#B9C6C3',
  box_shadow: '1px 4px 4px 1px rgba(0,0,0,0.4)',
  scrollbar_thumb: 'rgba(255, 255, 255, 0.2)',
  selection_background: 'rgba(233, 233, 99, 0.2)',
  toast_background_success: '#0f3327',
  toast_color_success: '#ace7d3',
  toast_background_error: '#33150f',
  toast_color_error: '#e7b6ac',
  table_background: 'hsl(60, 55%, 13%)',
  table_color: 'hsl(60, 55%, 79%)',
};

const lightTheme = {
  primary: '#FFFFFF',
  secondary: '#f6f6f6',
  editor_border: '#ededed',
  editor_border_focus: '#c4c4c4',
  font: '#000000',
  font_light: '#978e81',
  box_shadow: '1px 4px 4px 1px rgba(194,194,194,0.4)',
  scrollbar_thumb: 'rgba(0, 0, 0, 0.2)',
  selection_background: 'rgba(233, 233, 99, 0.5)',
  toast_background_success: '#e3f7f0',
  toast_color_success: '#2d9a76',
  toast_background_error: '#f7e6e3',
  toast_color_error: '#9a3f2d',
  table_background: 'hsl(60, 56%, 93%)',
  table_color: 'hsl(60, 55%, 39%)',
};

export const darkColors = {
  ...darkTheme,
  opposite: {
    primary: lightTheme.primary,
  },
};

export const lightColors = {
  ...lightTheme,
  opposite: {
    primary: darkTheme.primary,
  },
};
