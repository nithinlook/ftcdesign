"use client";

import { Welcome } from "@/components/home/welcome";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="container mx-auto">
      <div className="my-8" id="hero">
        <div className="relative">
          <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-115 from-[#E3F2FD] from-28% via-[#64B5F6] via-70% to-[#1976D2] sm:bg-linear-145"></div>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
                <div className="">
                  <Welcome />
                  <h1 className="my-8 text-6xl/[0.9] max-w-2xl font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                    This is FTCDesign.
                  </h1>
                  <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                    A design system for the FTC community, by the FTC community.
                  </p>
                  <div className="flex space-x-3 py-4">
                    <Button>Get started</Button>
                    <Button variant={"secondary"}>Get in Contact</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className="grid grid-cols-1 flex md:grid-cols-2 gap-4">
          <div className="px-4 md:px-0">
            <h2 className="text-5xl my-8">
              Developed by <br />
              <span className="text-sky-700 font-bold underline">
                World Class
              </span>{" "}
              teams.
            </h2>
            <p className="max-w-2xl py-4">
              FTCDesign represents the culmination of effort, expertise, and
              passion from some of the most distinguished and highly
              accomplished teams operating within the dynamic global landscape
              of competitive robotics. These are organizations recognized
              internationally for their achievements, consistently demonstrating
              excellence and pushing the boundaries of what's possible in
              robotic design and strategy.
              <br />
              <br />
              We actively encourage participation and contribution from the
              wider community. You have the opportunity to apply and join this
              prestigious group, becoming a contributor to the future
              development and enhancement of FTC Design. Alternatively, we
              invite you to view our comprehensive list of current contributors
              to appreciate the breadth and depth of the talent pool driving
              this project forward.
            </p>
            <Button>Contributors List</Button>
          </div>
          <div className="flex">
            <img src="/worldclass.png" className="h-[30rem] my-auto ms-auto" />
          </div>
        </div>
      </div>
      <div className="border-1 my-8 border-zinc-800/15 p-8 rounded-md">joe</div>
    </main>
  );
}
