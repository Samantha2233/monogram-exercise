import { code } from './code'

export const TypingAnimation = () => {
    return (
        <div className='absolute top-[25px] left-[110px]  lg:top-[80px] lg:left-[130px]'>
            {code.map((line, idx) => {
                return (
                    <Line key={idx} text={line.text} pl={line.pl} delay={line.delay} />
                )
            })}
        </div>
    )
}

interface LineProps {
    text: string;
    pl?: number;
    delay?: string;
}

const Line = ({ text, pl = 0, delay  }: LineProps) => {
    let styles = `
        animate-type
        max-w-min  pb-[1px] whitespace-nowrap overflow-hidden
        text-[#44DBFF] tracking-[.005em] text-[3px] font-[Menlo]
        lg:text-[7px] lg:pb-[5px]
    `
    return (
            <p 
                className={styles}
                style={{
                    paddingLeft: pl, 
                    animationDelay: delay,
                    animationFillMode: 'both'
                }} 
            >
                {text}
            </p>
    )
}