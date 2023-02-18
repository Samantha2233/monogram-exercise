import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Cylinder } from '@react-three/drei'

const pointSize = 4

function setUpCanvas(children:string, fontSizing:number, uvWidth = 2048) {
    const fontSize = fontSizing;
    const canvas = document.createElement('canvas');
    canvas.width = uvWidth;
    canvas.height = uvWidth / pointSize;
    const context = canvas.getContext('2d');
    if (context) {
        context.fillStyle = 'transparent';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = `bold ${fontSize}px -apple-system, Inter, sans-serif`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = 'pink';
        context.lineWidth = 2;
        const ctext = children;
        context.fillText(ctext, canvas.width / 2, canvas.height / 2);
    }
    return canvas
}

interface APISphereProps {
    children: string;
    position: any;
    fontSizing: number;
    uvWidth?: number;
}

export const APISphere = ({ children, position, fontSizing, uvWidth }: APISphereProps) => {
    const { viewport } = useThree();
    const scale = viewport.width > 13 ? 5 : viewport.width / 3;

    const canvas = useMemo(() => {
        return setUpCanvas(children, fontSizing, uvWidth)
    }, [children, fontSizing, uvWidth])

    const texture = useRef<THREE.CanvasTexture>(null)
    useFrame(({ clock }) => {
        if (texture.current) {
            texture.current.offset.x = clock.getElapsedTime() / 2
        }
    })

    return (
        <>
             {/* Sphere */}
             <mesh>
                <sphereGeometry args={[scale, 32, 32]} />
                <meshStandardMaterial color={"blue"} />
            </mesh>
            {/* Text Band */}
            <group scale={scale} position={position}>
                <Cylinder args={[1, 1, 1 / pointSize, 64, 1, true]}>
                    <meshStandardMaterial transparent attach="material">
                    <canvasTexture
                        ref={texture}
                        attach="map"
                        repeat={new THREE.Vector2( 5, 1 )}
                        image={canvas}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                    />
                    </meshStandardMaterial>
                </Cylinder>
            </group>
        </>
    )
}
  
