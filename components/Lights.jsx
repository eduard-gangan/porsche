import { Environment, EnvironmentCube, Lightformer, Float } from "@react-three/drei";

const Lights = () => {
  return (
    // group different lights and lightformers. We can use group to organize lights, cameras, meshes, and other objects in the scene.
    <group name="lights">
      {/**
       * @description Environment is used to create a background environment for the scene
       * https://github.com/pmndrs/drei?tab=readme-ov-file#environment
       */}
      <Environment resolution={256} files="/environment.hdr" frames={Infinity}>
        <group>
          {/**
           * @description Lightformer used to create custom lights with various shapes and properties in a 3D scene.
           * https://github.com/pmndrs/drei?tab=readme-ov-file#lightformer
           */}
          <Lightformer
            form="rect"
            intensity={1}
            position={[5, 0, -10]}
            scale={10}
            color={"#dbeafe"}
          />
          <Lightformer
            form="rect"
            intensity={1}
            position={[-10, 2, -3]}
            scale={10}
            rotation-y={Math.PI / 2}
            color={"#e0f2fe"}
          />
          {/* <Lightformer
            form="rect"
            intensity={5}
            position={[10, -2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
            color={"#cbd5e1"}
          /> */}
          <Float speed={3} floatIntensity={2} rotationIntensity={2}>
            <Lightformer form="circle" color="#e0f2fe" intensity={0.5} scale={10} position={[5, 3, -5]} target={[0, 3, -15]} />
          </Float>
        </group>
      </Environment>

      {/**
       * @description spotLight is used to create a light source positioned at a specific point
       * in the scene that emits light in a specific direction.
       * https://threejs.org/docs/#api/en/lights/SpotLight
       */}
      {/* <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // the penumbra is the soft edge of a shadow cast by a point light
        decay={0} // the amount the light dims as it moves away from the source
        intensity={Math.PI * 0.2} // the light intensity
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
      /> */}
      {/* <ambientLight intensity={3} color="#475569"/> */}
    </group>
  );
};

export default Lights;