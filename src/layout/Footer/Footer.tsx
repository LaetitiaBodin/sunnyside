import Navbar from "./_Navbar"
import Socials from "./_Socials"

import { ReactComponent as SVGLogo } from '../../icons/logo.svg'

export default function Footer () {
  return (
    <footer className="w-full flex flex-col items-center py-20 px-5 bg-jordyBlue">
      <div>
        < SVGLogo className="fill-midnight h-[2rem] block" />
      </div>
      < Navbar />
      < Socials />
    </footer>
  )
}