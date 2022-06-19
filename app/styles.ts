import { styled } from "stitches.config";

export const Body = styled('body', {
  fontFamily: '$fontFamily',
  fontSize: '$sizes$medium',
  padding: 0,
  margin: 0,
  p: {
    margin: 0
  },
})

export const Html = styled('html', {
  '*': {
    boxSizing: 'border-box',
    '&::before': {
      boxSizing: 'inherit'
    },
    '&::after': {
      boxSizing: 'inherit'
    },
  },
  fontFamily: '$fontFamily',
  fontSize: '62.5%',
  height: '100%',
  padding: 0,
  margin: 0,
})
