interface IPicture {
  src : string,
  alt : string
}
  
export default function Gallery () {

  const pics : IPicture [] = [
    {
      src: "gallery-milkbottles.jpg",
      alt: "Plastic white milk bottles before a blue sky with a white cloud."
    },
    {
      src: "gallery-orange.jpg",
      alt: "Slice of orange in a white-and-blue plate with an orange background."
    },
    {
      src: "gallery-cone.jpg",
      alt: "Empty icecream cone with a light-blue background."
    },
    {
      src: "gallery-sugarcubes.jpg",
      alt: "White sugarcubes piled up before a pink background."
    }
  ]

  return (
    <section
      className="flex flex-row flex-wrap"
    >
      {
        pics.map( (pic, idx) => {
          return (
            <Picture
              src={ pic.src }
              alt={ pic.alt }
              key={`gallery-pic--${idx}`}
            />
          )
        })
      }
    </section>
  )
}

function Picture ( props: IPicture ) {

  const { src, alt } = props

  return (
    <div
      className="w-[50%] md:w-[25%]"
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
  )
}