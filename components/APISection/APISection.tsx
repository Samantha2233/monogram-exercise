import Image from "next/image";

export function APISection() {
    return (
        <div>
            <div className="flex flex-col items-center bg-[#151515] relative h-[100vh]">
                <h1 className='text-white text-[60px] lg:pb-[63px] lg:text-xl'>api</h1>
                <p className="p-[10px] text-white text-[18px] max-w-[760px] tracking-[.005em] leading-[38.8px] md:text-[24px] text-center">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
            </div>
            <Image src='/squiggly-dark.png' width={1512} height={214} alt='squiggly design' className='w-[100%]' />
        </div>
    )
}