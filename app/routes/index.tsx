import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { Button } from '~/components/Button'
import TextField from '~/components/TextField'
import { colorPreferenceCookie, getColorPreference } from '~/cookies'
import { AiOutlineMail } from 'react-icons/ai'

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorPreference(request)
  const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light'

  return redirect(request.url, {
    headers: {
      'Set-Cookie': await colorPreferenceCookie.serialize(newColorScheme)
    }
  })
}

export default function Index() {
  return (
    <>
      <div>
        <Form method="post">
          <Button type="submit">Change Theme</Button>
          <div style={{ maxWidth: 300, padding: 15 }}>
            <TextField
              iconPosition="left"
              icon={<AiOutlineMail />}
              placeholder="john.cage@gmail.com"
              label="E-mail"
              name="username"
            />
          </div>
        </Form>
      </div>
      <div>
        <h1>Welcome to Remix</h1>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Username" name="uname" required />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Email" name="email" required />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Password" name="psw" required />

          <label htmlFor="cpsw">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="cpsw"
            required
          />

          <button type="submit">Login</button>
        </div>
      </div>
    </>
  )
}
