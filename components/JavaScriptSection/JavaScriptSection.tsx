import Image from "next/image";
import { TypingAnimation } from "./TypingAnimation";

export function JavaScriptSection() {
    return (
        <section className='
            animate-fadeInFromBottom delay-2s fill-mode-both
            pt-[30px] flex justify-center relative z-50 
        '>
            <div>
                <Image src='/orange-square.png' width={1397} height={893} alt='Background gradient design' className='p-[10px] h-[350px] sm:h-[auto]'/>
            </div>
            <div  className='absolute'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-white text-[60px]  lg:pt-[93px] lg:text-xl'>
                        javascript
                    </h1>
                    <p className='text-white text-[18px]  text-center leading-[35px] max-w-[560px]   pb-[10px] px-[20px] lg:pt-[44px] lg:pb-[57px]  lg:px-0'>
                        Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.
                    </p>
                    {/* Retro Computer */}
                    <div className='relative flex justify-center'>
                        <Image src='/retro-computer.png' width={786} height={852} alt='computer' className='ml-[-15px] w-[275px] sm:w-[450px] lg:w-[786px] '/>
                        <TypingAnimation />
                    </div>
                </div>
                <Image src='/arrow2.png' height={466} width={245} alt='arrow' className='absolute top-[260px] right-[-200px] max-[1200px]:hidden' />
            </div>
        </section>
    )
}