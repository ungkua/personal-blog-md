import React from 'react'
import Link from 'next/link'

export default function Navbar() {
 return (
    <nav className='border-black border border-b-4'>
        <div className='container flex justify-between p-6 mx-auto'>
            <div>
                <Link href='/' className='font-bold'>ua</Link>
            </div>
            <div>
                <Link href='/' className='mx-1.5 sm:mx-6 font-bold hover:italic'>home</Link>
                <Link href='/blog' className='mx-1.5 sm:mx-6 font-bold hover:italic'>blog</Link>
                <Link href='/aboutme' className='mx-1.5 sm:mx-6 font-bold hover:italic'>about me</Link>
            </div>
        </div>
    </nav>
  )
}
