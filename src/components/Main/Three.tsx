import styled from 'styled-components'
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, {useRef, useState, Suspense} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'

import {useGLTF, Cloud, Sky, OrbitControls} from "@react-three/drei"

interface Props {
    className?: string
    colors?: string
}

function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    
    return(
        <mesh
        {...props}
        ref = {ref}
        scale = {clicked ? 1.5:1}
        onClick = {(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
             <boxGeometry args = {[2,2,2]} />
             <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />   
        </mesh>
    )
}

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
`

function Clouds_Sky(): JSX.Element {
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

            <CanvasStyled style={{height: "400px"}} camera={{position: [0,0,16], fov: 75}}>
                {/* <Clouds_Sky /> */}
                
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