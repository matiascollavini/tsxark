'use client'

import { useEffect, useState } from 'react'
import NavLinks from './nav-links'

export default function Header () {
  const [isSticky, setIsSticky] = useState(false)
  const links = [
    { href: '/', title: 'Inicio' },
    { href: '/productos?categoria=armas', title: 'Armas' },
    { href: '/productos?categoria=armaduras', title: 'Armaduras' },
    { href: '/productos?categoria=objetos', title: 'Objetos' },
    { href: '/compras', title: 'Compras' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`z-[10] fixed top-0 w-full mx-auto transition-all duration-300 ${isSticky ? 'p-4' : ''}`}>
      <div className={`flex justify-center items-center p-4 transition-all duration-300 ${isSticky ? 'bg-black/80 rounded-full' : ''}`}>
        <NavLinks links={links} />
      </div>
    </header>
  )
}
