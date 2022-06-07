import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { Button } from '~/components/Button'
import { colorPreferenceCookie, getColorPreference } from '~/cookies'

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorPreference(request)
  const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light'

  return redirect(request.url, {
    headers: {
      'Set-Cookie': await colorPreferenceCookie.serialize(newColorScheme),
    },
  })
}

export default function Index() {
  return (
    <>
      <div>
        <Form method="post">
          <Button type="submit">Change Theme</Button>
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
          <input type="password" placeholder="Confirm Password" name="cpsw" required />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked={true} name="remember" /> Remember me
          </label>
        </div>
      </div>
    </>
  )
}
