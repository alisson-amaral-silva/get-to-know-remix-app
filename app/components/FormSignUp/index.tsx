import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { Wrapper, Sidebar, Title, Subtitle, ImageWrapper } from './style'
import { FormSchema } from '~/utils/Forms/registerFormSchema'
import Button from '../Button'
import Form from '../Form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import InputComponent from '../InputComponent'

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(FormSchema) })

  const onSubmit = (data: any) => console.log(data)

  return (
    <Wrapper>
      <Form onSubmit={onSubmit} register={register} handleSubmit={handleSubmit}>
        <InputComponent
          placeholder="john@gmail.com"
          label="E-mail"
          type="email"
          name="email"
          error={errors.email?.message}
        />

        <InputComponent
          placeholder="John"
          label="Name"
          name="name"
          error={errors.name?.message}
        />

        <InputComponent
          placeholder="JohnSmithers"
          label="Username"
          name="username"
          error={errors.username?.message}
        />

        <InputComponent
          placeholder="Password"
          type="password"
          name="password"
          label="Password"
          error={errors.password?.message}
        />
        <InputComponent
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          error={errors.confirmPassword?.message}
        />
      </Form>
      <Sidebar>
        <ImageWrapper
          src="images/profile-image.png"
          alt="shonen-jump-main-characters"
        />
        <Title>Hello, Friend!</Title>
        <Subtitle>Enter your personal details</Subtitle>
        <Subtitle>It should only take a couple minutes</Subtitle>
      </Sidebar>
    </Wrapper>
  )
}

export default FormSignUp
