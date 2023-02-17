import { useState, useEffect } from 'react'
import Image from "next/image";
import styled, { css, keyframes } from 'styled-components'
import { desktopLogos, mobileLogos } from "./logos";

interface LogoType {
    name: string;
    width: number;
    height: number;
    top: number;
    right?: number;
    left?: number;
    opacity: number;
    mobile?: boolean;
    delay?: number;
    [key: string]: any
}

export function LogoSection() {    
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsShowing(true)
                }
            });
        });
        const blackBox = document.querySelector('#black-box')
        if(blackBox) {
            observer.observe(blackBox);
        }
    }, [])

    return (
        // Dark box
        <section className='bg-[#151515] w-[100%] h-[160vh] lg:h-[200vh] min-[1500px]:h-[160vh] mt-[-200px]' id='black-box'>
            {/* Relative box for Desktop Logo animation */}
            <div className='hidden relative w-[100%] h-[100%]  md:block'>
                {isShowing && desktopLogos?.map((logo, idx )=> {
                    return (
                        <LogoContainer key={idx} left={logo.left} right={logo.right} top={logo.top} opacity={logo.opacity}>
                            <Image src={`/logos/${logo.name}.png`} width={logo.width} height={logo.height} alt={`${logo.name} logo`}/>
                        </LogoContainer>
                    )
                })}
            </div>
            {/* Relative box for Mobile Logo animation  */}
            <div className=' w-[100%] h-[100%] relative flex justify-center md:hidden'>
                {isShowing && mobileLogos?.map((logo, idx )=> {
                    return (
                        <LogoContainer key={idx} left={'50%'} top={logo.top} opacity={logo.opacity} delay={idx} mobile={true}>
                            <Image src={`/logos/${logo.name}.png`} width={logo.width} height={logo.height} alt={`${logo.name} logo`}/>
                        </LogoContainer>
                    )
                })}
            </div>
        </section>
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
                top: 0px;
                filter: drop-shadow(0px -32px 30px white);
                opacity: 1;
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
        animation-fill-mode: forwards;
        animation-delay: ${delay ? (delay * .2) + 's' : undefined}
        `
}

const LogoContainer = styled.div`
    ${setLogoAnimation}
`