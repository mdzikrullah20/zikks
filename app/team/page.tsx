import Image from "next/image";
import Link from "next/link";
import {
//   Linkedin,
//   Twitter,
  Mail,
  ArrowRight
} from "lucide-react";


export default function OurTeamPage() {


  const team = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      image: "/team/member1.jpg",
      bio: "Leading digital transformation with innovative technology solutions."
    },
    {
      name: "Priya Verma",
      role: "UI/UX Designer",
      image: "/team/member2.jpg",
      bio: "Creating beautiful and user-friendly digital experiences."
    },
    {
      name: "Amit Kumar",
      role: "Full Stack Developer",
      image: "/team/member3.jpg",
      bio: "Building scalable web and mobile applications."
    },
    {
      name: "Neha Singh",
      role: "Digital Marketing Manager",
      image: "/team/member4.jpg",
      bio: "Helping brands grow through digital strategies."
    }
  ];


  const skills = [
    "Web Development",
    "Mobile Applications",
    "AI Solutions",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Technologies"
  ];



  return (

    <main className="bg-white">


      {/* HERO */}

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
              font-semibold
              text-blue-300
            ">
              OUR TEAM
            </p>



            <h1 className="
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
            ">

              Meet The People

              <span className="text-blue-400">
                {" "}Behind
              </span>

              <br />

              Innovation

            </h1>



            <p className="
              mt-6
              max-w-2xl
              text-lg
              text-blue-100
            ">

              Our team of designers, developers and digital experts
              work together to create powerful solutions that help
              businesses grow.

            </p>


          </div>


        </div>


      </section>







      {/* TEAM CARDS */}

      <section className="py-24">


        <div className="mx-auto max-w-7xl px-6">


          <div className="
            grid
            gap-8
            md:grid-cols-4
          ">


          {
            team.map((member,index)=>(


              <div
                key={index}
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                bg-white
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
                "
              >


                <div className="
                  relative
                  h-72
                  w-full
                  bg-gray-100
                ">


                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="
                    object-cover
                    transition
                    group-hover:scale-105
                    "
                  />


                </div>




                <div className="p-6">


                  <h3 className="
                    text-xl
                    font-bold
                    text-black
                  ">
                    {member.name}
                  </h3>



                  <p className="
                    mt-1
                    text-blue-700
                    font-medium
                  ">
                    {member.role}
                  </p>



                  <p className="
                    mt-3
                    text-sm
                    text-gray-600
                  ">
                    {member.bio}
                  </p>



                  <div className="
                    mt-5
                    flex
                    gap-3
                  ">


                    <Link
                      href="#"
                      className="
                      rounded-full
                      bg-gray-100
                      p-2
                      hover:bg-blue-100
                      "
                    >
                      {/* <Linkedin size={17}/> */}
                    </Link>


                    <Link
                      href="#"
                      className="
                      rounded-full
                      bg-gray-100
                      p-2
                      hover:bg-blue-100
                      "
                    >
                      {/* <Twitter size={17}/> */}
                    </Link>


                    <Link
                      href="#"
                      className="
                      rounded-full
                      bg-gray-100
                      p-2
                      hover:bg-blue-100
                      "
                    >
                      <Mail size={17}/>
                    </Link>


                  </div>


                </div>


              </div>


            ))
          }


          </div>


        </div>


      </section>








      {/* SKILLS */}

      <section className="
        bg-gray-50
        py-20
      ">


        <div className="mx-auto max-w-6xl px-6">


          <h2 className="
            text-center
            text-4xl
            font-bold
            text-black
          ">
            Our Expertise
          </h2>



          <div className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          ">


          {
            skills.map((skill,index)=>(

              <div
                key={index}
                className="
                rounded-full
                bg-white
                px-6
                py-3
                font-medium
                text-gray-800
                shadow-sm
                "
              >

                {skill}

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
            Want To Work With Our Team?
          </h2>



          <p className="
            mt-4
            text-blue-100
          ">
            Let's build something amazing together.
          </p>



          <Link
            href="/contact"
            className="
            mt-8
            inline-flex
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

            Contact Us

            <ArrowRight size={18}/>

          </Link>


        </div>


      </section>


    </main>

  );
}