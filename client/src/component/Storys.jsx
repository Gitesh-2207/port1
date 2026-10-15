
import React from "react";

export default function Storys() {
    return (
        <section
            id="about-story"
            className="relative overflow-hidden bg-[#f8f6f0] px-6 py-16 text-[#201d1c] sm:px-10 sm:py-20 lg:px-[3.5%] lg:py-24"
        >
            <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.25fr] lg:gap-20">

                {/* LEFT: PROFILE PHOTO */}
                <div className="min-w-0">
                    <div className="relative mx-auto max-w-[660px] lg:mx-0">

                        <div className="absolute -top-5 left-[35%] z-10 h-10 w-28 rotate-2 bg-[#d8cda9]/70 sm:w-36" />

                        <div className="relative overflow-hidden border border-black/5 bg-[#e8e1d3] shadow-sm">
                            <img
                                src="/images/profile.jpg"
                                alt="Gitesh Patidar"
                                className="h-[440px] w-full object-cover object-center sm:h-[600px] lg:h-[680px]"
                            />

                            <div className="absolute bottom-5 right-5 text-right font-mono text-xs font-bold leading-7 text-white drop-shadow-md">
                                STRATEGIST
                                <br />
                                LISTENER
                                <br />
                                MAKER
                            </div>
                        </div>
                    </div>

                    <p className="mt-7 max-w-[590px] font-handwritten text-2xl leading-relaxed text-[#1769c9] sm:text-[28px]">
                        Usually switching between code, a notebook full of ideas, and way
                        too many browser tabs.
                    </p>
                </div>

                {/* RIGHT: STORY */}
                <div className="min-w-0">
                    <h2 className="max-w-[1000px] font-serif text-[clamp(2.2rem,4vw,4.3rem)] leading-[1.13] tracking-[-0.035em]">
                        Good design should feel comfortable to look at and effortless to
                        use, guiding people naturally without making them think twice.
                    </h2>

                    <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-20 lg:gap-x-12">
                        <p className="font-serif text-lg leading-[1.8] sm:text-xl">
                            My journey into technology began with curiosity and creativity.
                            From learning programming fundamentals in college to building
                            full-stack applications, I've always enjoyed turning ideas into
                            useful digital experiences.
                        </p>

                        <p className="font-serif text-lg leading-[1.8] sm:text-xl">
                            My background in frontend development taught me that a good
                            product needs more than attractive screens. It needs clean code,
                            thoughtful design, responsive layouts, and a smooth user
                            experience.
                        </p>

                        <p className="font-serif text-lg leading-[1.8] sm:text-xl">
                            Today, I build web applications using React, Node.js, Express,
                            and MongoDB, focusing on practical solutions, reusable
                            components, and maintainable code.
                        </p>

                        <p className="font-serif text-lg leading-[1.8] sm:text-xl">
                            I'm also exploring AI tools and modern development workflows to
                            improve productivity, experiment with ideas, and build better
                            digital products.
                        </p>
                    </div>

                    {/* BOTTOM QUOTE */}
                    <div className="mt-14 border-l-4 border-[#1769c9] bg-[#e1f1f4] px-6 py-7 sm:px-10 sm:py-9 lg:mt-24">
                        <p className="font-handwritten text-3xl italic text-[#201d1c]">
                            Honestly?
                        </p>

                        <p className="mt-2 font-handwritten text-2xl leading-relaxed text-[#1769c9] sm:text-3xl">
                            Still the same curious person who loves building things—just
                            using code and pixels instead of pencils.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
