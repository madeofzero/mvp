"use client"
import { Button } from "@app/components/ui/button";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export default function Homepage() {
  function copyCode(message: string) {
    navigator.clipboard.writeText(message);
  }

  return (
    <main className="dark flex flex-col items-center justify-center min-h-screen overflow-scroll py-2 bg-black text-white">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div id="animation-container">
          <svg className="animation-rainbow-cat" viewBox="0 0 70 20">
            <defs>
              <linearGradient id="rainbow-colors" x1="0.5" x2="0.5" y2="1">
                <stop className="rainbow-color1" offset="0" />
                <stop className="rainbow-color1" offset="0.167" />
                <stop className="rainbow-color2" offset="0.167" />
                <stop className="rainbow-color2" offset="0.335" />
                <stop className="rainbow-color3" offset="0.335" />
                <stop className="rainbow-color3" offset="0.5" />
                <stop className="rainbow-color4" offset="0.5" />
                <stop className="rainbow-color4" offset="0.669" />
                <stop className="rainbow-color5" offset="0.669" />
                <stop className="rainbow-color5" offset="0.833" />
                <stop className="rainbow-color6" offset="0.833" />
                <stop className="rainbow-color6" offset="1" />
              </linearGradient>
            </defs>
            <g className="rainbow-cat">
              <g className="rainbow">
                <rect />
                <rect />
                <rect />
                <rect />
                <rect />
                <rect />
                <rect />
              </g>
              <g className="cat">
                <g className="cat-tail" transform="translate(40, 5.5)">
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                </g>
                <g className="cat-legs" transform="translate(43, 5.5)">
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                </g>
                <g className="cat-bread" transform="translate(43, 5.5)">
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                </g>
                <g className="cat-head" transform="translate(43, 5.5)">
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                  <rect />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-100"><span className="text-secondary m-2 p-2 rounded-md border font-mono hover:bg-secondary hover:text-black/60 cursor-pointer">Ctrl+C</span>, <span className="text-primary m-2 p-2 rounded-md border font-mono hover:bg-primary hover:text-black/60 cursor-pointer">Ctrl+V</span> your way to success.</h1>
        <div className="p-4 rounded-lg bg-gray-900 text-gray-400 transition-all hover:text-white relative">
          <pre className="font-mono text-sm cursor-pointer" onClick={e => copyCode("git clone https://github.com/madeofzero/madeofzero-next-mvp.git")}>
            <code>$ git clone https://github.com/madeofzero/madeofzero-next-mvp.git</code>
          </pre>
        </div>
        <p className=" max-w-sm text-center my-0 text-base opacity-60">If you find yourself thinking, <span className="text-balance underline">'Hey, this project isn't the worst.'</span> expressing it in words might be the next logical step. Or not. Your call.</p>
        <div className="flex gap-2 items-center">
          <Link href="https://love.madeofzero.com/">
            <Button className="py-4 px-4 bg-secondary text-white rounded-lg shadow-md hover:scale-105 transition-all">
              <HeartIcon className="inline w-auto px-4" /> Share your love
            </Button>
          </Link>

          <Link href="https://www.linkedin.com/company/madeofzero" className="text-sm hover:text-primary h-full">
            Say 👋 to madeofzero
          </Link>
        </div>
      </div>
    </main >
  )
}
