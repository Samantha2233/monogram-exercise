import { useState, useEffect } from 'react';
import { ScoreCircle } from './ScoreCircle'
import styles from './auditScoreSection.module.css'

export function AuditScoreSection() {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsShowing(true)
                }
            });
        });
        const auditSection = document.querySelector('#audit-section')
        if(auditSection) {
            observer.observe(auditSection);
        }
    }, [])

    return (
        <div  className='bg-[#151515] relative h-[180vh] xl:h-[170vh] min-[1400px]:h-[140vh] ' id='audit-section'> 
            <div className={styles.greenBox} >
                <div className="flex flex-col items-center relative h-[100vh]">
                    <h1 className='text-[#EFFFE2] text-[60px] text-center pt-[100px] tracking-[-0.039em] leading-[65px] lg:pb-[30px] lg:text-[76px]'>top audit scores</h1>
                    {/* Score Circle Meters */}
                    {isShowing ? (
                        <div className='flex flex-col items-center min-[1140px]:flex-row'>
                            <div className='flex flex-row '>
                                <ScoreCircle  />
                                <ScoreCircle />
                            </div>
                            <div className='flex flex-row'>
                                <ScoreCircle opacity={'0.3'}/>
                                <ScoreCircle />
                            </div>
                        </div>
                    ) : null}

                    <p className="px-[10px] py-[25px] text-[#C7C7C7] text-[18px] mix-blend-color-dodge max-w-[790px]  leading-[162%] sm:px-[30px] md:text-[26px]  pt-[50px]">
                        Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.
                    </p>
                    <p className="px-[10px] py-[25px] text-[#C7C7C7] text-[18px] mix-blend-color-dodge max-w-[790px]  leading-[162%] sm:px-[30px] md:text-[26px] ">
                        Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.
                    </p>
                    <p className="px-[10px] py-[25px] text-[#C7C7C7] text-[18px] mix-blend-color-dodge max-w-[790px]  leading-[162%] sm:px-[30px] md:text-[26px] ">
                        A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.
                    </p>
                </div>
            </div>
        </div>
    )
}