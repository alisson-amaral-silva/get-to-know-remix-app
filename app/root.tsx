import type { HeadersFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getColorPreference } from './cookies'

export const headers: HeadersFunction = () => ({
  'Accept-CH': 'Sec-CH-Prefers-Color-Preference',
})

export const loader: LoaderFunction = async ({ request }) => ({
  colorScheme: await getColorPreference(request),
})

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const { colorScheme } = useLoaderData()


  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={colorScheme}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
