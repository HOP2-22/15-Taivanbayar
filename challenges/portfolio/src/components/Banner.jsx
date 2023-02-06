import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Model";

export const Banner = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <Suspense>
        <ambientLight />
        <Model position={[0, -2, 0]} />
        <OrbitControls autoRotate autoRotateSpeed={10} />
      </Suspense>
    </Canvas>
  );
};
