interface IService{
	isSwapped?: boolean,
  isStacked?: boolean,
	title: string,
	text: string,
	src: string,
	alt: string,
  url?: any
}

export default function Services () {

  const services : IService[] = [
		{
			title: "Transform your brand",
			text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
			src: "service-transform.jpg",
			alt: "White egg in front of an orange background.",
      url: process.env.PUBLIC_URL
		},
		{
			title: "Stand out to the right audience",
			text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
			src: "service-stand-out.jpg",
			alt: "Pink plastic drinking cup in front of a pink background.",
      url: process.env.PUBLIC_URL
		},
		{
			title: "Graphic design",
			text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
			src: "service-graphic-design.jpg",
			alt: "A pair of red cherries in front of a very-light-blue background."
		},
		{
			title: "Photography",
			text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
			src: "service-photography.jpg",
			alt: "A mandarin in front of a turquoise background."
		}
  ]

  return (
    <section>
      <div className="w-full flex flex-wrap flex-col md:flex-row">
      { services.map( (link, idx) => {
            return (
              <Service
                isSwapped={ (idx % 2 === 0 && link.url !== undefined ) ? false : true }
                isStacked={ link.url !== undefined ? false : true }
                title={ link.title }
                text={ link.text }
                src={ link.src }
                alt={ link.alt }
                url={ link.url }
                key={ `card-link--${idx}` }
              />
            )
          })
        }
      </div>
    </section>
  )
}

function Service ( props:IService ) {

  const { isSwapped, isStacked, title, text, src, alt, url } = props

  return (
    <article
      className={
        'w-full relative leading-none leading-5 lg:leading-7 font-medium ' +
        (isStacked ? 'md:w-[50%] ' : 'md:w-full flex flex-wrap-reverse md:flex-wrap ') +
        (isSwapped ? 'flex-row-reverse' : 'flex-row')
      }
    >
      <div 
        className={
          'px-4 py-10 md:p-6 lg:py-18 lg:px-24 flex flex-col ' + 
          (isStacked ? 'absolute top-0 left-0 z-[1] h-full justify-end !text-center ' : 'relative md:w-[50%] justify-center text-center ') +
          (isSwapped ? 'md:text-left' : 'md:text-right')
        }
      >
        <h2
          className={
            'font-original text-midnight ' +
            (isStacked ? 'text-2xl' : 'text-3xl')
          }
        >
          { title }
        </h2>
        <p
          className={
            'py-5 ' +
            (isStacked ? 'text-midnight lg:pb-10' : 'text-shuttleGrey')
          }
        >
          { text }
        </p>
        {
          !isStacked && (
            <p className="font-original font-bold uppercase text-mainDark w-auto">
              <a
                href={ url }
                className={
                  'relative inline-block pb-2 text-midnight duration-300 ' +
                  'before:absolute before:bottom-0 before:transition-all before:content[""] before:h-1 before:w-0 before:bg-turbo ' + 
                  'hover:before:w-full ' +
                  (isSwapped ? 'before:left-0': 'before:right-0')
                }
              >
                Learn more
              </a>
            </p>
          )
        }
      </div>
      <div
        className={
          'relative w-full min-h-[10rem] lg:min-h-[12rem] ' + 
          (isStacked ? 'z-[0]' : 'md:w-[50%]')
        }
      >
				<img
					src={ `${process.env.PUBLIC_URL}/img/mobile/${src}` }
					alt={ alt }
					className="block md:hidden w-full"
				/>
				<img
					src={ `${process.env.PUBLIC_URL}/img/desktop/${src}` }
					alt={ alt }
					className="hidden md:block w-full"
				/>
      </div>

    </article>
  )
}