import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/Addons.js';

interface ModelProps {
  // Define your prop types here
}

const Model: React.FC<ModelProps> = (props) => {
  const { nodes, materials } : any = useGLTF('/coding.gltf') as GLTF;

  const modelRef = useRef<any>(); // Adjust the type according to your model's ref type
  const [rotationAxis, setRotationAxis] = useState<[number, number, number]>([Math.random(), Math.random(), Math.random()]);
  const [rotationSpeed, setRotationSpeed] = useState(0.002);

  useFrame(() => {
    // Auto-rotate the model along a random axis
    if (modelRef.current) {
      modelRef.current.rotation.x += rotationAxis[0] * rotationSpeed;
      modelRef.current.rotation.y += rotationAxis[1] * rotationSpeed;
      modelRef.current.rotation.z += rotationAxis[2] * rotationSpeed;
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0.752, -0.086]} scale={1.5} rotation={[1.263, 0, 0]}>
          <primitive object={nodes.my_rig_rootJoint} />
          <skinnedMesh geometry={nodes.hair_0.geometry} material={materials.cloth} skeleton={nodes.hair_0.skeleton} />
          <skinnedMesh geometry={nodes.hair_1.geometry} material={materials.solidify} skeleton={nodes.hair_1.skeleton} />
          <skinnedMesh geometry={nodes.me_0.geometry} material={materials.body} skeleton={nodes.me_0.skeleton} />
          <skinnedMesh geometry={nodes.me_1.geometry} material={materials.solidify} skeleton={nodes.me_1.skeleton} />
          <skinnedMesh geometry={nodes.me002_0.geometry} material={materials.cloth} skeleton={nodes.me002_0.skeleton} />
          <skinnedMesh geometry={nodes.me002_1.geometry} material={materials.solidify} skeleton={nodes.me002_1.skeleton} />
          <skinnedMesh geometry={nodes.kemeja_0.geometry} material={materials.cloth} skeleton={nodes.kemeja_0.skeleton} />
          <skinnedMesh geometry={nodes.kemeja_1.geometry} material={materials.solidify} skeleton={nodes.kemeja_1.skeleton} />
        </group>
        <mesh geometry={nodes.Cube005_0.geometry} material={materials.laptop_tex} position={[-0.033, -0.442, -0.467]} rotation={[2.378, 0, 0]} scale={0.149} />
        <mesh geometry={nodes.bool1185_0.geometry} material={materials.Material} position={[2.403, 0.752, -0.428]} rotation={[-0.464, 0.296, -0.932]} scale={0.106} />
      </group>
    </group>
  );
};

useGLTF.preload('/coding.gltf');

export default Model;
