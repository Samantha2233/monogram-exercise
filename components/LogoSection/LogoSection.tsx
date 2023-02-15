import { useState, useEffect } from 'react'
import Image from "next/image";
import styled, { css, keyframes } from 'styled-components'
import { desktopLogos, mobileLogos } from "./logos";

interface LogoType {
    name: string;
    width: number;
    height: number;
    top: string;
    right?: string;
    left?: string;
    opacity: number;
    mobile?: boolean;
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
        // Black box
        <div className='bg-[#151515] w-[100%] h-[200vh] mt-[-200px]' id='black-box'>
            {/* Relative box for Desktop animation */}
            <div className='hidden w-[100%] h-[100%] relative md:block'>
                {isShowing && desktopLogos?.map((logo, idx )=> {
                    return (
                        <LogoContainer key={idx} left={logo.left} right={logo.right} top={logo.top} opacity={logo.opacity}>
                            <Image src={`/logos/${logo.name}.png`} width={logo.width} height={logo.height} alt={`${logo.name} logo`}/>
                        </LogoContainer>
                    )
                })}
            </div>
            {/* Mobile  */}
            <div className=' w-[100%] h-[100%] relative md:hidden'>
                {isShowing && mobileLogos?.map((logo, idx )=> {
                    return (
                        <LogoContainer key={idx} left={'50%'} right={logo.right} top={logo.top} opacity={logo.opacity} mobile={true}>
                            <Image src={`/logos/${logo.name}.png`} width={logo.width} height={logo.height} alt={`${logo.name} logo`}/>
                        </LogoContainer>
                    )
                })}
            </div>
        </div>
    )
}

const setLogoAnimation = ({top, left, right, opacity, mobile}: LogoType) => {
    const animation = keyframes`
        0% {
            top: 0px;
            filter: drop-shadow(0px -32px 30px white);
            opacity: 1;
        }
        100% {
            top: ${top};
            filter: drop-shadow(0px 0px 20px white);
            opacity: ${opacity};
        }
    `

    return css`
        position: absolute;
        left: ${left};
        right: ${right};
        animation: ${animation};
        animation-duration: 5s;
        animation-fill-mode: forwards;
        transform: ${ mobile ? 'translate(-50%)' : undefined}
    `
}

const LogoContainer = styled.div`
    ${setLogoAnimation}
`