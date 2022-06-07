import type { InputHTMLAttributes} from "react";
import { useState } from "react"
import { ErrorMessage, Icon, Input, Label, TextFieldWrapper, Wrapper } from "./styles";

export type TextFieldProps = {
    onInputChange?: (value: string) => void
    label?: string
    initialValue?: string
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    disabledInput?: boolean
    errorMessage?: string
  } & InputHTMLAttributes<HTMLInputElement>
  
const TextField = ({
    label,
    initialValue = '',
    onInputChange,
    icon,
    iconPosition = 'left',
    disabledInput = false,
    errorMessage,
    name,
    ...props
  }: TextFieldProps) => {
    const [value, setValue] = useState(initialValue)
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value
      setValue(newValue)
  
      !!onInputChange && onInputChange(newValue)
    }
  
    return (
      <Wrapper disabled={disabledInput} errorMessage={!!errorMessage}>
        {!!label && <Label htmlFor={name}>{label}</Label>}
        <TextFieldWrapper>
          {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
          <Input
            type="text"
            onChange={onChange}
            value={value}
            disabled={disabledInput}
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
          />
        </TextFieldWrapper>
        {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
    )
  }
  
  export default TextField