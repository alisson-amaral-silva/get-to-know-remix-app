import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import { Wrapper } from './style'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>

export type ButtonProps = {
  size?: 'medium' | 'small' | 'large'
  minimal?: boolean
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref
) => (
  <Wrapper
    minimal={minimal}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
    ref={ref}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
)

export default forwardRef(Button)
