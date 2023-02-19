import styles from './mouseAnimation.module.css'

export function MouseAnimation() {
    return(
        <div className='
            animate-fadeInFromBottom delay-2.5s fill-mode-both
            hidden pl-[372px] pt-[128px] lg:block overflow-hidden 
        '>
            <svg width="183" height="540" viewBox="0 0 123 580" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Line */}
                <path d="M40.1848 0.399933C107.824 81.6444 83.459 202.349 41.4984 276.4C-24.354 392.615 -0.0856094 459.793 41.5468 535.157" stroke="#232323" strokeDasharray="4 4"/>
                {/* Arrow */}
                <path d="M11.1966 530.326L43.4075 539.363L51.0547 507.616" stroke="#232323"/>
                {/* Mouse */}
                <path 
                    className={styles.mouse} 
                    transform="translate(-10, -10)" 
                    d="M27.6959 33.4651L31.1224 30.548C35.8873 26.4915 36.4069 19.4006 32.396 14.6892L23.6448 4.40973C19.5882 -0.355223 12.5509 -0.920363 7.78593 3.13617L4.35945 6.05323C-0.35196 10.0642 -0.970639 17.1471 3.08589 21.9121L11.8371 32.1915C15.848 36.9029 22.9845 37.476 27.6959 33.4651ZM20.4033 24.8989C19.5828 23.9352 19.7478 22.5019 20.658 21.7271C21.6217 20.9067 23.0093 21.0181 23.8298 21.9818L25.2883 23.6951C26.1087 24.6588 25.9973 26.0464 25.0336 26.8668C24.1234 27.6417 22.6822 27.5758 21.8618 26.6121L20.4033 24.8989Z" 
                    fill="#151515"
                />
            </svg>
        </div>
    )
}