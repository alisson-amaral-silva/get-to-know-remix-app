import React from 'react'
import { useForm } from 'react-hook-form'
import { FormWrapper } from './style'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../Button'

export interface IFormProps {
  defaultValues?: any
  children?: React.ReactNode
  onSubmit?: any
  handleSubmit?: any
  register?: any
}

const Form = ({
  defaultValues,
  children,
  onSubmit,
  handleSubmit,
  register,
  ...rest
}: IFormProps) => {
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name
                  }
                })
              : child
          })
        : children}
      <Button>Sign Up</Button>
    </FormWrapper>
  )
}

export default Form
