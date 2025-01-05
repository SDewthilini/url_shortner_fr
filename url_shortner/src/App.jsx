import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react'


function App() {
  const {getToken} = useAuth()

  

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken()
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    fetchToken()
  }, [getToken])

  return (
    <>
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App
