// components/LogoutButton.js

import { useLogoutMutation } from '@/api/stormApi'
import { useAuth } from '@/hooks/auth'
import { classNames } from '@/utils/utils'

const LogoutButton = () => {
  const { setUser } = useAuth()
  const [logout, { isLoading }] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      const refreshToken = // Get the refresh token from your storage
        await logout(refreshToken).unwrap()
      setUser(null)
      // Remove the tokens from your storage
      // Redirect the user to the login page
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <a
      className={classNames('block px-3 py-1 text-sm leading-6 text-gray-900')}
      onClick={handleLogout}
      disabled={isLoading}
    >
      Sign Out
    </a>
  )
}

export default LogoutButton
