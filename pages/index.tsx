
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/movies')
  }, [])

  return (
    <div>
      <h2>Home: Maybe I will use it for some kind of landing page in the future.</h2>
    </div>
  )
}

export default Home
