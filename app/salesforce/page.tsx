    import Link from "next/link";
import {
  Cloud,
  Users,
  Settings,
  BarChart3,
  Database,
  ShieldCheck,
  CheckCircle,
  ArrowRight
} from "lucide-react";


export default function SalesforceServicesPage() {


  const services = [
    {
      icon: Cloud,
      title: "Salesforce Consulting",
      desc: "Get expert Salesforce strategies to improve customer relationships and business growth."
    },
    {
      icon: Users,
      title: "Salesforce CRM Implementation",
      desc: "Implement powerful CRM solutions customized according to your business requirements."
    },
    {
      icon: Settings,
      title: "Salesforce Customization",
      desc: "Customize Salesforce features, workflows and automation for better productivity."
    },
    {
      icon: BarChart3,
      title: "Salesforce Analytics",
      desc: "Transform your business data into actionable insights with Salesforce reporting."
    },
    {
      icon: Database,
      title: "Salesforce Integration",
      desc: "Connect Salesforce with your existing business applications and platforms."
    },
    {
      icon: ShieldCheck,
      title: "Salesforce Support",
      desc: "Continuous monitoring, maintenance and support to keep your CRM running smoothly."
    }
  ];


  const solutions = [
    "Sales Cloud",
    "Service Cloud",
    "Marketing Cloud",
    "Experience Cloud"
  ];


  const process = [
    "Business Analysis",
    "Solution Planning",
    "Salesforce Development",
    "Deployment & Support"
  ];



  return (

    <main className="bg-white">


      {/* Hero */}

      <section
        className="
        overflow-hidden
        bg-[#0a2840]
        from-[#0a2840]
        via-[#0a2840]
        to-[#0a2840]
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
              SALESFORCE SERVICES
            </p>



            <h1 className="
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            ">

              Transform Your Business

              <span className="text-blue-400">
                {" "}With Salesforce
              </span>

              <br />

              CRM Solutions

            </h1>



            <p className="
              mt-6
              max-w-2xl
              text-lg
              text-blue-100
            ">

              We help businesses implement, customize and optimize
              Salesforce solutions to improve customer engagement,
              automation and revenue growth.

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
                Get Salesforce Consultation
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
                Explore Services
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
              ["100+", "CRM Projects"],
              ["50+", "Happy Clients"],
              ["10+", "Industries Served"],
              ["24/7", "Support"]
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
              Our Salesforce Services
            </h2>


            <p className="
              mt-4
              text-gray-600
            ">
              Complete Salesforce solutions to automate and scale your business.
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









      {/* Salesforce Clouds */}

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
            Salesforce Solutions
          </h2>



          <div className="
            mt-10
            grid
            gap-6
            md:grid-cols-4
          ">


            {
              solutions.map((item,index)=>(

                <div
                  key={index}
                  className="
                  rounded-2xl
                  bg-white
                  p-6
                  text-center
                  shadow-sm
                  "
                >

                  <CheckCircle
                    className="
                    mx-auto
                    text-blue-700
                    "
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








      {/* Process */}

      <section className="py-24">


        <div className="mx-auto max-w-7xl px-6">


          <h2 className="
            text-center
            text-4xl
            font-bold
            text-black
          ">
            Our Salesforce Implementation Process
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
                  border
                  p-6
                  "
                >

                  <span className="
                    text-3xl
                    font-bold
                    text-blue-700
                  ">
                    0{index+1}
                  </span>


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
            Ready To Improve Your CRM?
          </h2>


          <p className="
            mt-4
            text-blue-100
          ">
            Build smarter customer experiences with Salesforce.
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