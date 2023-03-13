import React from "react";
import { Canvas } from "@react-three/fiber";

export default function Experience() {
  return (
    <>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
