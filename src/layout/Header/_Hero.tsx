import { ReactComponent as SVGArrow } from '../../icons/arrow-down.svg'

export default function Hero () {
  
  return (
    <section className="relative z-[0]">
      <div className="absolute z-[1] h-full w-full">
        <h1 className="relative pt-28 lg:pt-40 pb-12 lg:pb-20 px-3 text-center text-4xl md:text-5xl font-original font-bold uppercase tracking-widest text-white">
					We are creatives
				</h1>
        < SVGArrow className="block mx-auto animate-bounce h-[6rem] lg:h-[10rem]" />
      </div>
      <div className="relative z-[0]">
        <img
          src={ `${process.env.PUBLIC_URL}/img/mobile/header.jpg` }
          className="block sm:hidden w-full"
          alt="A slice of orange with a ligh-blue background."
        />
        <img
          src={ `${process.env.PUBLIC_URL}/img/desktop/header.jpg` }
          className="hidden sm:block w-full"
          alt="A slice of orange with a ligh-blue background."
        />
      </div>
    </section>
  )
}