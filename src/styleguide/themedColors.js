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
  toast_background: '#0f3327',
  toast_color: '#ace7d3',
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
  toast_background: '#e3f7f0',
  toast_color: '#2d9a76',
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
