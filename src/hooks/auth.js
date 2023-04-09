import { useUser } from '@/contexts/UserContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = () => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  return user
}
