import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Database,
  UserCheck,
  Mail
} from "lucide-react";


export default function PrivacyPolicyPage() {


  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content:
        "We may collect personal information such as your name, email address, phone number, company details and project requirements when you contact us or use our services."
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      content:
        "We use your information to provide services, respond to inquiries, improve our solutions, communicate updates and deliver better customer experiences."
    },
    {
      icon: Lock,
      title: "Data Security",
      content:
        "We take appropriate security measures to protect your personal information from unauthorized access, misuse or disclosure."
    },
    {
      icon: ShieldCheck,
      title: "Third Party Services",
      content:
        "We may use trusted third-party tools for analytics, hosting and business operations. These providers follow their own privacy policies."
    }
  ];



  return (

    <main className="bg-white">


      {/* Hero */}

      <section
        className="
        bg-gradient-to-br
        from-blue-950
        via-blue-900
        to-indigo-900
        py-24
        text-white
        "
      >

        <div className="mx-auto max-w-7xl px-6">


          <p
            className="
            flex
            items-center
            gap-2
            font-semibold
            text-blue-300
            "
          >

            <ShieldCheck size={20}/>

            PRIVACY POLICY

          </p>



          <h1
            className="
            mt-5
            text-5xl
            font-bold
            md:text-6xl
            "
          >

            Your Privacy
            <span className="text-blue-400">
              {" "}Matters To Us
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

            We respect your privacy and are committed to protecting
            your personal information while providing reliable digital solutions.

          </p>


        </div>


      </section>








      {/* Content */}

      <section className="py-20">


        <div
          className="
          mx-auto
          max-w-5xl
          px-6
          "
        >


          <p className="
          text-gray-600
          "
          >

            Last Updated: January 2026

          </p>



          <div
            className="
            mt-10
            space-y-8
            "
          >


          {
            sections.map((item,index)=>{


              const Icon=item.icon;


              return (

                <div
                  key={index}
                  className="
                  rounded-2xl
                  border
                  bg-white
                  p-7
                  shadow-sm
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <div
                      className="
                      rounded-xl
                      bg-blue-100
                      p-3
                      "
                    >

                      <Icon
                        className="text-blue-900"
                        size={26}
                      />

                    </div>


                    <h2
                      className="
                      text-2xl
                      font-bold
                      text-black
                      "
                    >
                      {item.title}
                    </h2>


                  </div>



                  <p
                    className="
                    mt-5
                    leading-relaxed
                    text-gray-600
                    "
                  >

                    {item.content}

                  </p>


                </div>

              )

            })
          }


          </div>







          {/* Additional */}

          <div className="
            mt-10
            rounded-2xl
            bg-gray-50
            p-8
          ">


            <h2
              className="
              text-2xl
              font-bold
              text-black
              "
            >
              Cookies Policy
            </h2>



            <p
              className="
              mt-4
              text-gray-600
              "
            >

              Our website may use cookies to improve user experience,
              analyze website traffic and provide better services.
              You can control cookie preferences through your browser settings.

            </p>


          </div>







          <div className="
            mt-8
            rounded-2xl
            bg-blue-900
            p-8
            text-white
          ">


            <h2
              className="
              flex
              items-center
              gap-2
              text-2xl
              font-bold
              "
            >

              <Mail/>

              Contact Us

            </h2>



            <p
              className="
              mt-4
              text-blue-100
              "
            >

              If you have questions about this Privacy Policy,
              please contact our team.

            </p>



            <Link
              href="/contact"
              className="
              mt-5
              inline-block
              rounded-xl
              bg-white
              px-6
              py-3
              font-semibold
              text-blue-900
              "
            >

              Contact Support

            </Link>


          </div>



        </div>


      </section>


    </main>

  );
}