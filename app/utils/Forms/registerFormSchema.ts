import * as yup from 'yup'

export const FormSchema = yup
  .object({
    email: yup.string().email().required('Email is required'),
    name: yup.string().required('Name is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords does not match')
  })
  .required()
