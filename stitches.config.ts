import { createStitches } from '@stitches/react'

export const { styled, createTheme, globalCss, getCssText, theme } =
  createStitches({
    theme: {
      fonts: {
        fontFamily:
          'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        light: 300,
        normal: 400,
        bold: 600
      },
      sizes: {
        xsmall: '1.2rem',
        small: '1.4rem',
        medium: '1.6rem',
        large: '1.8rem',
        xlarge: '2.0rem',
        xxlarge: '2.8rem',
        huge: '5.2rem'
      },
      colors: {
        text: '#191919',
        bgBody: '#f8f9fa',
        red: '#FF6347',
        black: '#030517',
        lightGray: '#EAEAEA',
        anchor: 'DarkGoldenRod'
      }
    }
  })

export const darkTheme = createTheme('dark', {
  colors: {
    text: '#f8f9fa',
    bgBody: '#191919',
    red: '#FF6347',
    black: '#030517',
    lightGray: '#EAEAEA',
    anchor: 'BlanchedAlmond'
  },
  font: {
    fontFamily:
      'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    light: 300,
    normal: 400,
    bold: 600
  }
})

export const globalStyles = globalCss({
  body: {
    color: '$text',
    fontFamily: '$fontFamily',
    backgroundColor: '$bgBody'
  },
  a: {
    color: '$anchor'
  },
  [`${darkTheme}`]: {}
})
