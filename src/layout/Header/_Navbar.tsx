import { useState } from "react"

import { ReactComponent as SVGLogo } from '../../icons/logo.svg'
import { ReactComponent as SVGBurger } from '../../icons/hamburger-menu.svg'

interface ILink {
  text: string,
  url: any,
  isLast?: boolean
}

export default function Navbar () {

	// Toggle state for the menu on smartphone
	const [open, setOpen] = useState<boolean>(false)

  const links : ILink[] = [
    {
      text : "About",
      url : process.env.PUBLIC_URL
    },
    {
      text : "Services",
      url : process.env.PUBLIC_URL
    },
    {
      text : "Projects",
      url : process.env.PUBLIC_URL
    },
    {
      text : "Contact",
      url : process.env.PUBLIC_URL
    }
  ]

  return (
    <section className="fixed top-0 left-0 z-[2] w-full px-10 md:flex justify-between bg-jordyBlue">
      <div className="w-full py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center">
          < SVGLogo className="h-[1.5rem] block fill-white"/>
        </div>
        {/* Toggle button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={
              'me-0 w-[1.5rem] h-[1.5rem] transition-all duration-500 ' +
              (open && 'rotate-90')
            }
          >
            < SVGBurger className="w-100 block"/>
          </button>
        </div>
      </div>
      {/* Navbar */}
      <nav className="md:py-5 h-0 md:h-full">
        <ul className={
          'flex flex-col md:flex-row items-center py-5 md:py-0 md:transform-none transition-all duration-500 md:bg-transparent ' + 
          (open ? 'scale-x-1 bg-white shadow shadow-midnight' : 'scale-x-0')
          }
        >
          { links.map( (link, idx) => {
              return (
                < Link
                  text={ link.text }
                  url={ link.url }
                  isLast={ idx === links.length-1 ? true : false }
                  key={ `navlink-top--${idx}` }
                />
              )
            })
          }
        </ul>
      </nav>
    </section>
  )
}

function Link (props : ILink) {

  const { text, url, isLast } = props

   return (
    <li className={
      'cursor-pointer transition-all duration-500 py-2 px-3 rounded-full border-2 border-transparent font-semibold ' +
      (
        isLast
          ? 'uppercase text-midnight bg-turbo hover:text-turbo hover:bg-midnight md:hover:bg-midnight'
          : 'text-manatee hover:border-shuttleGrey md:text-white md:hover:border-white mb-2 md:mb-0 mr-0 md:mr-2'
      )
      }
    >
      <a
        href={ url }
        className={
          'text-inherit font-inherit  ' +
          (isLast ? 'font-original' : 'font-classic')
        }
      >
        { text }
      </a>
    </li>
  )
}