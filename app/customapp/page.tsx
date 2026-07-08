import Link from "next/link";
import {
  Smartphone,
  Code2,
  Layers,
  Cloud,
  ShieldCheck,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";


export default function CustomAppDevelopmentPage() {


  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Build powerful iOS and Android applications with smooth performance and modern UI."
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      desc: "Create scalable software solutions designed specifically for your business needs."
    },
    {
      icon: Layers,
      title: "Enterprise Applications",
      desc: "Develop secure and reliable applications for growing organizations."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Apps",
      desc: "Deploy flexible cloud applications with high availability and performance."
    },
    {
      icon: ShieldCheck,
      title: "Secure Applications",
      desc: "Protect your applications with advanced security practices."
    },
    {
      icon: Zap,
      title: "App Optimization",
      desc: "Improve speed, performance and user experience of existing applications."
    }
  ];


  const process = [
    "Requirement Analysis",
    "UI/UX Design",
    "Development & Testing",
    "Launch & Support"
  ];


  return (

    <main className="bg-white">


      {/* Hero */}

      <section
        className="
        relative
        overflow-hidden
        bg-[#0a2840]
        from-[#0a2840]
        via-[#0a2840]
        to-indigo-900
        py-28
        text-white
        "
      >

        <div className="mx-auto max-w-7xl px-6">


          <div className="max-w-4xl">


            <p className="
              mb-5
              font-semibold
              text-blue-300
            ">
              CUSTOM APP DEVELOPMENT
            </p>


            <h1 className="
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            ">

              Build Powerful

              <span className="text-blue-400">
                {" "}Custom Apps
              </span>

              <br />

              For Your Business

            </h1>



            <p className="
              mt-6
              max-w-2xl
              text-lg
              text-blue-100
            ">

              We design and develop high-performance mobile and web
              applications that help businesses automate processes,
              engage customers and scale faster.

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
                hover:bg-gray-100
                "
              >
                Start Your App
              </Link>



              <Link
                href="#services"
                className="
                rounded-xl
                border
                border-white/40
                px-7
                py-3
                hover:bg-white/10
                "
              >
                Our Services
              </Link>


            </div>


          </div>


        </div>

      </section>







      {/* Stats */}

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
              ["100+", "Apps Delivered"],
              ["50+", "Happy Clients"],
              ["10+", "Industries"],
              ["99%", "Client Satisfaction"]
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







      {/* Services */}

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
              Our App Development Services
            </h2>


            <p className="
              mt-4
              text-gray-600
            ">
              Complete app development solutions from idea to launch.
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
                    ">

                      <Icon
                        size={30}
                        className="text-blue-900"
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







      {/* Development Process */}

      <section className="
        bg-gray-50
        py-24
      ">


        <div className="mx-auto max-w-7xl px-6">


          <h2 className="
            text-center
            text-4xl
            font-bold
            text-black
          ">
            Our Development Process
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
                    className="text-blue-700"
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
        bg-[#0a2840]
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
            Have An App Idea?
          </h2>


          <p className="
            mt-4
            text-blue-100
          ">
            Let's transform your idea into a powerful digital product.
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