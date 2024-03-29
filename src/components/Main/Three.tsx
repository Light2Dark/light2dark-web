import styled from 'styled-components'
import * as THREE from 'three'
import {useRef, useState, Suspense} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import {Cloud, Sky, OrbitControls} from "@react-three/drei"

function Rose(props: JSX.IntrinsicElements["mesh"]) {
    return(
        <mesh>
            <sphereGeometry args = {[2,2,2]} />
            <meshBasicMaterial color={"blue"} />
        </mesh>
    )
}

function Rain(props: JSX.IntrinsicElements["mesh"]) {

    return(
        <>
            <ambientLight intensity={0.8} />
            <mesh>
                <Suspense fallback = {null}>
                    

                </Suspense>
            </mesh>
        </>
    )
}

function Rig() {
    const camera = useThree((state) => state.camera)
    return useFrame((state) => {
        camera.position.z = Math.sin(state.clock.elapsedTime) * 10
    })
}

const CanvasStyled = styled(Canvas)`
    background-color: white;
    display: block;
`

const DivStyled = styled.div`
    
`

function CloudsSky(): JSX.Element {
    return(
        <>
            <ambientLight intensity={0.8} />
            <pointLight intensity={2} position={[0,0,-1000]} />
            <Suspense fallback = {null}>
                <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
                <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
                <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
                <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
                <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} />
            </Suspense>

            <Sky azimuth={180} turbidity={7.4} rayleigh={3.007} inclination={0} mieCoefficient={0.008} mieDirectionalG={0.764} distance={1000} />
            <OrbitControls autoRotate />
        </>
    )
}

const Three = () : JSX.Element => {
    return (
        <>
            {/* Rain falling on roses */}

            {/* <CanvasStyled>
                <ambientLight intensity={1} color={0x55555} />
                <directionalLight color="0xffeedd" position={[0,0,1]} />
                <Rain />
            </CanvasStyled> */}

            <CanvasStyled style={{height: "300px"}}>
                <CloudsSky />    
            </CanvasStyled>
        </>
    )
}

export default Three



//  const RefExample = (): JSX.Element => {
    //     const count = useRef(0) // the reference count is initialized to 0
    //     // value of reference is persisted accross re-renderings
    //     // change in reference values does not trigger re-rendering
        
    //     const click = () => {
    //         count.current++
    //         console.log(`Clicked ${count.current} times`)
    //     }
    
    //     console.log("I rendered")
    
    //     return(
    //         <>
    //             <button style={{color: "blue"}} onClick={click}>Click</button>
    //         </>
    //     )
    // }