import { CaretRight } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/animated-shiny-text";
import Link from "next/link";

export function Welcome() {
  return (
    <Link href="/docs">
      <div className="z-10 flex py-8 items-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing FTCDesign</span>
            <CaretRight size={12} className="ms-2 my-auto" />
          </AnimatedShinyText>
        </div>
      </div>
    </Link>
  );
}
