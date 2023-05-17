import React, { Component } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Plane from './Plane'

export class ProductDesign extends Component {
  render() {
    return (
      <Canvas>
        <Stage environment="city" intensity={0.2}>
            <Plane/>
        </Stage>
        <OrbitControls enableZoom={false}/>
      </Canvas>
    )
  }
}

export default ProductDesign