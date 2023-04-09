import 'focus-visible'
import '@/styles/tailwind.css'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { UserProvider } from '@/contexts/UserContext'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  )
}
