import React from "react";

export default function AboutHeroStory() {
  return (
    <section id="about-story" className="relative mt-16 sm:mt-20 lg:mt-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.25fr] lg:gap-16 xl:gap-20">
        {/* Left: Profile Photo With Tape & Caption */}
        <div className="reveal-on-scroll reveal-fade-right min-w-0">
          <div className="relative mx-auto max-w-[560px] lg:mx-0">
            {/* Top Washi Tape */}
            <div
              className="absolute -top-4 left-[36%] z-20 h-9 w-32 rotate-1 bg-[#d8cca5]/80 shadow-sm backdrop-blur-[0.5px] border-t border-b border-black/5 sm:w-36"
              aria-hidden="true"
            />

            {/* Tilted Photo Print Card */}
            <div className="relative -rotate-1 transition-transform duration-300 hover:rotate-0">
              <div className="overflow-hidden border border-black/10 bg-white p-2.5 shadow-[0_14px_34px_rgba(32,29,28,0.12)] sm:p-3 sm:shadow-[0_20px_45px_rgba(32,29,28,0.15)]">
                <div className="relative overflow-hidden bg-[#e8e1d3]">
                  <img
                    src="Gitesh.jpeg"
                    alt="Profile portrait"
                    className="h-[460px] w-full object-cover object-center sm:h-[580px] lg:h-[660px]"
                  />

                  {/* Overlay text in bottom-right corner */}
                  <div className="absolute bottom-5 right-5 text-right font-mono text-xs font-bold leading-6 tracking-[0.18em] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.85)] sm:text-sm">
                    STRATEGIST
                    <br />
                    LISTENER
                    <br />
                    MAKER
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Handwritten caption below photo */}
          <p className="mt-6 max-w-[540px] font-handwritten text-2xl leading-snug text-[#1769c9] sm:text-[28px]">
            Usually juggling frontend designs, backend logic, database queries, and a few bugs I didn't invite.
          </p>
        </div>

        {/* Right: Story Content */}
        <div className="min-w-0 flex flex-col justify-between">
          <div>
            {/* Big Serif Heading */}
            <h2 className="reveal-on-scroll reveal-fade-up max-w-[980px] font-serif text-[clamp(2.1rem,3.7vw,3.85rem)] font-normal leading-[1.18] tracking-tight text-[#201d1c]">
              I believe great web experiences are built at the intersection of clean code, thoughtful design, and real user needs.
            </h2>

            {/* 2-Column Paragraphs */}
            <div className="reveal-on-scroll reveal-fade-up delay-150 mt-10 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:mt-14 lg:gap-x-12">
              <div className="space-y-6">
                <p className="font-serif text-[15px] leading-[1.72] text-[#2b2725] sm:text-[16px] lg:text-[17px]">
                  My journey into development started with curiosity—understanding how websites work, how interfaces come together, and how a simple idea can turn into something people actually use. What began with experimenting with HTML, CSS, and JavaScript gradually grew into a passion for building complete web applications.
                </p>

                <p className="font-serif text-[15px] leading-[1.72] text-[#2b2725] sm:text-[16px] lg:text-[17px]">
                  Today, I work with the MERN stack—MongoDB, Express.js, React, and Node.js—to build responsive frontends, scalable backend APIs, and full-stack applications. From designing interactive user interfaces to implementing authentication, database operations, and API integrations, I enjoy working across the entire development process.
                </p>
              </div>

              <div className="space-y-6">
                <p className="font-serif text-[15px] leading-[1.72] text-[#2b2725] sm:text-[16px] lg:text-[17px]">
                  Building projects has taught me that good software is about more than just writing code. It's about solving problems, structuring applications properly, improving performance, and creating experiences that feel smooth and intuitive for users.
                </p>

                <p className="font-serif text-[15px] leading-[1.72] text-[#2b2725] sm:text-[16px] lg:text-[17px]">
                  I'm constantly exploring new tools, refining my development skills, and learning better ways to build reliable applications. Lately, I've also been exploring AI-powered tools to improve productivity, speed up development, and turn ideas into working products faster.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Blue Highlight / Quote Box */}
          <div className="reveal-on-scroll reveal-fade-up delay-200 mt-12 border-l-[3.5px] border-[#1769c9] bg-[#e1f1f4] px-6 py-6 sm:px-8 sm:py-7 lg:mt-16">
            <p className="font-handwritten text-2xl font-semibold italic text-[#201d1c] sm:text-3xl">
              Honestly?
            </p>

            <p className="mt-1 font-handwritten text-xl leading-relaxed text-[#1769c9] sm:text-2xl">
              For me, every project is an opportunity to learn something new, solve a real problem, and build something meaningful—one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
