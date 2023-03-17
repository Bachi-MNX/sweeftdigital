import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation,Plain } from './home.styled'

function Home() {
  return (
    <Navigation>
      <Link to="/">
        <Plain>Home</Plain>
      </Link>
    </Navigation>
  )
}

export default Home