import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import TextField from '../TextField'
import { Wrapper, Sidebar, Title, Subtitle, ImageWrapper, Form } from './style'

const FormSignUp = () => {
  return (
    <Wrapper>
      <Form>
        <TextField
          iconPosition="left"
          icon={<AiOutlineMail />}
          placeholder="john.cage@gmail.com"
          label="E-mail"
          name="username"
        />
        <TextField
          iconPosition="left"
          icon={<CgProfile />}
          placeholder="John"
          label="Name"
          name="name"
        />
        <TextField
          iconPosition="left"
          icon={<AiFillLock />}
          placeholder="Password"
          label="Password"
          name="password"
        />
        <TextField
          iconPosition="left"
          icon={<AiFillLock />}
          placeholder="Confirm Password"
          label="Confirm Password"
          name="confirm-password"
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
