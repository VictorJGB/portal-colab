import React, { ReactNode, useLayoutEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useSessionStorage } from '@/hooks/use-session-storage'

export default function privateRoute(Component: any) {
  return function isAuth(props: any) {
    const {getItem} = useSessionStorage('isLogged')
    const {push} = useRouter()

    useLayoutEffect(() => {
      if(!getItem) {
        return push('/login')
      }
    }, [])

    return <Component {...props} />
  }
}