import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme = {theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
