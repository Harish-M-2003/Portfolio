// import { Inter } from 'next/font/google'
// "use client";
// import { Canvas } from '@react-three/fiber'
import './globals.css'
import Image from 'next/image'
// import { OrbitControls } from '@react-three/drei'
// import { Suspense } from 'react'
// import Model from '@/public/Earth'
// import ReactAudioPlayer from 'react-audio-player';
// import Earth from './Components/Earth'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Personal protfolio',
}

export default function RootLayout({ children }) {
  // rgb(43,31,25)
  // need to edit the image bakground color is not black
  return (
    <html lang="en">
      
      <body className={` max-md:bg-black bg-gradient-to-l from-black  via-black via-40% to-gray-900 md:to-90% `}>
      <Image 
        priority={true} 
        alt="img" 
        src={require("../app/india.jpg")} 
        style={{zIndex : 1}}  
        width={800} 
        className="md:h-full max-md:h-full opacity-[0.1] absolute"
      />

        {children}
        
        {/* <footer className="flex justify-center p-5">
                <p className="text-white">Made By <span className="font-bold text-xl">Harish M</span>.</p>
            </footer> */}
        </body>
    </html>
  )
}
