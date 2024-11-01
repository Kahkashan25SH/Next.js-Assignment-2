import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <div id='nav'>
        <Link href='/'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/Contact'>Contact</Link>
            
      </div>


  )
}

export default Header