import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  User
} from "lucide-react";


export default function BlogPage() {


  const blogs = [
    {
      title: "How AI Is Transforming Modern Businesses",
      category: "Artificial Intelligence",
      date: "January 15, 2026",
      author: "Zikks Team",
      image: "/blog/ai.jpg",
      desc:
        "Explore how businesses are using AI automation, machine learning and intelligent solutions to improve growth."
    },
    {
      title: "Why Custom Software Development Matters",
      category: "Development",
      date: "January 10, 2026",
      author: "Zikks Team",
      image: "/blog/software.jpg",
      desc:
        "Learn why custom applications help companies improve productivity and create better customer experiences."
    },
    {
      title: "Complete Guide To Digital Marketing Strategy",
      category: "Marketing",
      date: "January 05, 2026",
      author: "Zikks Team",
      image: "/blog/marketing.jpg",
      desc:
        "Discover proven digital marketing techniques to increase visibility and generate quality leads."
    },
    {
      title: "Salesforce CRM Benefits For Growing Companies",
      category: "Salesforce",
      date: "December 28, 2025",
      author: "Zikks Team",
      image: "/blog/salesforce.jpg",
      desc:
        "Understand how Salesforce CRM helps organizations manage customers and automate business processes."
    },
    {
      title: "UI/UX Design Trends For 2026",
      category: "Design",
      date: "December 20, 2025",
      author: "Zikks Team",
      image: "/blog/design.jpg",
      desc:
        "Latest UI/UX trends that create engaging and user-friendly digital experiences."
    },
    {
      title: "Building Scalable Mobile Applications",
      category: "Mobile Apps",
      date: "December 15, 2025",
      author: "Zikks Team",
      image: "/blog/mobile.jpg",
      desc:
        "Best practices for creating secure, fast and scalable mobile applications."
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
              font-semibold
              text-blue-300
            ">
              OUR BLOG
            </p>


            <h1
              className="
              text-5xl
              font-bold
              leading-tight
              md:text-7xl
              "
            >

              Insights,
              Ideas &
              <span className="text-blue-400">
                {" "}Innovation
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

              Explore technology trends, digital strategies and
              insights from our experts.

            </p>


          </div>


        </div>


      </section>







      {/* Blog Cards */}

      <section className="py-24">


        <div className="mx-auto max-w-7xl px-6">


          <div
            className="
            grid
            gap-8
            md:grid-cols-3
            "
          >


          {
            blogs.map((blog,index)=>(


              <article
                key={index}
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                bg-white
                transition
                hover:-translate-y-2
                hover:shadow-xl
                "
              >


                {/* Image */}

                <div
                  className="
                  relative
                  h-56
                  w-full
                  bg-gray-100
                  "
                >

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="
                    object-cover
                    transition
                    group-hover:scale-105
                    "
                  />

                </div>





                <div className="p-6">


                  <span
                    className="
                    rounded-full
                    bg-blue-100
                    px-4
                    py-1
                    text-sm
                    font-medium
                    text-blue-900
                    "
                  >
                    {blog.category}
                  </span>



                  <h2
                    className="
                    mt-5
                    text-xl
                    font-bold
                    text-black
                    "
                  >
                    {blog.title}
                  </h2>



                  <p
                    className="
                    mt-3
                    text-gray-600
                    "
                  >
                    {blog.desc}
                  </p>




                  <div
                    className="
                    mt-5
                    flex
                    items-center
                    gap-4
                    text-sm
                    text-gray-500
                    "
                  >

                    <span className="flex items-center gap-1">
                      <Calendar size={15}/>
                      {blog.date}
                    </span>


                    <span className="flex items-center gap-1">
                      <User size={15}/>
                      {blog.author}
                    </span>


                  </div>




                  <Link
                    href="#"
                    className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-900
                    "
                  >

                    Read More

                    <ArrowRight
                      size={18}
                      className="
                      transition
                      group-hover:translate-x-2
                      "
                    />

                  </Link>



                </div>


              </article>


            ))
          }


          </div>


        </div>


      </section>








      {/* Newsletter */}

      <section
        className="
        bg-gray-50
        py-20
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
            text-black
            "
          >
            Stay Updated With Latest Insights
          </h2>


          <p
            className="
            mt-4
            text-gray-600
            "
          >
            Get technology updates, business ideas and digital trends.
          </p>



          <div
            className="
            mx-auto
            mt-8
            flex
            max-w-xl
            gap-3
            "
          >

            <input
              type="email"
              placeholder="Enter your email"
              className="
              flex-1
              rounded-xl
              border
              px-5
              py-3
              text-black
              outline-none
              "
            />


            <button
              className="
              rounded-xl
              bg-blue-900
              px-6
              text-white
              "
            >
              Subscribe
            </button>


          </div>


        </div>


      </section>


    </main>

  );
}