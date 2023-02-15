import { Rectangles } from "../HeroSection/Rectangles";

export function MarkupSection() {
    return (
        <div className="flex flex-col items-center p-[10px]  lg:flex-row lg:p-0 lg:text-left lg:items-start lg:justify-center">
            <div className='pl-[116px]'>
                <h1>markup</h1>
                <p className='w-[450px]'>When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.</p>
            </div>
            <Rectangles recOnePath='/rectangles/Rectangle-a.png' recTwoPath='/rectangles/Rectangle-b.png' rotate={90}/>
        </div>
    )
}