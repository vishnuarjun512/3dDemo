import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls, Environment } from "@react-three/drei";

function Model(props) {
  const { scene, materials } = useGLTF(`/AK47v2.glb`);
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = materials[child.material.name];
    }
  });
  return <primitive object={scene} {...props} />;
}

function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <h1 className="bg-red-300 text-4xl font-semibold text-center p-3">
        Acubiq
      </h1>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [10, 30, 100], fov: 45 }}
        style={{ position: "absolute", height: "900px", width: "1800px" }}
      >
        <color attach="background" args={["#101010"]} />
        <OrbitControls />
        <Stage environment={"night"}>
          <Model scale={[0.01, 0.01, 0.01]} />
        </Stage>
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}

export default App;
