"use client";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {BackgroundLines} from "@/components/ui/background-lines";
const words = "Innovator. Creator. Dreamer. Building the Future, One Line of Code at a Time.";

export default function Home() {
  return (
    <BackgroundLines>
      <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-center text-black dark:text-white mb-6">
            FAHAD HAIDER
          </h1>
          <div className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            <TextGenerateEffect words={words} />
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <a
              href="/resume/resume.pdf"
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Download Resume
            </a>
             {/* <a
              href="/projects"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Contact
            </a> */}
          </div>
        </div>
      </main>
    </BackgroundLines>


  );

}
