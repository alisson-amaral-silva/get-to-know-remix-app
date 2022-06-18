import { styled } from '@stitches/react'

export const TextFieldWrapper = styled('div', {
  display: 'flex',
  background: '$lightGray',
  borderRadius: '0.2rem',
  border: '0.13rem solid',
  borderColor: '$lightGray',
  padding: '0 1rem',
  '&:focus-within': {
    boxShadow: '0 0 0.5rem #F231A5'
  },
  height: 45,
})

export const Icon = styled('div', {
  color: '#8F8F8F',
  width: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    iconPosition: {
      right: {
        order: 1
      },
      left: {
        order: 0
      }
    }
  },

  '& > svg': {
    width: '100%'
  }
})

export const Input = styled('input', {
  color: '$black',
  fontFamily: 'Poppins',
  padding: '0.8rem 0',
  fontSize: '1rem',
  background: 'transparent',
  border: '0',
  outline: 'none',
  width: '100%',
  '&:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 2.4rem $lightGray inset',
    filter: 'none'
  }
})

export const Label = styled('label', {
  color: '$black',
  fontSize: '1.2rem',
  cursor: 'pointer',
  fontFamily: '$fontFamily'
})

export const ErrorMessage = styled('p', {
  fontSize: '1.2rem',
  color: '$red'
})

export const Wrapper = styled('div', {
  variants: {
    errorMessage: {
      true: {
        [`& ${TextFieldWrapper}`]: {
          borderColor: '$red'
        },
        [`& ${Icon}`]: {
          color: '$red'
        },
        [`& ${Label}`]: {
          color: '$red'
        }
      }
    },
    disabled: {
      true: {
        [`& ${Input}`]: {
          cursor: 'not-allowed',
          '&::placeholder': {
            color: 'currentColor'
          }
        },
        [`& ${Icon}`]: {
          cursor: 'not-allowed',
          '&::placeholder': {
            color: 'currentColor'
          }
        },
        [`& ${Label}`]: {
          cursor: 'not-allowed',
          '&::placeholder': {
            color: 'currentColor'
          }
        }
      }
    }
  }
})
