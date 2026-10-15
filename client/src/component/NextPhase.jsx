
import { ArrowRight } from "lucide-react";

export default function NextPhase() {
    return (
        <section className="relative min-h-[500px] md:min-h-[710px] overflow-hidden bg-[#fff36b] px-6 py-16 md:px-[4%] md:py-[105px] text-[#211e1d]">
            {/* Eyebrow */}
            <p className="mb-7 font-mono text-xs font-bold tracking-[0.16em]">
                NEXT PHASE
            </p>

            {/* Main heading */}
            <h2 className="relative z-10 max-w-[1500px] text-[clamp(2.8rem,6.1vw,7rem)] font-black leading-[0.99] tracking-[-0.065em]">
                Great products begin with
                <br className="hidden xl:block" /> understanding people
                <br className="hidden xl:block" /> — not pixels
            </h2>

            {/* Large circular outline */}
            <div className="pointer-events-none absolute -right-[170px] top-[175px] h-[570px] w-[570px] rounded-full border-[3px] border-[#211e1d] md:-right-[130px] md:top-[190px] md:h-[720px] md:w-[720px]" />

            {/* Circular CTA */}
            <a
                href="#works"
                className="group absolute right-[8%] top-[160px] z-20 flex h-[180px] w-[180px] items-center justify-center rounded-full border border-[#211e1d] bg-[#fff36b] transition-transform duration-500 hover:scale-105 md:right-[6%] md:top-[160px] md:h-[255px] md:w-[255px]"
            >
                <span className="flex items-center gap-3 font-mono text-xs font-bold">
                    CHECK MY WORKS
                    <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                </span>
            </a>
        </section>
    );
}
