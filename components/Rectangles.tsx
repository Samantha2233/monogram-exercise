import { useState, useEffect } from 'react';
import Image  from 'next/image'
import styled, { css, keyframes } from 'styled-components'
import { useWindowSize } from '@/hooks/useWindowSize';

interface RectanglesType {
    recOnePath: string;
    recTwoPath: string;
}

export function Rectangles({recOnePath, recTwoPath }: RectanglesType) {
    const [display, setDisplay] = useState(false);

    const size = useWindowSize();
    let large = false;
    if(size?.width) {
        large = size.width as number > 995
    }

    let delayAnimation = setTimeout(() => setDisplay(true), 700)

    useEffect(() => {
        () => {
            return clearTimeout(delayAnimation)
        }  
    }, [display, delayAnimation])

    return (     
        <div className={`relative min-w-[95px] ml-[70px] h-[365px] lg:min-w-[300px] lg:ml-0`}>
            {display ? (
                <>
                    <RectangleContainer top={large ? 153 : 40} left={large ? 160 : -4} delay={.3}>
                        <Image 
                            src={recTwoPath}
                            width={278}
                            height={670}
                            alt='Rectangular design element 2'
                            className="h-[223px] w-auto lg:h-[670px]"
                        />
                    </RectangleContainer>
                    <RectangleContainer top={large ? 324 : 100} left={large ? -165 : -115} delay={0}>
                        <Image 
                            src={recOnePath}
                            width={280}
                            height={629}
                            alt='Rectangular design element 1'
                            className="h-[209px] w-auto lg:h-[629px]"
                        />
                    </RectangleContainer>
                    <RectangleContainer top={large ? 638 : 210} left={-62} delay={.6}>
                        <Image 
                            src='/rectangles/Rectangle-3.png' 
                            width={280}
                            height={479}
                            alt='Rectangular design element 3'
                            className="h-[159px] w-auto lg:h-[479px]"
                        />
                    </RectangleContainer>
                    <RectangleContainer top={large ? 455 : 142} left={large ? 320 : 45} delay={.9}>
                        <Image 
                            src='/rectangles/Rectangle-4.png' 
                            width={280}
                            height={662}
                            alt='Rectangular design element 4'
                            className="h-[220px] w-auto lg:h-[662px]"
                        />
                    </RectangleContainer>
                </>
            ) : null}
        </div>
    )
}

interface RectangleContainerType {
    top: number;
    left: number;
    delay: number;
}

const setRectangleAnimation = ({top, left, delay}: RectangleContainerType) => {
    const animation = keyframes`
        0% {
            top: ${top + 60}px;
            opacity: 0;
        }
        100% {
            top: ${top}px;
            opacity: 1;
        }
    `

    return css`
        position: absolute;
        left: ${left}px;
        width: 100%;
        animation: ${animation};
        animation-delay: ${delay + 's'};
        animation-duration: .5s;
        animation-fill-mode: both;
        animation-timing-function: ease-out;
    `
}

const RectangleContainer = styled.div`
    ${setRectangleAnimation}
`