import { useGLTF, useAnimations } from "@react-three/drei";
import { useAtom } from "jotai";
import { useEffect } from "react";

const Sp = () => {
  // const [,setSpLoaded] = useAtom(spLoadedAtom);
  const model = useGLTF("./sp.glb");
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   setSpLoaded(true);
  //   return () => {
  //     setSpLoaded(false);
  //   };
  // },[]);
  //////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <mesh>
        <primitive object={model.scene} />
      </mesh>
    </>
  );
};
export default Sp;
