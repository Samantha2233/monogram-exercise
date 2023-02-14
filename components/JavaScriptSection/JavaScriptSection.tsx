import Image from "next/image";

export function JavaScriptSection() {
    return (
        <div className='pt-[30px] flex justify-center relative '>
            <div>
                <Image src='/orange-square.png' width={1397} height={893} alt='Background gradient design' className='p-[10px]'/>
            </div>
            <div  className='absolute '>
                <div className='flex flex-col items-center'>
                    <h1 className='text-white text-[60px]  lg:pt-[93px] lg:text-xl'>javascript</h1>
                    <p className='text-white text-[18px]  text-center leading-[35px] max-w-[560px]  lg:pt-[44px]  pb-[10px]  lg:pb-[57px]  pb-0  px-[20px] lg:px-0'>Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
                    <Image src='/computer.png' width={786} height={852} alt='computer' className='w-[70%] lg:w-[786px] ml-[-15px] '/>
                </div>
                <Image src='/arrow2.png' height={466} width={245} alt='arrow' className='absolute top-[260px] right-[-200px] max-[1200px]:hidden' />
            </div>
        </div>
    )
}