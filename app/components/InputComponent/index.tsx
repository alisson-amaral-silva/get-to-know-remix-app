import React, { FC, InputHTMLAttributes } from "react";
import { Wrapper, Label, TextFieldWrapper, Icon, Input, ErrorMessage } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
  disabledInput?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const InputComponent: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  disabledInput = false,
  iconPosition = 'left',
  icon,
  ...rest
}) => {
  return (
    <Wrapper disabled={disabledInput} errorMessage={!!error}>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <TextFieldWrapper>
        {!!icon && (
          <Icon className="svg-icon" iconPosition={iconPosition}>
            {icon}
          </Icon>
        )}
        <Input
          {...register(name)}
          {...rest}
        />
      </TextFieldWrapper>
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default InputComponent;
