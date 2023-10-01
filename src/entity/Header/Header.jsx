import React from 'react'
import Logo from '../../ui/Logo/Logo'
import './Header.css'
export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="col-xl-2">
                <Logo />
            </div>
        </div>
    </header>
  )
}
