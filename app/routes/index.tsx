import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'
import TextField from '~/components/TextField'
import { colorPreferenceCookie, getColorPreference } from '~/cookies'
import { AiOutlineMail } from 'react-icons/ai'
import FormSignUp from '~/components/FormSignUp'
import Button from '~/components/Button'

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
        <FormSignUp />
        <Form method="post">
          <Button size="large" type="submit">Change Theme</Button>
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
    </>
  )
}
