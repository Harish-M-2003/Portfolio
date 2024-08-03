import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { BsGithub } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Harish M',
  description: 'I build awesome websites and apps, from start to finish',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      {/* <Image
          alt="img"
          src={require("../app/india.jpg")}
          // style={{ zIndex: 1 }}
          width={700}
          className="opacity-[0.1] h-screen absolute md:hidden"
        /> */}
      <body className={`bg-gradient-to-l from-black  via-black via-40% to-gray-900`}>
        <nav className='text-white p-5 flex justify-end sm:hidden z-10'>
          <Link href={"https://github.com/Harish-M-2003"} target='_blank'>
          <BsGithub className="text-white text-xl"/>
          </Link>
        </nav>
        {children}
        <footer className='flex justify-center items-center p-2'>
          <p className='text-white text-sm' style={{fontFamily : "Orbitron"}}>Made by <span className='text-blue-200 font-bold underline'> Harish M</span></p>
        </footer>
      </body>
      {/* <Script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"/> */}
    </html>
  )
}
