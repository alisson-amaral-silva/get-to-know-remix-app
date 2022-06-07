import { createCookie } from "@remix-run/node"

// Create a cookie to track color scheme state
export let colorPreferenceCookie = createCookie('color-preference')

// Helper function to get the value of the color scheme cookie
export const getColorPreferenceToken = async (request: Request) =>
colorPreferenceCookie.parse(request.headers.get('Cookie'))

export const getColorPreference = async (request: Request) => {
  // Manually selected theme
  const userSelectedColorScheme = await getColorPreferenceToken(request)
  // System preferred color scheme header
  const systemPreferredColorScheme = request.headers.get(
    'Sec-CH-Prefers-Color-Preference'
  )

  // Return the manually selected theme
  // or system preferred theme or default theme
  return userSelectedColorScheme ?? systemPreferredColorScheme ?? 'light'
}