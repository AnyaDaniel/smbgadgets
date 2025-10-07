import Image from "next/image";

export default function OurStory() {
  return (
    <main className="flex-grow bg-gradient-to-b pt-12 from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#023F5E] dark:text-white">
            Our Story
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Powering a brighter, more sustainable future, one panel at a time.
          </p>
        </div>

        <div className="space-y-20">
          {/* Mission */}
          <section className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold border-l-4 border-[#023F5E] pl-4 mb-6 text-[#023F5E] dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                SMB Gadgets was founded with a simple mission: to make clean,
                renewable energy accessible to everyone. From a small team of
                passionate engineers and environmentalists, we&apos;ve grown into a
                trusted provider of solar solutions, helping thousands of homes
                and businesses save money while reducing their carbon footprint.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/img2.jpg"
                alt="Solar mission" width={500} height={300}
                className="rounded-2xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </section>

          {/* Values */}
          <section className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold border-l-4 border-[#023F5E] pl-4 mb-6 text-[#023F5E] dark:text-white">
                Our Vision
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To create a world where clean, renewable energy powers every home
              and business. We believe in shaping a sustainable tomorrow, driven
              by innovation, dedication, and passion for the environment.
            </p>
            </div>
            <div className="flex-1">
             <Image src="/img1.jpg" width={500} height={300} className="rounded-2xl shadow-lg object-cover w-full h-80" alt="vision"/>
            </div>
          </section>

          {/* Timeline */}
          {/* <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-[#023F5E] dark:text-white">
              Our Journey
            </h2>
            <div className="relative border-l-4 border-[#023F5E] dark:border-white pl-8 space-y-12 max-w-2xl mx-auto">
              <div>
                <h3 className="text-xl font-bold">2010 – Founded</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  SolarCo is born with a mission to make solar affordable for
                  all.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">2015 – Expansion</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expanded operations nationwide, serving thousands of customers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">2020 – Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Introduced smart monitoring systems for better efficiency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">2024 – Global Impact</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Saving 1M+ tons of CO₂ emissions with our solutions.
                </p>
              </div>
            </div>
          </section> */}

          {/* Team */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-[#023F5E] dark:text-white">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  name: "Ethan Carter",
                  role: "CEO",
                  src: "/img4.jpg",
                },
                {
                  name: "Olivia Bennett",
                  role: "Head of Engineering",
                  src: "/img5.jpg",
                },
                {
                  name: "Noah Thompson",
                  role: "Sales Director",
                  src: "/img6.jpg",
                },
                {
                  name: "Ava Harper",
                  role: "Customer Support Manager",
                  src: "/img7.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="text-center group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <Image
                      alt={member.name}
                      src={member.src} width={112} height={112}
                      className="w-full h-full rounded-full object-cover border-4 border-[#023F5E]/30 group-hover:border-[#023F5E] transition"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-[#023F5E]">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
