import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../components/icons/Model";

export const Banner = () => {
  return (
    <Canvas camera={{ position: [2, 3, -2] }}>
      <Suspense>
        <ambientLight />
        <Model position={[0, -2, 0]} />
        <OrbitControls autoRotate autoRotateSpeed={5} />
      </Suspense>
    </Canvas>
  );
};
