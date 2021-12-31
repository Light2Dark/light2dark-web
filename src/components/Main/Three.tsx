import styled from 'styled-components'
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

import {useGLTF, useTexture} from "@react-three/drei"

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

const smokeImg = "../../assets/models/smoke-1.png"

function Rain(props: JSX.IntrinsicElements["mesh"]) {
    // const smokeMap = useTexture("../../assets/models/smoke-1.png");
    // const textureProps = useTexture({
    //     smoke: "smoke-1.png",
    // });
    

    return(
        <mesh>
            <sphereGeometry args={[1,32,32]} />
            <meshStandardMaterial color={"blue"} />
            {/* <meshLambertMaterial map={textureProps.smoke} transparent={true} /> */}
        </mesh>
    )
}

const Three = (): JSX.Element => {
    return (
        <>
            {/* <h2 className = {className}>Three.js video here, rain falling on white roses?</h2> */}

            <CanvasStyled>
                <ambientLight intensity={1} color={0x55555} />
                <directionalLight color="0xffeedd" position={[0,0,1]} />
                <Rain />
            </CanvasStyled>
        </>
    )
}

const CanvasStyled = styled(Canvas)`
    height: 200px;
    color: ${props => props.theme.colors.darkBlue};
    background-color: 0xffeedd;
    background-color: white;
    text-align: center;
`




export default Three