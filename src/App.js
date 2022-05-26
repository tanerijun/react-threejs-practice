import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Box from './components/Box';
import Controls from './components/Controls';
import Panorama from './components/Panorama';

export default function App() {
  return (
    <div id="Canvas-container">
      <Canvas>
        <Controls />
        <Suspense fallback={null}>
          <Panorama />
        </Suspense>
        <Box />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
      </Canvas>
    </div>
  );
}
