// components/Layout.js
import AuthenticatedHeader from './AuthenticatedHeader'
import UnauthenticatedHeader from './UnauthenticatedHeader'
import AuthenticatedFooter from './AuthenticatedFooter'
import UnauthenticatedFooter from './UnauthenticatedFooter'
import { useAuth } from '@/hooks/auth'

const Layout = ({ children }) => {
  const user = useAuth()

  return (
    <div>
      {user ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
      <main>{children}</main>
      {user ? <AuthenticatedFooter /> : <UnauthenticatedFooter />}
    </div>
  )
}

export default Layout
