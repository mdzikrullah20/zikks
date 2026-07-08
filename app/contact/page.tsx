"use client";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send
} from "lucide-react";


export default function ContactForm() {

  return (
    <section className="min-h-screen bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <h1 className="text-4xl font-bold text-black md:text-5xl">
            Let's work together
          </h1>

          <p className="mt-4 text-gray-600">
            Have a project in mind? Fill out the form and our team
            will get back to you soon.
          </p>

        </div>



        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">


          {/* Left Content */}

          <div className="bg-blue-900 p-10 text-white">

            <h2 className="text-3xl font-bold">
              Get in touch
            </h2>


            <p className="mt-4 text-blue-100">
              Tell us about your project, ideas, or questions.
              We would love to hear from you.
            </p>



            <div className="mt-10 space-y-6">


              <div className="flex items-center gap-4">

                <div className="rounded-full bg-white/20 p-3">
                  <Mail size={22}/>
                </div>

                <div>
                  <p className="text-sm text-blue-200">
                    Email
                  </p>

                  <p>
                    hello@zikks.com
                  </p>
                </div>

              </div>




              <div className="flex items-center gap-4">

                <div className="rounded-full bg-white/20 p-3">
                  <Phone size={22}/>
                </div>

                <div>
                  <p className="text-sm text-blue-200">
                    Phone
                  </p>

                  <p>
                    +91 98765 43210
                  </p>
                </div>

              </div>



              <div className="flex items-center gap-4">

                <div className="rounded-full bg-white/20 p-3">
                  <MessageSquare size={22}/>
                </div>

                <div>
                  <p className="text-sm text-blue-200">
                    Support
                  </p>

                  <p>
                    Available 24/7
                  </p>
                </div>

              </div>


            </div>


          </div>





          {/* Form */}

          <div className="p-10">


            <form className="space-y-5">


              {/* Name */}

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>


                <div className="relative">

                  <User
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    py-3
                    pl-11
                    pr-4
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:ring-2
                    focus:ring-blue-100
                    "
                  />

                </div>

              </div>




              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>


                <div className="relative">

                  <Mail
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />


                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    py-3
                    pl-11
                    pr-4
                    outline-none
                    focus:border-blue-600
                    focus:ring-2
                    focus:ring-blue-100
                    "
                  />

                </div>

              </div>





              {/* Phone */}

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>


                <div className="relative">

                  <Phone
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />


                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    py-3
                    pl-11
                    pr-4
                    outline-none
                    focus:border-blue-600
                    focus:ring-2
                    focus:ring-blue-100
                    "
                  />

                </div>

              </div>





              {/* Message */}

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>


                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-gray-200
                  p-4
                  outline-none
                  focus:border-blue-600
                  focus:ring-2
                  focus:ring-blue-100
                  "
                />


              </div>





              {/* Button */}

              <button
                type="submit"
                className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-900
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-800
                "
              >

                Send Message

                <Send size={18}/>

              </button>


            </form>


          </div>


        </div>


      </div>


    </section>
  );
}