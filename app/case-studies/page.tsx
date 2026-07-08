import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Code2,
  Globe
} from "lucide-react";



export default function CaseStudiesPage() {


  const cases = [
    {
      title: "E-Commerce Platform Transformation",
      category: "Web Development",
      image: "/case-studies/ecommerce.jpg",
      result: "200% Increase In Online Sales",
      desc:
        "Built a scalable e-commerce platform with modern UI, secure payments and optimized user experience."
    },
    {
      title: "AI Powered Business Automation",
      category: "AI Solutions",
      image: "/case-studies/ai.jpg",
      result: "60% Faster Operations",
      desc:
        "Implemented AI automation solutions to reduce manual work and improve business productivity."
    },
    {
      title: "Digital Marketing Growth Campaign",
      category: "Marketing",
      image: "/case-studies/marketing.jpg",
      result: "300% More Leads",
      desc:
        "Created a complete digital marketing strategy including SEO, paid ads and content marketing."
    },
    {
      title: "Enterprise Mobile Application",
      category: "Mobile Development",
      image: "/case-studies/mobile.jpg",
      result: "1M+ App Users",
      desc:
        "Designed and developed a high-performance mobile application for a growing enterprise."
    }
  ];



  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      title: "Business Growth"
    },
    {
      icon: Users,
      number: "50+",
      title: "Happy Clients"
    },
    {
      icon: Code2,
      number: "100+",
      title: "Projects Delivered"
    },
    {
      icon: Globe,
      number: "15+",
      title: "Industries Served"
    }
  ];



  return (

    <main className="bg-white">


      {/* Hero */}

      <section
        className="
        bg-[#0a2840]
        py-28
        text-white
        "
      >

        <div className="mx-auto max-w-7xl px-6">


          <p className="
          mb-5
          font-semibold
          text-blue-300
          ">
            CASE STUDIES
          </p>



          <h1
            className="
            max-w-4xl
            text-5xl
            font-bold
            md:text-7xl
            "
          >

            Real Solutions.

            <span className="text-orange-400">
              {" "}Real Results.
            </span>

          </h1>



          <p
            className="
            mt-6
            max-w-2xl
            text-lg
            text-blue-100
            "
          >

            Explore how we help businesses solve complex challenges
            with technology, design and digital strategies.

          </p>


        </div>


      </section>







      {/* Case Studies */}

      <section className="py-24">


        <div className="mx-auto max-w-7xl px-6">


          <div
            className="
            grid
            gap-10
            md:grid-cols-2
            "
          >


          {
            cases.map((item,index)=>(


              <div
                key={index}
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                bg-white
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
                "
              >



                <div
                  className="
                  relative
                  h-72
                  bg-gray-100
                  "
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                    object-cover
                    transition
                    group-hover:scale-105
                    "
                  />

                </div>




                <div className="p-8">


                  <span
                    className="
                    rounded-full
                    bg-blue-100
                    px-4
                    py-1
                    text-sm
                    font-semibold
                    text-blue-900
                    "
                  >
                    {item.category}
                  </span>




                  <h2
                    className="
                    mt-5
                    text-2xl
                    font-bold
                    text-black
                    "
                  >
                    {item.title}
                  </h2>



                  <p
                    className="
                    mt-4
                    text-gray-600
                    "
                  >
                    {item.desc}
                  </p>




                  <div
                    className="
                    mt-6
                    rounded-xl
                    bg-gray-50
                    p-4
                    "
                  >

                    <p className="
                    text-sm
                    text-gray-500
                    ">
                      Business Result
                    </p>


                    <h3
                      className="
                      mt-1
                      text-xl
                      font-bold
                      text-blue-900
                      "
                    >
                      {item.result}
                    </h3>

                  </div>




                  <Link
                    href="#"
                    className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-900
                    "
                  >

                    View Case Study

                    <ArrowRight
                      size={18}
                      className="
                      transition
                      group-hover:translate-x-2
                      "
                    />

                  </Link>


                </div>


              </div>


            ))
          }


          </div>


        </div>


      </section>








      {/* Stats */}

      <section
        className="
        bg-gray-50
        py-20
        "
      >

        <div
          className="
          mx-auto
          grid
          max-w-6xl
          gap-6
          px-6
          md:grid-cols-4
          "
        >

        {
          stats.map((item,index)=>{


            const Icon=item.icon;


            return (

              <div
                key={index}
                className="
                rounded-2xl
                bg-white
                p-7
                text-center
                shadow-sm
                "
              >

                <Icon
                  className="
                  mx-auto
                  text-blue-900
                  "
                  size={35}
                />


                <h3
                  className="
                  mt-4
                  text-3xl
                  font-bold
                  text-black
                  "
                >
                  {item.number}
                </h3>


                <p
                  className="
                  mt-2
                  text-gray-600
                  "
                >
                  {item.title}
                </p>


              </div>

            )

          })
        }


        </div>


      </section>








      {/* CTA */}

      <section
        className="
        bg-[#0a2840]
        py-20
        text-white
        "
      >

        <div
          className="
          mx-auto
          max-w-5xl
          px-6
          text-center
          "
        >


          <h2
            className="
            text-4xl
            font-bold
            "
          >
            Ready To Create Your Success Story?
          </h2>



          <p
            className="
            mt-4
            text-blue-100
            "
          >
            Let's build a digital solution that delivers measurable results.
          </p>




          <Link
            href="/contact"
            className="
            mt-8
            inline-block
            rounded-xl
            bg-white
            px-8
            py-3
            font-semibold
            text-blue-900
            "
          >
            Start Project
          </Link>


        </div>


      </section>


    </main>

  );
}