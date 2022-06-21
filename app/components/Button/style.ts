import { styled } from '@stitches/react'

export const Wrapper = styled('button', {
  height: '100vh',
  backgroundColor: '$primary',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$colors$primary',
  color: '$colors$white',
  border: 0,
  cursor: 'pointer',
  borderRadius: '0.4rem',
  padding: '0.8rem',
  textDecoration: 'none',
  '&:focus': {
    boxShadow: '0 0 0 3px $colors$secondary'
  },
  variants: {
    size: {
      small: {
        height: '3rem',
        fontSize: '1.2rem'
      },
      medium: {
        height: '4rem',
        fontSize: '1.4rem',
        padding: '0.8rem 3.2rem'
      },
      large: {
        height: '5rem',
        fontSize: '1.6rem',
        padding: '0.8rem 4.8rem'
      }
    },
    minimal: {
      true: {
        color: '$colors$black',
        border: '1px solid $colors$primary',
        background: 'none',
        '&:focus': {
          boxShadow: '0 0 0 3px $colors$primary'
        }
      },
      false: {
        color: '$colors$white'
      }
    },
    hasicon: {
      true: {
        '& svg': {
          width: ' 1.5rem',
          '& + span': {
            marginLeft: '0.8rem'
          }
        }
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        filter: 'saturate(30%)'
      }
    }
  }
})
