import Link from "next/link";
import {
  Search,
  Megaphone,
  Share2,
  BarChart3,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";


export default function DigitalMarketingPage() {


  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      desc: "Improve your Google ranking and drive quality organic traffic."
    },
    {
      icon: Megaphone,
      title: "Performance Marketing",
      desc: "High converting Google Ads and paid campaigns that generate leads."
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      desc: "Grow your brand through creative social media strategies."
    },
    {
      icon: Globe,
      title: "Content Marketing",
      desc: "Engaging content that builds trust and attracts customers."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      desc: "Data-driven decisions with detailed performance reports."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      desc: "Complete digital strategies focused on business growth."
    }
  ];


  const process = [
    "Research & Strategy",
    "Planning & Execution",
    "Optimization",
    "Growth & Reporting"
  ];


  return (

    <main className="bg-white">


      {/* HERO */}

      <section className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-blue-950
        via-blue-900
        to-indigo-900
        py-28
        text-white
      ">


        <div className="
          mx-auto
          max-w-7xl
          px-6
        ">


          <div className="max-w-4xl">


            <p className="
              mb-5
              font-medium
              text-blue-300
            ">
              DIGITAL MARKETING AGENCY
            </p>


            <h1 className="
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            ">

              Grow Your Business
              <br />

              With Powerful

              <span className="text-blue-400">
                {" "}Digital Marketing
              </span>

            </h1>



            <p className="
              mt-6
              max-w-2xl
              text-lg
              text-blue-100
            ">

              We help brands increase visibility, generate qualified
              leads and achieve measurable growth through SEO,
              paid advertising and digital strategies.

            </p>



            <div className="mt-8 flex gap-4">


              <Link
                href="/contact"
                className="
                rounded-xl
                bg-white
                px-7
                py-3
                font-semibold
                text-blue-900
                transition
                hover:bg-gray-100
                "
              >
                Start Project
              </Link>


              <Link
                href="#services"
                className="
                rounded-xl
                border
                border-white/40
                px-7
                py-3
                font-semibold
                hover:bg-white/10
                "
              >
                Explore Services
              </Link>


            </div>


          </div>


        </div>


      </section>






      {/* STATS */}

      <section className="-mt-10 relative z-10">


        <div className="
          mx-auto
          grid
          max-w-6xl
          gap-5
          px-6
          md:grid-cols-4
        ">


          {
            [
              ["250+", "Projects"],
              ["95%", "Success Rate"],
              ["50+", "Clients"],
              ["5+", "Years Experience"]
            ].map((item,index)=>(

              <div
                key={index}
                className="
                rounded-2xl
                bg-white
                p-6
                text-center
                shadow-xl
                "
              >

                <h3 className="
                  text-3xl
                  font-bold
                  text-blue-900
                ">
                  {item[0]}
                </h3>


                <p className="mt-2 text-gray-600">
                  {item[1]}
                </p>


              </div>

            ))
          }


        </div>


      </section>







      {/* SERVICES */}

      <section
        id="services"
        className="py-24"
      >


        <div className="mx-auto max-w-7xl px-6">


          <div className="mb-14 text-center">


            <h2 className="
              text-4xl
              font-bold
              text-black
              md:text-5xl
            ">
              Our Digital Marketing Services
            </h2>


            <p className="
              mt-4
              text-gray-600
            ">
              Complete solutions to build, grow and scale your online presence.
            </p>


          </div>





          <div className="
            grid
            gap-8
            md:grid-cols-3
          ">


          {
            services.map((service,index)=>{

              const Icon = service.icon;


              return (

                <div
                  key={index}
                  className="
                  group
                  rounded-3xl
                  border
                  bg-white
                  p-8
                  transition
                  hover:-translate-y-2
                  hover:shadow-xl
                  "
                >


                  <div className="
                    inline-flex
                    rounded-2xl
                    bg-blue-100
                    p-4
                    "
                  >

                    <Icon
                      size={30}
                      className="
                      text-blue-900
                      "
                    />

                  </div>



                  <h3 className="
                    mt-6
                    text-xl
                    font-bold
                    text-black
                  ">
                    {service.title}
                  </h3>


                  <p className="
                    mt-3
                    text-gray-600
                  ">
                    {service.desc}
                  </p>


                  <ArrowRight
                    className="
                    mt-5
                    text-blue-900
                    transition
                    group-hover:translate-x-2
                    "
                  />


                </div>

              )

            })
          }


          </div>


        </div>


      </section>







      {/* PROCESS */}

      <section className="
        bg-gray-50
        py-24
      ">


        <div className="
          mx-auto
          max-w-7xl
          px-6
        ">


          <h2 className="
            text-center
            text-4xl
            font-bold
            text-black
          ">
            Our Growth Process
          </h2>



          <div className="
            mt-12
            grid
            gap-6
            md:grid-cols-4
          ">


            {
              process.map((item,index)=>(

                <div
                  key={index}
                  className="
                  rounded-2xl
                  bg-white
                  p-6
                  shadow-sm
                  "
                >

                  <CheckCircle
                    className="text-blue-900"
                  />

                  <h3 className="
                    mt-4
                    font-bold
                    text-black
                  ">
                    {item}
                  </h3>


                </div>

              ))
            }


          </div>


        </div>


      </section>







      {/* CTA */}

      <section className="
        bg-blue-900
        py-20
        text-white
      ">


        <div className="
          mx-auto
          max-w-5xl
          px-6
          text-center
        ">


          <h2 className="
            text-4xl
            font-bold
          ">
            Ready To Grow Your Business?
          </h2>


          <p className="
            mt-4
            text-blue-100
          ">
            Let's create a digital marketing strategy that delivers real results.
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
            Contact Us
          </Link>


        </div>


      </section>


    </main>

  );
}