import React from "react";

export default function Storys() {
    return (
        <section
            id="about-story"
            className="relative mt-16 sm:mt-20 lg:mt-24"
        >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.25fr] lg:gap-16 xl:gap-20">

                {/* LEFT: PROFILE PHOTO WITH TAPE & CAPTION */}
                <div className="min-w-0">
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
                                    {/* Dummy portrait image link - user can replace with their own photo URL or local asset */}
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
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
                        Usually switching between Figma, a notebook full of ideas, and way
                        too many browser tabs.
                    </p>
                </div>

                {/* RIGHT: STORY CONTENT */}
                <div className="min-w-0 flex flex-col justify-between">
                    <div>
                        {/* Big Serif Heading */}
                        <h2 className="max-w-[980px] font-serif text-[clamp(2.1rem,3.7vw,3.85rem)] font-normal leading-[1.18] tracking-tight text-[#201d1c]">
                            Good design should feel comfortable to look at and effortless to
                            use, guiding people naturally without making them think twice.
                        </h2>

                        {/* 2-Column Paragraphs */}
                        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:mt-14 lg:gap-x-12">
                            <div className="space-y-6">
                                <p className="font-serif text-[17px] leading-[1.78] text-[#2b2725] sm:text-[18px]">
                                    My journey into design didn't begin with software—it began
                                    with a pencil. From sketching portraits and tattoo concepts to
                                    leading design on stage and event campaigns in college, I've
                                    always been drawn to creating things that communicate visually.
                                </p>

                                <p className="font-serif text-[17px] leading-[1.78] text-[#2b2725] sm:text-[18px]">
                                    Today, I design digital products across web and mobile,
                                    combining UX thinking, visual design, and a practical
                                    understanding of how products are built.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <p className="font-serif text-[17px] leading-[1.78] text-[#2b2725] sm:text-[18px]">
                                    A background in frontend development taught me that good
                                    design doesn't end in Figma. Understanding implementation
                                    helps me collaborate better with developers, make smarter
                                    design decisions, and create experiences that are both
                                    beautiful and buildable.
                                </p>

                                <p className="font-serif text-[17px] leading-[1.78] text-[#2b2725] sm:text-[18px]">
                                    Lately, I've been exploring AI as a creative partner—not to
                                    replace design thinking, but to speed up research, prototyping,
                                    and iteration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Blue Highlight / Quote Box */}
                    <div className="mt-12 border-l-[3.5px] border-[#1769c9] bg-[#e1f1f4] px-6 py-6 sm:px-8 sm:py-7 lg:mt-16">
                        <p className="font-handwritten text-2xl font-semibold italic text-[#201d1c] sm:text-3xl">
                            Honestly?
                        </p>

                        <p className="mt-1 font-handwritten text-xl leading-relaxed text-[#1769c9] sm:text-2xl">
                            Still the same kid who loved drawing—just that using pixels instead
                            of pencils now.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
