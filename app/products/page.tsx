// app/solar/page.tsx
"use client";
import { products } from "../components/Productslist";
export default function SolarPage() {
  return (
    <main className="flex-1 bg-background-light dark:bg-background-dark font-display text-neutral-800 dark:text-neutral-200">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-bold tracking-tighter text-neutral-900 dark:text-white">
          Our Solar Products
        </h2>

        <div className="space-y-16">
          {/* Section: Solar Panels */}
        {
            products.map((category) => (
                <section key={category.category}>
                    <h3 className="mb-6 border-b border-primary/20 pb-2 text-2xl font-bold text-neutral-900 dark:text-white">
                        {category.category}
                    </h3>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {category.items.map((item) => (
                            <div key={item.name} className="group overflow-hidden rounded-lg bg-white/5 shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-black/5">
                                <div
                                    className="aspect-video w-full bg-cover bg-center"
                                    style={{ backgroundImage: `url("${item.image}")` }}
                                ></div>
                                <div className="p-5">
                                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                                        {item.name}
                                    </h4>
                                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                                        {item.description}
                                    </p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-lg font-semibold text-primary">
                                            ${item.price}
                                        </span>
                                        <div className="mt-3 flex items-center">
                                            <div className="flex text-primary">
                                            {/* Rating stars */}
                                            {[1, 2, 3, 4].map((_, i) => (
                                                <svg
                                                key={i}
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                            <svg
                                                className="h-5 w-5 text-neutral-300 dark:text-neutral-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            </div>
                                            <span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400">
                                            (125 reviews)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))
        }       
                                        
          <section>
            <h3 className="mb-6 border-b border-primary/20 pb-2 text-2xl font-bold text-neutral-900 dark:text-white">
              Solar Panels
            </h3>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="group overflow-hidden rounded-lg bg-white/5 shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-black/5">
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAQ84-ATBSZ-oaVDARNM2Jnf9ydGT-ti7zbOleO4N2LEr876SE1UU9bH8R3LqIOHBzrJ6vbSk9pvk-ZqnbH3n5poOHDNj6h54c7_u5MZKFkreIQmh4e0hm8oS_AsjFh65yIXy7Zlw0jmNSJXDYsRexGU3ILGIXQzwHiejIAJvN1hzu0TKlGeCE7S7emAIpwsiXilsz3rrDZSTdhCSpEMtCrgLj73zT5wu5vrpJsz5WoH1vhP7wtNAFZnUN3kXiui8zpZcQamT554k")',
                  }}
                ></div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Standard Solar Panels
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Reliable and cost-effective for residential use.
                  </p>
                  
                </div>
              </div>

              {/* Repeat other cards the same way */}
            </div>
          </section>

          {/* Section: Comparison Table */}
          <section>
            <h3 className="mb-6 border-b border-primary/20 pb-2 text-2xl font-bold text-neutral-900 dark:text-white">
              Solar Panel Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-600 dark:text-neutral-400">
                <thead className="bg-white/5 text-xs uppercase text-neutral-700 dark:bg-black/10 dark:text-neutral-300">
                  <tr>
                    <th className="px-6 py-3" scope="col">
                      Feature
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Standard Panels
                    </th>
                    <th className="px-6 py-3" scope="col">
                      High-Efficiency Panels
                    </th>
                    <th className="px-6 py-3" scope="col">
                      Thin-Film Panels
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/10 bg-white/5 dark:border-primary/20 dark:bg-black/5">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-neutral-900 dark:text-white"
                    >
                      Efficiency
                    </th>
                    <td className="px-6 py-4">15-17%</td>
                    <td className="px-6 py-4">18-22%</td>
                    <td className="px-6 py-4">10-12%</td>
                  </tr>
                  {/* Add more rows here */}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
    // <ProductsList />
  );
}
