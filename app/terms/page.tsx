import Link from "next/link";
import {
  FileText,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Users,
  Mail
} from "lucide-react";


export default function TermsConditionsPage() {


  const terms = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content:
        "By accessing our website or using our services, you agree to follow these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services."
    },
    {
      icon: Users,
      title: "Our Services",
      content:
        "Zikks provides digital solutions including web development, mobile applications, AI solutions, UI/UX design, digital marketing and Salesforce services."
    },
    {
      icon: CreditCard,
      title: "Payments & Billing",
      content:
        "Project costs, payment schedules and deliverables will be discussed and agreed upon before starting any project. Payments must be completed according to the agreed terms."
    },
    {
      icon: ShieldCheck,
      title: "Intellectual Property",
      content:
        "All designs, code, content and project materials created by Zikks remain protected under intellectual property laws until ownership transfer terms are completed."
    }
  ];



  return (

    <main className="bg-white">


      {/* Hero */}

      <section
        className="
        bg-[#0a2840]
        from-[#0a2840]
        via-[#0a2840]
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

            <FileText size={20}/>

            TERMS & CONDITIONS

          </p>



          <h1
            className="
            mt-5
            text-5xl
            font-bold
            md:text-6xl
            "
          >

            Terms &
            <span className="text-blue-400">
              {" "}Conditions
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

            Please read these terms carefully before using our website
            and digital services.

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


          <p className="text-gray-600">
            Last Updated: January 2026
          </p>




          <div
            className="
            mt-10
            space-y-8
            "
          >


          {
            terms.map((item,index)=>{


              const Icon = item.icon;


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
                        size={26}
                        className="text-blue-900"
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









          {/* Extra Terms */}

          <div
            className="
            mt-10
            rounded-2xl
            bg-gray-50
            p-8
            "
          >


            <h2
              className="
              text-2xl
              font-bold
              text-black
              "
            >
              Website Usage
            </h2>


            <p
              className="
              mt-4
              text-gray-600
              "
            >

              You agree not to misuse our website, attempt unauthorized
              access, copy content without permission, or perform activities
              that may harm our services.

            </p>



          </div>








          <div
            className="
            mt-8
            rounded-2xl
            bg-gray-50
            p-8
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              text-black
              "
            >
              Limitation of Liability
            </h2>


            <p
              className="
              mt-4
              text-gray-600
              "
            >

              Zikks is not responsible for indirect losses, delays caused by
              third-party services, or circumstances beyond our control.

            </p>


          </div>









          {/* Contact CTA */}

          <div
            className="
            mt-10
            rounded-2xl
            bg-[#0a2840]
            p-8
            text-white
            "
          >


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

              Need Help?

            </h2>



            <p
              className="
              mt-4
              text-blue-100
              "
            >

              If you have any questions regarding these Terms &
              Conditions, contact our team.

            </p>



            <Link
              href="/contact"
              className="
              mt-6
              inline-block
              rounded-xl
              bg-white
              px-6
              py-3
              font-semibold
              text-blue-900
              "
            >

              Contact Us

            </Link>



          </div>



        </div>


      </section>



    </main>

  );
}