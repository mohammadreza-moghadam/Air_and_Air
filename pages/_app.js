import '../styles/globals.css'
import AppThemeProvider from "../themes/AppThemeProvider";
import {DataProvider} from "../context/DataContext";

function MyApp({ Component, pageProps }) {
  return (
      <DataProvider>
          <AppThemeProvider>
              <Component {...pageProps} />
          </AppThemeProvider>
      </DataProvider>
  )
}

export default MyApp
