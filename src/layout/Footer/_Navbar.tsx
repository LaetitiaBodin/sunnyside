interface ILink {
  text: string,
  url: any,
  isLast?: boolean
}
  
export default function Navbar () {

  const links : ILink[] = [
    {
      text: "About",
      url: process.env.PUBLIC_URL
    },
    {
      text: "Services",
      url: process.env.PUBLIC_URL
    },
    {
      text: "Projects",
      url: process.env.PUBLIC_URL
    }
  ]

  return (
    <nav>
      <ul className="flex flex-rows py-10 space-x-5">
        { links.map( (link, idx) => {
            return (
              < Link
                  text={ link.text }
                  url={ link.url }
                  key={`navlink-footer--${idx}`}
              />
            )
          })
        }
      </ul>
    </nav>
  )
}

function Link ( props: ILink ) {

  const { text, url } = props

  return (
    <li className="cursor-pointer">
      <a
        href={ url }
        className="font-bold text-midnight hover:text-white transition-all duration-500"
      >
        { text }
      </a>
    </li>
  )
}