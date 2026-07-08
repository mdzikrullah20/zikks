import Link from "next/link";
import {
//   Linkedin,
//   Twitter,
//   Facebook,
//   Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";


export default function Footer() {


  return (

    <footer className="bg-gray-950 text-white">


      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 py-16">


        <div
          className="
          grid
          gap-10
          md:grid-cols-4
          "
        >


          {/* Brand */}

          <div>


            <Link href="/">
              <h2
                className="
                text-3xl
                font-bold
                text-white
                "
              >
                Zikks
              </h2>
            </Link>



            <p
              className="
              mt-5
              leading-relaxed
              text-gray-400
              "
            >
              We build innovative digital solutions using modern
              technology, AI and creative design to help businesses grow.
            </p>



            <div className="
              mt-6
              flex
              gap-3
            ">


              <Link
                href="#"
                className="
                rounded-full
                bg-gray-800
                p-3
                hover:bg-blue-700
                "
              >
                {/* <Linkedin size={18}/> */}
              </Link>


              <Link
                href="#"
                className="
                rounded-full
                bg-gray-800
                p-3
                hover:bg-blue-700
                "
              >
                {/* <Twitter size={18}/> */}
              </Link>


              <Link
                href="#"
                className="
                rounded-full
                bg-gray-800
                p-3
                hover:bg-blue-700
                "
              >
                {/* <Facebook size={18}/> */}
              </Link>


              <Link
                href="#"
                className="
                rounded-full
                bg-gray-800
                p-3
                hover:bg-blue-700
                "
              >
                {/* <Instagram size={18}/> */}
              </Link>


            </div>


          </div>








          {/* Services */}

          <div>


            <h3
              className="
              text-lg
              font-semibold
              "
            >
              Services
            </h3>


            <ul className="
              mt-5
              space-y-3
              text-gray-400
            ">


              <li>
                <Link
                  href="/digitalmarketing"
                  className="hover:text-white"
                >
                  Digital Marketing
                </Link>
              </li>


              <li>
                <Link
                  href="/ai"
                  className="hover:text-white"
                >
                  AI Solutions
                </Link>
              </li>


              <li>
                <Link
                  href="/customapp"
                  className="hover:text-white"
                >
                  Custom App Development
                </Link>
              </li>


              <li>
                <Link
                  href="/salesforce"
                  className="hover:text-white"
                >
                  Salesforce Services
                </Link>
              </li>

            </ul>
          </div>
          <div>


            <h3
              className="
              text-lg
              font-semibold
              "
            >
              Company
            </h3>



            <ul
              className="
              mt-5
              space-y-3
              text-gray-400
              "
            >

              <li>
                <Link
                  href="/about"
                  className="hover:text-white"
                >
                  About Us
                </Link>
              </li>


              <li>
                <Link
                  href="/team"
                  className="hover:text-white"
                >
                  Our Team
                </Link>
              </li>


              <li>
                <Link
                  href="/faqs"
                  className="hover:text-white"
                >
                  FAQs
                </Link>
              </li>


              <li>
                <Link
                  href="/blog"
                  className="hover:text-white"
                >
                  Blog
                </Link>
              </li>


            </ul>


          </div>









          {/* Contact */}

          <div>


            <h3
              className="
              text-lg
              font-semibold
              "
            >
              Contact
            </h3>




            <div
              className="
              mt-5
              space-y-5
              text-gray-400
              "
            >


              <p className="
                flex
                gap-3
                "
              >

                <Mail
                  className="text-blue-400"
                  size={20}
                />

                info@zikks.com

              </p>



              <p className="
                flex
                gap-3
                "
              >

                <Phone
                  className="text-blue-400"
                  size={20}
                />

                +91 8084872966

              </p>




              <p className="
                flex
                gap-3
                "
              >

                <MapPin
                  className="text-blue-400"
                  size={20}
                />

                Hyderabad, Telangana, india

              </p>



            </div>




            <Link
              href="/contact"
              className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-xl
              py-3
              font-semibold
              bg-[#0a2840]
              cursor-pointer
              "
            >

              Start Project

              <ArrowRight size={18}/>

            </Link>


          </div>



        </div>


      </div>








      {/* Bottom */}

      <div
        className="
        border-t
        border-gray-800
        "
      >

        <div
          className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          justify-between
          gap-4
          px-6
          py-6
          text-sm
          text-gray-400
          md:flex-row
          "
        >


          <p>
            © {new Date().getFullYear()} Zikks. All rights reserved.
          </p>



          <div className="
            flex
            gap-6
          ">

            <Link
              href="privacy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>


            <Link
              href="terms"
              className="hover:text-white"
            >
              Terms & Conditions
            </Link>


          </div>


        </div>


      </div>


    </footer>

  );
}