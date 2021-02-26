import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme  {
    title: string,

    colors: {
      primary: string,
      secundary: string,

      background: string,
      accent: string,
      primaryInput: string,
      primaryPlaceholder: string,
      textButton: string,
      box: string,
      text: string;
      textSecundary: string,
    },
  }
}

