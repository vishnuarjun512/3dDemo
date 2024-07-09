import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Gun(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/AK47v2.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="weaponsmodelsak47weapon_rif_ak47vmdl_c"
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.025}
        >
          <skinnedMesh
            name="weaponsmodelsak47weapon_rif_ak47vmdl_cbody_hd"
            geometry={
              nodes.weaponsmodelsak47weapon_rif_ak47vmdl_cbody_hd.geometry
            }
            material={materials.weapon_rif_ak47}
            skeleton={
              nodes.weaponsmodelsak47weapon_rif_ak47vmdl_cbody_hd.skeleton
            }
          />
          <primitive object={nodes.weapon_hand_r} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/AK47v2.glb");
