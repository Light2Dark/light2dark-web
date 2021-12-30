import styled from 'styled-components'
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

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

const Three = (): JSX.Element => {
    return (
        <>
            {/* <h2 className = {className}>Three.js video here, rain falling on white roses?</h2> */}

            <CanvasStyled>
                <ambientLight intensity={0.1} />
                {/* <pointLight position={[10,10,10]} />
                <Box position={[0,0,0]} /> */}
                <directionalLight color="red" position={[0,0,5]} />
                <Rose />
            </CanvasStyled>
        </>
    )
}

const CanvasStyled = styled(Canvas)`
    height: 200px;
    color: ${props => props.theme.colors.darkBlue};
    background-color: white;
    text-align: center;
`




export default Three