import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/Asserts/Images/logo.png'

function NavBar() {
    return (
        <div>
            <nav className='flex justify-between mx-8 py-7'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Link href={"/"}>
                    <Image className='h-16 w-16' src={logo} alt='logo' />
                    </Link>
                </div>
                {/* Links */}
                <div className='hidden md:flex flex-row gap-8 text-xl  items-center '>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/dashboard'}>Dashboard</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/career'}>Career</Link>
                </div>

            </nav>

        </div>
    )
}

export default NavBar