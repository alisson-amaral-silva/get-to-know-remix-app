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
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
