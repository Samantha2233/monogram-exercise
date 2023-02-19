import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls,  } from "@react-three/drei";
import { APISphere } from "./APISphere";

export function APISection() {
    return (
        <section>
            <div className="flex flex-col items-center relative h-[520px] md:h-[570px]  lg:h-[670px]  bg-[#151515]">
                <h1 className='text-white text-[60px] lg:pb-[63px] lg:text-xl'>api</h1>
                <p className="p-[10px] text-white text-[18px] max-w-[760px] tracking-[.005em] leading-[38.8px] md:text-[24px] text-center">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
                {/* 3D API Sphere & Glowy Background*/}
                <div className='absolute w-[100%] mt-[280px] h-[400px] md:h-[550px] lg:h-[980px] lg:mt-[260px] flex flex-col items-center'>
                    <Image src='/light-blur.png' width={1017} height={969} alt='light blur design' aria-hidden='true' 
                        className='absolute ml-[-55px] w-[300px]  mt-[110px] md:w-[500px] md:mt-[70px] md:ml-[-110px] lg:ml-[-180px] lg:mt-0 lg:w-[1017px]' 
                    />
                    <Canvas className='mt-[155px] w-[100%]' camera={{ position: [0, 0, -9.2] }}>
                        <ambientLight />
                        <spotLight
                            intensity={7}
                            position={[-100, 100, -70]}
                            angle={Math.PI / 6}
                        />
                        <PresentationControls
                            global
                            config={{ mass: 2, tension: 500 }}
                            rotation={[0, 0, -.5]}
                            polar={[-Math.PI / 3, Math.PI / 3]}
                            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                        >
                            {/* R3F Sphere w/ text band */}
                            <APISphere position={[0, 0, 0]} fontSizing={150}>
                                prismic    supabase   JSON
                            </APISphere>
                        </PresentationControls>
                        <OrbitControls enableZoom={false}/>  
                    </Canvas>
                </div>
            </div>
        </section>
    )
}