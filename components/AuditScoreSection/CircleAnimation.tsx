import styles from './circleAnimation.module.css'

export interface CircleAnimationProps {
    opacity?: string;
}

export function CircleAnimation({opacity = "1"}) {
    return (
        <svg width="100%" viewBox="0 0 320 338" fill="none" opacity={opacity} xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ddd_15_192)">
                <path 
                    className={styles.path}
                    d="M275.334 169C275.334 141.861 264.925 115.756 246.251 96.0635C227.578 76.3707 202.062 64.5903 174.962 63.1496C147.861 61.7089 121.24 70.7175 100.584 88.3194C79.9275 105.921 66.8092 130.776 63.9318 157.761C61.0544 184.747 68.6371 211.809 85.1175 233.37C101.598 254.932 125.721 269.351 152.516 273.657C179.311 277.963 206.737 271.828 229.143 256.515C251.549 241.203 267.229 217.879 272.951 191.351" 
                    stroke="#EFFFE2" 
                    stroke-width="4" 
                    stroke-linecap="round"
                />
            </g>
            <defs>
                <filter id="filter0_ddd_15_192" x="0.333984" y="0" width="338" height="338.001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="30.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.325621 0 0 0 0 0.983333 0 0 0 0 0.163889 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_192"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="21"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.9125 0 0 0 0 0.880867 0 0 0 0 0.121667 0 0 0 1 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_15_192" result="effect2_dropShadow_15_192"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.32549 0 0 0 0 0.984314 0 0 0 0 0.164706 0 0 0 1 0"/>
                <feBlend mode="normal" in2="effect2_dropShadow_15_192" result="effect3_dropShadow_15_192"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_15_192" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}