// import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
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
      
      <body className={` max-md:bg-black md:bg-gradient-to-l from-black  via-black via-40% to-gray-900 md:to-90%`}>
      <Image priority={true} alt="img" src={require("../app/india.jpg")} style={{zIndex : 1}}  width={800} className="h-full z-1 opacity-[0.1] absolute fixed"/>
      {/* <Earth/>   */}

        {children}
        </body>
    </html>
  )
}
