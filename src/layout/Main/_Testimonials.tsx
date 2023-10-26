interface ITestimonial {
  text : string,
  authorPic : string,
  authorName : string,
  authorJob : string
}
  
export default function Testimonials () {

  const testimonials : ITestimonial[] = [
    {
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      authorPic: "avatar-emily.jpg",
      authorName: "Emily R.",
      authorJob: "Marketing Director"
    },
    {
      text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      authorPic: "avatar-thomas.jpg",
      authorName: "Thomas S.",
      authorJob: "Chief Operating Officer"
    },
    {
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      authorPic: "avatar-jennie.jpg",
      authorName: "Jennie F.",
      authorJob: "Business Owner"
    }
  ]

  return (
    <section className="py-10 lg:max-w-[75%] mx-auto">
      <h2 className="text-center font-original text-manatee uppercase tracking-widest py-5">
        Client testimonials
      </h2>
      <div className="flex flex-row flex-wrap">
        {
          testimonials.map( (t, i) => {
            return (
              < Testimonial
                text={ t.text }
                authorPic={ t.authorPic }
                authorName={ t.authorName }
                authorJob={ t.authorJob }
                key={`testimonial--${i}`}
              />)
          })
        }
      </div>
    </section>
  )
}

function Testimonial ( props: ITestimonial ) {

  const { text, authorPic, authorName, authorJob } = props

  return (
    <article className="w-full md:w-1/3 p-5 flex flex-col items-center text-center">
        <p
          className="py-10"
        >
          <img
            src={ `${process.env.PUBLIC_URL}/img/common/${authorPic}` }
            alt={ `Avatar of ${authorName}.` }
            className="rounded-full w-[4rem] md:w-[6rem] block"
          />
        </p>
        <p
          className="min-h-[8rem] md:min-h-[10rem] text-shuttleGrey leading-7 font-medium"
        >
          { text }
        </p>
        <p
          className="font-original font-black text-midnight"
        >
          { authorName }
        </p>
        <p
          className="py-2 text-manatee font-medium text-sm"
        >
          { authorJob }
        </p>
    </article>
  )
}