import Link from "next/link";
import {
  Brain,
  Bot,
  Cpu,
  Sparkles,
  Database,
  Workflow,
  CheckCircle,
  ArrowRight
} from "lucide-react";


export default function AISolutionsPage() {


  const services = [
    {
      icon: Brain,
      title: "AI Consulting",
      desc: "Transform your business with AI strategies designed for automation, efficiency and growth."
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      desc: "Build intelligent AI assistants that improve customer support and engagement."
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      desc: "Develop predictive models that help businesses make smarter decisions."
    },
    {
      icon: Database,
      title: "Data Analytics",
      desc: "Convert complex data into meaningful insights using AI-powered analytics."
    },
    {
      icon: Workflow,
      title: "AI Automation",
      desc: "Automate repetitive tasks and improve operational efficiency."
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      desc: "Create AI-powered solutions using modern generative AI technologies."
    }
  ];


  const benefits = [
    "Reduce operational costs",
    "Improve customer experience",
    "Automate business processes",
    "Make data-driven decisions"
  ];


  return (

    <main className="bg-white">


      {/* Hero Section */}

      <section className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-black
        via-gray-900
        to-blue-950
        py-28
        text-white
      ">


        <div className="mx-auto max-w-7xl px-6">


          <div className="max-w-4xl">


            <p className="
              mb-5
              flex
              items-center
              gap-2
              text-blue-400
              font-semibold
            ">
              <Sparkles size={18}/>
              ARTIFICIAL INTELLIGENCE SOLUTIONS
            </p>



            <h1 className="
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            ">

              Build Smarter
              <br />

              Business With

              <span className="text-blue-400">
                {" "}AI Solutions
              </span>

            </h1>



            <p className="
              mt-6
              max-w-2xl
              text-lg
              text-gray-300
            ">

              We create intelligent AI solutions that help businesses
              automate workflows, improve customer experience and unlock
              new growth opportunities.

            </p>




            <div className="mt-8 flex gap-4">


              <Link
                href="/contact"
                className="
                rounded-xl
                bg-blue-600
                px-7
                py-3
                font-semibold
                hover:bg-blue-700
                "
              >
                Start AI Project
              </Link>


              <Link
                href="#services"
                className="
                rounded-xl
                border
                border-gray-600
                px-7
                py-3
                hover:bg-white/10
                "
              >
                Explore Solutions
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
              ["50+", "AI Projects"],
              ["30+", "Automation Solutions"],
              ["99%", "Client Satisfaction"],
              ["24/7", "AI Support"]
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
              Our AI Solutions
            </h2>


            <p className="
              mt-4
              text-gray-600
            ">
              Powerful artificial intelligence solutions for modern businesses.
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








      {/* Benefits */}

      <section className="
        bg-gray-50
        py-24
      ">


        <div className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-6
          md:grid-cols-2
        ">


          <div>


            <h2 className="
              text-4xl
              font-bold
              text-black
            ">
              Why Choose AI For Your Business?
            </h2>


            <p className="
              mt-5
              text-gray-600
            ">
              AI helps businesses work faster, smarter and more efficiently.
            </p>


          </div>




          <div className="space-y-5">


            {
              benefits.map((item,index)=>(

                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-white
                  p-5
                  shadow-sm
                  "
                >

                  <CheckCircle
                    className="text-blue-700"
                  />

                  <span className="font-medium text-black">
                    {item}
                  </span>


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
            Ready To Build Your AI Solution?
          </h2>


          <p className="
            mt-4
            text-blue-100
          ">
            Let's create intelligent solutions that grow your business.
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