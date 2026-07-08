import Link from "next/link";
import {
  Lightbulb,
  TrendingUp,
  Code2,
  Brain,
  Globe,
  ArrowRight,
  BarChart3
} from "lucide-react";


export default function InsightsPage() {


  const insights = [
    {
      icon: Brain,
      title: "Artificial Intelligence Trends",
      desc:
        "Discover how AI, automation and machine learning are transforming industries and business operations.",
      category: "AI & Technology"
    },
    {
      icon: Code2,
      title: "Future Of Software Development",
      desc:
        "Explore modern development practices, frameworks and technologies helping businesses scale.",
      category: "Development"
    },
    {
      icon: TrendingUp,
      title: "Digital Growth Strategies",
      desc:
        "Learn how companies use digital marketing and technology to increase revenue and customer engagement.",
      category: "Business Growth"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      desc:
        "Understand how organizations are adopting cloud, AI and automation for better efficiency.",
      category: "Transformation"
    },
    {
      icon: BarChart3,
      title: "Data Driven Decisions",
      desc:
        "How analytics and business intelligence help companies make smarter decisions.",
      category: "Analytics"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Ideas",
      desc:
        "Insights into new ideas, emerging technologies and future possibilities.",
      category: "Innovation"
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


          <p className="
            mb-5
            font-semibold
            text-blue-300
          ">
            OUR INSIGHTS
          </p>



          <h1
            className="
            max-w-4xl
            text-5xl
            font-bold
            leading-tight
            md:text-7xl
            "
          >

            Ideas That Drive

            <span className="text-blue-400">
              {" "}Digital Innovation
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

            Explore expert insights about technology,
            digital transformation, AI, software development
            and business growth.

          </p>


        </div>

      </section>








      {/* Featured Insights */}

      <section className="py-24">


        <div className="mx-auto max-w-7xl px-6">


          <div className="
            mb-14
            text-center
          ">


            <h2
              className="
              text-4xl
              font-bold
              text-black
              "
            >
              Latest Insights
            </h2>


            <p className="
              mt-4
              text-gray-600
            ">
              Knowledge and strategies to help your business grow.
            </p>


          </div>





          <div
            className="
            grid
            gap-8
            md:grid-cols-3
            "
          >


          {
            insights.map((item,index)=>{


              const Icon = item.icon;


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



                  <div
                    className="
                    inline-flex
                    rounded-2xl
                    bg-blue-100
                    p-4
                    "
                  >

                    <Icon
                      size={32}
                      className="text-blue-900"
                    />

                  </div>




                  <p
                    className="
                    mt-6
                    text-sm
                    font-semibold
                    text-blue-700
                    "
                  >
                    {item.category}
                  </p>




                  <h3
                    className="
                    mt-3
                    text-xl
                    font-bold
                    text-black
                    "
                  >
                    {item.title}
                  </h3>




                  <p
                    className="
                    mt-4
                    text-gray-600
                    "
                  >
                    {item.desc}
                  </p>




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

                    Read Insight

                    <ArrowRight
                      size={18}
                      className="
                      transition
                      group-hover:translate-x-2
                      "
                    />

                  </Link>


                </div>

              )

            })
          }


          </div>


        </div>


      </section>








      {/* Numbers */}

      <section
        className="
        bg-gray-50
        py-20
        "
      >

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
            [
              ["100+", "Projects Delivered"],
              ["50+", "Happy Clients"],
              ["10+", "Industries"],
              ["24/7", "Support"]
            ].map((item,index)=>(


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

                <h3
                  className="
                  text-3xl
                  font-bold
                  text-blue-900
                  "
                >
                  {item[0]}
                </h3>


                <p className="
                  mt-2
                  text-gray-600
                ">
                  {item[1]}
                </p>


              </div>


            ))
          }


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
            Have A Technology Challenge?
          </h2>



          <p
            className="
            mt-4
            text-blue-100
            "
          >
            Let's discuss how technology can transform your business.
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