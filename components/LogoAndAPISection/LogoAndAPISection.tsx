import { useState, useEffect } from 'react'
import Image from "next/image";
import styled, { css, keyframes } from 'styled-components'
import { APISection } from '../APISection/APISection';
import { mobileLogos } from './logos';

interface LogoType {
    name: string;
    width: number;
    height: number;
    top: number;
    right?: number;
    left?: number;
    opacity: number;
    mobile?: boolean;
    delay: number;
    [key: string]: any
}

export function LogoAndAPISection() {    
    const [isShowing, setIsShowing] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsShowing(true)
                }
            });
        });
        const animationTrigger = document.querySelector('#animation-trigger')
        if(animationTrigger) {
            observer.observe(animationTrigger);
        }
    }, [])

    return (
        <div className='mt-[-200px] relative'>
            {/* Animation trigger */}
            <div className='absolute h-[100px] mt-[700px]' id='animation-trigger'></div>
            {/*  L O G O   S E C T I O N  */}
            {/* Lines / Columns */}
            <section className='justify-center bg-[#151515] hidden md:flex'>
                {/* Column 1 */}
                <div className='
                        px-[20px] 
                        border-x border-dashed border-slate-700
                        w-[25%] lg:w-[20%]
                        flex flex-col items-center 
                    '>
                        <Image 
                            src={`/logos/react.png`} width={183} height={38} alt={`react logo`}
                            className='mt-[450px] lg:mt-[650px] drop-shadow-white'
                        />
                        <Image src={`/logos/svelte.png`} width={220} height={42} alt={`svelte logo`}
                            className='mt-[250px] opacity-40 drop-shadow-white'
                        />
                </div>
                {/* Column 2 */}
                <div className='
                        px-[20px] w-[25%] lg:w-[20%]
                        flex flex-col items-center
                    '>
                        <Image 
                            src={`/logos/nextjs.png`} width={183} height={64} alt={`svelte logo`}
                            className='mt-[550px] md:mt-[650px] drop-shadow-white'
                        />
                        <Image 
                            src={`/logos/react.png`} width={183} height={38} alt={`react logo`}
                            className='mt-[200px] md:mt-[400px] opacity-30 drop-shadow-white'
                        />
                </div>
                {/* Column 3 */}
                <div className='
                        border-l border-dashed border-slate-700
                        px-[20px] w-[25%] lg:w-[20%]
                        flex flex-col items-center
                    '>
                        <Image 
                            src={`/logos/vue.png`} width={163} height={44} alt={`svelte logo`}
                            className='mt-[500px] md:mt-[850px] opacity-40 drop-shadow-white'
                        />
                </div>
                {/* Column 4 */}
                <div className='
                        border-x border-dashed border-slate-700
                        px-[20px] w-[25%] lg:w-[20%]
                        flex flex-col items-center
                    '>
                        <Image 
                            src={`/logos/nextjs.png`} width={183} height={64} alt={`svelte logo`}
                            className='mt-[450px] md:mt-[350px] lg:mt-[650px]  xl:mt-[500px] drop-shadow-white'
                        />
                        <Image 
                            src={`/logos/react.png`} width={183} height={38} alt={`react logo`}
                            className='mt-[200px] md:mt-[300px] xl:mt-[400px] drop-shadow-white'
                        />
                        <Image 
                            src={`/logos/svelte.png`} width={220} height={42} alt={`svelte logo`}
                            className='mt-[200px] md:mt-[450px] opacity-10 xl:mt-[325px] drop-shadow-white'
                        />
                </div>
           </section>

           {/* Box for Mobile Logo animation  */}
           <section className=' w[100%] h-[1100px] md:hidden bg-[#151515]'>
                <div className='border-2 mx-auto w-[210px]'>
                    {isShowing && mobileLogos?.map((logo, idx )=> {
                        return (
                            <LogoContainer key={idx} left={'50%'} top={logo.top} opacity={logo.opacity} delay={idx} mobile={true}>
                                <Image src={`/logos/${logo.name}.png`} width={logo.width} height={logo.height} alt={`${logo.name} logo`}/>
                            </LogoContainer>
                        )
                    })}
                </div>
            </section>

            {/*  A P I   S E C T I O N   */}
            <APISection />
            <Image 
                src='/squiggly-dark.png' width={1512} height={214} 
                className='w-[100%]' 
                aria-hidden='true' alt='squiggly design' 
            />
        </div>
    )
}

const setLogoAnimation = ({top, left, right, opacity, mobile, delay}: LogoType) => {
    let animation

    if(mobile) {
        animation = keyframes`
            0% {
                top: ${top + 50}px;
                filter: drop-shadow(0px -32px 30px white);
                opacity: 0;
            }
            100% {
                top: ${top}px;
                filter: drop-shadow(0px 0px 20px white);
                opacity: ${opacity};
            }
        `
    } else {
        animation = keyframes`
            0% {
                top: ${top - 100}px;
                filter: drop-shadow(0px -32px 30px white);
                opacity: 0;
            }
            100% {
                top: ${top}px;
                filter: drop-shadow(0px 0px 20px white);
                opacity: ${opacity};
            }
        `
    }

    return css`
        position: absolute;
        left: ${left}px;
        right: ${right}px;
        animation: ${animation};
        animation-duration: .5s;
        animation-fill-mode: both;
        animation-delay: ${(delay * .5) + 's'}
    `
}

const LogoContainer = styled.div`
    ${setLogoAnimation}
`