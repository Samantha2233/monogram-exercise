import React, { useEffect, useState } from 'react';
import { CircleAnimation } from './CircleAnimation';
import styles from './auditScoreSection.module.css'

interface CountUpAnimationProps {
    number: number;
    duration?: number;
}

export function ScoreCircle({opacity = '1'}) {
    return  (
        <div className='relative  w-[150px] md:w-[250px] lg:m-[-30px] lg:w-[340px]' >
            <CircleAnimation opacity={opacity}/>
            <CountUpAnimation number={100} />
        </div>
    )
}

const CountUpAnimation = ( { number, duration = 3000 }: CountUpAnimationProps ) => {
	const countTo =  number;
	const [ count, setCount ] = useState( 0 );
    const easeOutQuad = (t: number) => t * ( 2 - t );
    const frameDuration = 1000 / 60;

	useEffect( () => {
		let frame = 0;
		const totalFrames = Math.round( duration / frameDuration );
		const counter = setInterval( () => {
			frame++;
			const progress = easeOutQuad( frame / totalFrames );
			setCount( countTo * progress );
			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [countTo, duration, frameDuration] );

	return (
        <div className='absolute w-[100px] flex justify-center top-[58px] left-[30px] md:top-[95px] md:left-[82px]  lg:top-[130px] lg:left-[130px] '>
            <span className={styles.number}>
                {Math.floor(count)}
            </span>
        </div>
    )
};