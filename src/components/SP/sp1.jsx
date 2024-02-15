import { useGLTF, useAnimations } from "@react-three/drei";
import { useAtom } from "jotai";
import { currentSceneAtom } from '../../GlobalState';
import { useEffect, useRef, useState } from "react";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Sp = () => {
  const [currentScene] = useAtom(currentSceneAtom);

  const model = useGLTF("./sp.glb");
  /////////////////////////////////////////////////////////////
  const animations = useAnimations(model.animations.scene);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const animationDuration =
    animations.actions["Object_0"]?.getClip()?.duration || 0;
  const halfDuration = useRef(animationDuration / 2); 
  const mixer = animations.mixer;
  useEffect(() => {
    if (currentScene >= 11) {
      const action = animations.actions["Object_0"];
      action.play();
      setTimeout(() => {
        action.paused = true;
        mixer.update(halfDuration.current);
        setAnimationPlayed(true);
      }, halfDuration.current * 1000);
    }
  }, [currentScene, animationPlayed, animations.actions, mixer]);
  ////////////////////////////////////////////////////////////
  return (
    <>
      <mesh>
        <primitive object={model.scene} />
      </mesh>
    </>
  );
};
export default Sp;

