/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 plane.gltf --transform
Author: helijah (https://sketchfab.com/helijah)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bristol-167-brabazon-03762f09307e4abd9165a56c30cb4d0c
Title: Bristol 167 Brabazon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/plane-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['DefaultWhite_colors.png']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.transparentExt} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.DefaultWhite} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.DefaultWhite} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.DefaultWhite} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['DefaultWhite_ai.png']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['DefaultWhite_asi.png']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['DefaultWhite_colors.png.001']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['DefaultWhite_interior.png']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['DefaultWhite_man.png']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['DefaultWhite_rcc.png']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['DefaultWhite_rpm.png']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['DefaultWhite_turn.png']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['DefaultWhite_vsi.png']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.transparent} />
      </group>
    </group>
  )
}

useGLTF.preload('/plane-transformed.glb')