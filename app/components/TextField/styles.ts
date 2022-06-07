import { styled } from '@stitches/react'

export const TextField = styled('input', {
  appearance: 'none',
})

export const TextFieldWrapper = styled('div', {
  display: 'flex',
  background: '#EAEAEA',
  borderRadius: '0.2rem',
  padding: '0 1.6rem',
  border: '0.2rem solid',
  borderColor: '#EAEAEA',
  '&:focusWithin': {
    boxShadow: '0 0 0.5rem #F231A5',
  },
})

export const Icon = styled('div', {
  color: '#8F8F8F',
  width: '2.5rem',
  display: 'flex',
  variants: {
    iconPosition: {
      right: {
        order: 1,
      },
      left: {
        order: 0,
      },
    },
  },
  '& > svg': {
    width: '100%',
  },
})

export const Input = styled('input', {
  color: '#030517',
  fontFamily: 'Poppins',
  padding: '0.8rem 0',
  fontSize: '1.6rem',
  background: 'transparent',
  border: '0',
  outline: 'none',
  width: '100%',
  '&:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 2.4rem #EAEAEA inset',
    filter: 'none',
  },
})

export const Label = styled('label', {
  color: '#030517',
  fontSize: '2.4rem',
  cursor: 'pointer',
})

export const ErrorMessage = styled('p', {
  fontSize: '1.6rem',
  color: '#FF6347',
})

export const Wrapper = styled('div', {
  variants: {
    errorMessage: {
      true: {
        [`& ${TextFieldWrapper}`]: {
          borderColor: '#FF6347',
        },
        [`& ${Icon}`]: {
          color: '#FF6347',
        },
        [`& ${Label}`]: {
          color: '#FF6347',
        },
      },
    },
    disabled: {
        true: {
          [`& ${Input}`]: {
            cursor: 'not-allowed',
            '&::placeholder': {
              color: 'currentColor',
            },
          },
          [`& ${Icon}`]: {
            cursor: 'not-allowed',
            '&::placeholder': {
              color: 'currentColor',
            },
          },
          [`& ${Label}`]: {
            cursor: 'not-allowed',
            '&::placeholder': {
              color: 'currentColor',
            },
          },
        },
      },
  },
})
