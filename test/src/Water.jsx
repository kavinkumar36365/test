import * as THREE from 'three'
import { useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial, useTexture } from '@react-three/drei'
import waterVertexShader from './shaders/waterVertexShader.glsl'
import waterFragmentShader from './shaders/waterFragmentShader.glsl'
import dudvMapUrl from './assets/dudvMap.png'

const WaterMaterial = shaderMaterial({
    waterColor: new THREE.Color('#14c6a5'),
    time: 0,
    tDudv: null,
  },
  waterVertexShader,
  waterFragmentShader
);

extend({ WaterMaterial });

const Water = () => {
    const materialRef = useRef();

    const dudvMap = useTexture(dudvMapUrl);

    dudvMap.wrapS = dudvMap.wrapT = THREE.RepeatWrapping;



    useFrame((state)=>{
        if(materialRef.current){
            materialRef.current.time = state.clock.elapsedTime;
        }
    })



  return (
    <mesh 
        rotation={[-Math.PI / 2, 0, 0]}
    >
        <planeGeometry args={[10,10]}/>
        <waterMaterial 
             ref={materialRef} 
             attach="material"
             tDudv={dudvMap}
        />
    </mesh>
  )
}

export default Water