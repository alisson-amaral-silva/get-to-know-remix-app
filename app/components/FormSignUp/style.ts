import { styled } from '@stitches/react'

export const Wrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr'
})

export const Sidebar = styled('div', {
  height: '100vh',
  backgroundColor: '$primary',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})



export const Title = styled('h1', {
  color: '$text',
  margin: 0,
  fontSize: '3.8rem'
})

export const Subtitle = styled('h2', {
  color: '$text',
  margin: 0,
  fontSize: '1.8rem'
})

export const ImageWrapper = styled('img', {
  margin: '5rem'
})
