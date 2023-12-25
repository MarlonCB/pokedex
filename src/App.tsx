import { MantineProvider, createTheme } from '@mantine/core'

import '@mantine/core/styles.css'
import Layout from './components/Layout/Layout'

function App() {
  const theme = createTheme({
    fontFamily: 'Roboto, sans-serif',
  })

  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Layout />
    </MantineProvider>
  )
}

export default App
