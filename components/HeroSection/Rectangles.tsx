import Image  from 'next/image'

export function Rectangles() {
    return (
        <div className="relative min-w-[95px] ml-[70px] h-[365px] lg:min-w-[300px] lg:ml-0">
            <Image 
                src='/hero-rectangles/Rectangle-1.png' 
                width={280}
                height={629}
                alt='Rectangular design element 1'
                className="absolute h-[209px] top-[100px] left-[-115px] w-auto lg:top-[324px] lg:left-[-165px] lg:h-[629px]"
            />
            <Image 
                src='/hero-rectangles/Rectangle-2.png' 
                width={278}
                height={670}
                alt='Rectangular design element 2'
                className="absolute h-[223px] top-[40px] left-[-4px] w-auto lg:top-[153px] lg:left-[160px] lg:h-[670px]"
            />
            <Image 
                src='/hero-rectangles/Rectangle-3.png' 
                width={280}
                height={479}
                alt='Rectangular design element 3'
                className="absolute h-[159px] top-[210px] left-[-62px] w-auto lg:top-[638px] lg:h-[479px]"
            />
            <Image 
                src='/hero-rectangles/Rectangle-4.png' 
                width={280}
                height={662}
                alt='Rectangular design element 4'
                className="absolute h-[220px] top-[142px] left-[45px] w-auto lg:top-[455px] lg:left-[320px] lg:h-[662px]"
            />
        </div>
    )
}