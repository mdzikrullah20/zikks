import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Brain,
  Palette,
  Megaphone,
  Cloud,
  CheckCircle
} from "lucide-react";


export default function HomePage() {


  const services = [
    {
      icon: Code2,
      title: "Web Development",
      desc: "Modern, scalable and high-performance websites built for your business."
    },
    {
      icon: Smartphone,
      title: "Custom App Development",
      desc: "Powerful mobile applications designed for your customers."
    },
    {
      icon: Brain,
      title: "AI Solutions",
      desc: "Automate processes with intelligent AI-powered solutions."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Beautiful experiences that users love to interact with."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      desc: "Grow your brand with result-driven marketing strategies."
    },
    {
      icon: Cloud,
      title: "Salesforce Services",
      desc: "Optimize your business with Salesforce solutions."
    }
  ];



  const stats = [
    {
      number:"56+",
      text:"Projects Delivered"
    },
    {
      number:"30+",
      text:"Happy Clients"
    },
    {
      number:"10+",
      text:"Industries"
    },
    {
      number:"24/7",
      text:"Support"
    }
  ];



  return (

    <main className="bg-white">


      {/* HERO */}

      <section
        className="
        bg-gradient-to-br
        from-[#0a2840]
        via-[#0a2840]
        to-indigo-900
        py-28
        text-white
        "
      >

        <div className="mx-auto max-w-7xl px-6">


          <div className="max-w-4xl">


            <p
              className="
              mb-5
              font-semibold
              text-blue-300
              "
            >
              DIGITAL TRANSFORMATION PARTNER
            </p>



            <h1
              className="
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
              "
            >

              We Build Digital

              <span className="text-blue-400">
                {" "}Solutions
              </span>

              <br/>

              That Grow Businesses

            </h1>




            <p
              className="
              mt-6
              max-w-2xl
              text-lg
              text-blue-100
              "
            >

              Zikks helps businesses transform ideas into powerful
              digital products using modern technology, AI and creative design.

            </p>





            <div className="mt-8 flex gap-4">


              <Link
                href="/contact"
                className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-8
                py-3
                font-semibold
                text-blue-900
                "
              >

                Get Started

                <ArrowRight size={18}/>

              </Link>



              <Link
                href="/contact"
                className="
                rounded-xl
                border
                border-white
                px-8
                py-3
                font-semibold
                "
              >

                Our Services

              </Link>


            </div>


          </div>


        </div>


      </section>








      {/* STATS */}

      <section className="py-16">


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
          stats.map((item,index)=>(

            <div
              key={index}
              className="
              rounded-2xl
              bg-gray-50
              p-6
              text-center
              "
            >

              <h2
                className="
                text-4xl
                font-bold
                text-blue-900
                "
              >
                {item.number}
              </h2>


              <p className="mt-2 text-gray-600">
                {item.text}
              </p>


            </div>

          ))
        }


        </div>


      </section>









      {/* SERVICES */}


      <section className="py-20">


        <div className="mx-auto max-w-7xl px-6">


          <div className="text-center">


            <p
              className="
              font-semibold
              text-blue-700
              "
            >
              WHAT WE DO
            </p>


            <h2
              className="
              mt-3
              text-4xl
              font-bold
              text-black
              "
            >
              Technology Solutions For Your Business
            </h2>


          </div>





          <div
            className="
            mt-12
            grid
            gap-8
            md:grid-cols-3
            "
          >

          {
            services.map((service,index)=>{


              const Icon = service.icon;


              return (

                <div
                  key={index}
                  className="
                  rounded-3xl
                  border
                  p-8
                  transition
                  hover:-translate-y-2
                  hover:shadow-xl
                  "
                >

                  <div
                    className="
                    inline-flex
                    rounded-xl
                    bg-[#0a2840]
                    p-4
                    "
                  >

                    <Icon
                      className="text-white"
                      size={30}
                    />

                  </div>



                  <h3
                    className="
                    mt-5
                    text-xl
                    font-bold
                    text-black
                    "
                  >
                    {service.title}
                  </h3>



                  <p
                    className="
                    mt-3
                    text-gray-600
                    "
                  >
                    {service.desc}
                  </p>


                </div>

              )

            })
          }

          </div>


        </div>


      </section>









      {/* WHY ZIKKS */}


      <section
        className="
        bg-gray-50
        py-20
        "
      >

        <div
          className="
          mx-auto
          max-w-7xl
          px-6
          grid
          gap-10
          md:grid-cols-2
          "
        >


          <div>


            <p className="
            font-semibold
            text-blue-700
            ">
              WHY CHOOSE US
            </p>


            <h2
              className="
              mt-4
              text-4xl
              font-bold
              text-black
              "
            >

              We Create Solutions
              That Make An Impact

            </h2>


            <p
              className="
              mt-5
              text-gray-600
              "
            >

              We combine creativity, technology and business strategy
              to deliver solutions that create real value.

            </p>


          </div>




          <div className="space-y-4">


          {
            [
              "Experienced technology team",
              "Latest tools and frameworks",
              "Business focused approach",
              "Long term support"
            ].map((item,index)=>(


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
                  className="text-blue-900"
                />

                <span className="text-black">
                  {item}
                </span>


              </div>


            ))
          }


          </div>


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
            Ready To Build Something Amazing?
          </h2>



          <p
            className="
            mt-4
            text-blue-100
            "
          >
            Let's discuss your next digital project.
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