"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle
} from "lucide-react";

import Link from "next/link";


export default function FAQPage() {


  const [open, setOpen] = useState<number | null>(0);



  const faqs = [
    {
      question: "What services does Zikks provide?",
      answer:
        "We provide digital solutions including Web Development, Custom App Development, AI Solutions, Salesforce Services, UI/UX Design and Digital Marketing."
    },
    {
      question: "How do you start a new project?",
      answer:
        "We first understand your business goals, analyze requirements, create a strategy and then begin design and development."
    },
    {
      question: "How long does it take to build a website or application?",
      answer:
        "Project timelines depend on complexity. A simple website may take a few weeks, while custom applications require more time."
    },
    {
      question: "Do you provide custom software solutions?",
      answer:
        "Yes, we build customized software and applications according to your business requirements and workflow."
    },
    {
      question: "Do you provide support after project completion?",
      answer:
        "Yes, we provide maintenance, updates and technical support after deployment."
    },
    {
      question: "Can you help improve an existing website or app?",
      answer:
        "Yes, we analyze existing products and provide redesign, performance improvements and feature enhancements."
    },
    {
      question: "Why should we choose Zikks?",
      answer:
        "We combine modern technology, creative design and business strategy to deliver scalable digital solutions."
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
        py-28
        text-white
        "
      >

        <div className="mx-auto max-w-7xl px-6">


          <div className="max-w-4xl">


            <p className="
              mb-5
              flex
              items-center
              gap-2
              font-semibold
              text-blue-300
            ">
              <HelpCircle size={20}/>
              FREQUENTLY ASKED QUESTIONS
            </p>



            <h1
              className="
              text-5xl
              font-bold
              md:text-7xl
              "
            >

              Everything You Need

              <span className="text-blue-400">
                {" "}To Know
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

              Find answers about our services, development process
              and how we help businesses grow digitally.

            </p>


          </div>


        </div>


      </section>







      {/* FAQ */}

      <section className="py-24">


        <div
          className="
          mx-auto
          max-w-4xl
          px-6
          "
        >



          <div className="space-y-5">


          {
            faqs.map((faq,index)=>(


              <div
                key={index}
                className="
                overflow-hidden
                rounded-2xl
                border
                bg-white
                shadow-sm
                "
              >



                <button
                  onClick={()=> 
                    setOpen(open === index ? null : index)
                  }
                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                  "
                >


                  <span
                    className="
                    text-lg
                    font-semibold
                    text-black
                    "
                  >
                    {faq.question}
                  </span>



                  {
                    open === index
                    ?
                    <Minus
                      className="text-blue-700"
                    />
                    :
                    <Plus
                      className="text-blue-700"
                    />
                  }


                </button>





                {
                  open === index && (

                    <div
                      className="
                      border-t
                      px-6
                      py-5
                      text-gray-600
                      "
                    >

                      {faq.answer}

                    </div>

                  )
                }


              </div>


            ))
          }


          </div>


        </div>


      </section>








      {/* CTA */}

      <section
        className="
        bg-blue-900
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
            Still Have Questions?
          </h2>


          <p
            className="
            mt-4
            text-blue-100
            "
          >
            Our team is ready to help you with your next digital project.
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