import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Helicopter() {
  const gltf = useLoader(GLTFLoader, './Ingenuity_v3.glb');

  return (
    <group position={[2, 2, 1]}>
      <primitive object={gltf.scene} />
    </group>
  );
}
