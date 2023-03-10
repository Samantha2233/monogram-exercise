import { useState, useEffect } from "react";
import Image from "next/image";
import { Rectangles } from "../Rectangles";

export function MarkupSection() {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsShowing(true)
                }
            });
        });
        const rectangleTrigger = document.querySelector('#html-rectangle-trigger')
        if(rectangleTrigger) {
            observer.observe(rectangleTrigger);
        }
    }, [])

    return (
        <section className='flex flex-col items-center max-w-[1920px] pt-[100px] sm:pt-[200px] md:pt-[500px] lg:pt-[600px] xl:pt-[400px]'>
            <div className="flex flex-col-reverse items-center p-[10px] lg:flex-row lg:text-left lg:justify-between xl:justify-around w-[100%] ">
                <div className='p-[10px] min-[1090px]:pl-[116px]'>
                    <h1 className='text-[60px] lg:pb-[69px] sm:text-center lg:text-xl '>markup</h1>
                    <p className='p-0 text-[#757575] text-[18px] max-w-[480px] tracking-[.005em] leading-[162%] md:text-[24px] '>When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.</p>
                </div>
                <div className='sm:pb-0 lg:mt-[-360px]  lg:pr-[0px] ' id='html-rectangle-trigger'> 
                    {isShowing ? (
                        <Rectangles recOnePath='/rectangles/Rectangle-a.png' recTwoPath='/rectangles/Rectangle-b.png'/>
                    ) : null}
                </div>
            </div>
                <Image src='/blocks.png' width={1920} height={720} alt='blocks design' className='w-[150%] md:w-[100%] max-w-[1750px] pt-[100px] lg:pt-[300px] xl:pt-[150px]' />
            </section>
    )
}