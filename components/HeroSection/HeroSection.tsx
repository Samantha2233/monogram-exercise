import { MouseAnimation } from "./MouseAnimation";
import { Rectangles } from "./Rectangles";

export function HeroSection() {
    return (
        <section className="flex flex-col-reverse items-center justify-end p-[10px] text-center lg:flex-row lg:p-0 lg:text-left lg:items-start lg:justify-center">
            <div>
                <h1 className="p-0 text-[60px] lg:pt-[126px] lg:pl-[126px] lg:text-xl" >jamstack
                    <span className=" 
                        bg-gradient-to-r from-[#FCB87F] via-[#FA9675] to-[#C17C9F]
                        bg-[#F4C18E] bg-cover bg-clip-text text-transparent
                        mt-[-60px]
                        pl-0 sm:pl-[27px] 
                        block sm:inline 
                        max-[450px]:text-[90px]"
                    >
                        101
                    </span>
                </h1>
                <p className="p-0 text-[#757575] max-w-[675px] tracking-[.005em] leading-[195.5%] text-[18px] lg:pl-[178px] lg:pt-[44px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit. 
                </p>
                <MouseAnimation/>
            </div>
           <Rectangles recOnePath='/rectangles/Rectangle-1.png' recTwoPath='/rectangles/Rectangle-2.png'  />
        </section>
    )
}