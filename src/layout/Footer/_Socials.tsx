import { ReactComponent as SVGFacebook } from '../../icons/facebook.svg'
import { ReactComponent as SVGInstagram } from '../../icons/instagram.svg'
import { ReactComponent as SVGPinterest } from '../../icons/pinterest.svg'
import { ReactComponent as SVGTwitter } from '../../icons/twitter.svg'

interface ISocial {
  name: string,
  url: any,
  icon: any
}

export default function Socials () {

  const socials : ISocial[] = [
    {
      name: "facebook",
      url: process.env.PUBLIC_URL,
      icon: < SVGFacebook />
    },
    {
      name: "instagram",
      url: process.env.PUBLIC_URL,
      icon: < SVGInstagram />
    },
    {
      name: "pinterest",
      url: process.env.PUBLIC_URL,
      icon: < SVGPinterest />
    },
    {
      name: "twitter",
      url: process.env.PUBLIC_URL,
      icon: < SVGTwitter />
    }
  ]

  return (
    <ul className="flex flex-row space-x-5">
      {
        socials.map ( (social, idx) => {
          return (
            < Social
                svg={ social.icon }
                url={ social.url }
                key={`social--${idx}`}
            />
          )
        })
      }
    </ul>
  )
}

function Social ( props : any) {

  const { svg, url } = props

  return (
    <li className="cursor-pointer">
      <a
        href={ url }
        className="fill-midnight hover:fill-white transition-all duration-500 [&>svg]:w-[1.5rem] [&>svg]:md:w-[2rem]"
      >
        { svg }
      </a>
    </li>
  )
}