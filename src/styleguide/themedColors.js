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
};

export const darkColors = {
  ...darkTheme,
  opposite: {
    ...lightTheme,
  },
};

export const lightColors = {
  ...lightTheme,
  opposite: {
    ...darkTheme,
  },
};