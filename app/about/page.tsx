import Link from "next/link";
import {
  Target,
  Users,
  Rocket,
  Award,
  Lightbulb,
  ShieldCheck
} from "lucide-react";


export default function AboutPage() {

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "We create innovative digital solutions that help businesses grow and succeed."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We use modern technologies and creative ideas to solve real business problems."
    },
    {
      icon: ShieldCheck,
      title: "Quality First",
      desc: "We focus on delivering reliable, scalable, and high-quality solutions."
    },
    {
      icon: Users,
      title: "Team Work",
      desc: "Our talented team works together to achieve outstanding results."
    }
  ];


  return (

    <main className="bg-white">


      {/* Hero Section */}

      <section className="bg-gray-100 py-24">

        <div className="mx-auto max-w-7xl px-6">


          <div className="max-w-3xl">


            <h1 className="
              text-5xl
              font-bold
              text-black
              md:text-6xl
            ">
              We build digital
              <span className="text-blue-700">
                {" "}experiences
              </span>
            </h1>


            <p className="
              mt-6
              text-lg
              leading-relaxed
              text-gray-600
            ">
              Zikks is a digital technology company helping businesses
              transform their ideas into powerful digital products.
              We specialize in web development, mobile applications,
              UI/UX design, and digital solutions.
            </p>


            <Link
              href="/contact"
              className="
              mt-8
              inline-block
              rounded-xl
              bg-blue-900
              px-7
              py-3
              font-semibold
              text-white
              hover:bg-blue-800
              "
            >
              Work With Us
            </Link>


          </div>


        </div>

      </section>






      {/* About Content */}

      <section className="py-20">


        <div className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-6
          md:grid-cols-2
        ">



          {/* Image Placeholder */}

          <div className="
            flex
            min-h-[400px]
            items-center
            justify-center
            rounded-3xl
            bg-blue-900
          ">

            <Rocket
              size={120}
              className="text-white"
            />

          </div>





          <div>


            <h2 className="
              text-4xl
              font-bold
              text-black
            ">
              Who We Are
            </h2>


            <p className="
              mt-5
              text-gray-600
              leading-relaxed
            ">
              We are a passionate team of designers, developers,
              and strategists dedicated to building meaningful
              digital products.
            </p>


            <p className="
              mt-4
              text-gray-600
              leading-relaxed
            ">
              From startups to enterprises, we partner with companies
              to create solutions that improve customer experience
              and business growth.
            </p>



            <div className="
              mt-8
              grid
              grid-cols-2
              gap-6
            ">


              <div>
                <h3 className="
                  text-4xl
                  font-bold
                  text-blue-900
                ">
                  50+
                </h3>

                <p className="text-gray-600">
                  Projects Completed
                </p>

              </div>



              <div>
                <h3 className="
                  text-4xl
                  font-bold
                  text-blue-900
                ">
                  20+
                </h3>

                <p className="text-gray-600">
                  Happy Clients
                </p>

              </div>


            </div>


          </div>


        </div>


      </section>






      {/* Values */}

      <section className="bg-gray-50 py-20">


        <div className="mx-auto max-w-7xl px-6">


          <div className="mb-12 text-center">


            <h2 className="
              text-4xl
              font-bold
              text-black
            ">
              Our Values
            </h2>


            <p className="mt-3 text-gray-600">
              Principles that guide everything we do.
            </p>


          </div>





          <div className="
            grid
            gap-8
            md:grid-cols-4
          ">


            {
              values.map((item,index)=>{

                const Icon = item.icon;


                return (

                  <div
                    key={index}
                    className="
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    hover:-translate-y-2
                    hover:shadow-xl
                    "
                  >


                    <div className="
                      mb-5
                      inline-flex
                      rounded-xl
                      bg-blue-100
                      p-4
                    ">

                      <Icon
                        size={28}
                        className="text-blue-900"
                      />

                    </div>



                    <h3 className="
                      text-xl
                      font-bold
                      text-black
                    ">
                      {item.title}
                    </h3>


                    <p className="
                      mt-3
                      text-gray-600
                    ">
                      {item.desc}
                    </p>


                  </div>

                )

              })
            }


          </div>


        </div>


      </section>






      {/* CTA */}

      <section className="bg-blue-900 py-16">


        <div className="
          mx-auto
          max-w-5xl
          px-6
          text-center
          text-white
        ">


          <h2 className="
            text-4xl
            font-bold
          ">
            Let's create something amazing
          </h2>


          <p className="
            mt-4
            text-blue-100
          ">
            Have an idea? Our team is ready to turn it into reality.
          </p>



          <Link
            href="/contact"
            className="
            mt-7
            inline-block
            rounded-xl
            bg-white
            px-8
            py-3
            font-semibold
            text-blue-900
            hover:bg-gray-100
            "
          >
            Contact Us
          </Link>


        </div>


      </section>


    </main>

  );
}