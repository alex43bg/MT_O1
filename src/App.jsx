import React, { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Ball_animation from "./components/ball/Ball_animation.json";

import {
  Environment,
  ScrollControls,
  useScroll,
  Scroll,
} from "@react-three/drei";

import { getProject, val } from "@theatre/core";

import {
  PerspectiveCamera,
  SheetProvider,
  useCurrentSheet,
  editable as e,
} from "@theatre/r3f";

import Sp from "./components/SP/sp";
// import Sp1 from "./components/SP/sp1";
import ScrollPageContainer from "./UI/ScrollPageContainer";
import ContentContainer from "./UI/ContentContainer";
import SpotLightWithHelper from "./SpotLightWithHelper";

import { useAtom } from "jotai";
import { currentPageAtom, scene1Atom, currentSceneAtom } from "./GlobalState";
import Feature from "./UI/Feature";
import Logo from './components/Logo/Logo'
import './components/Logo/Logo.css'
import Menus from "./components/menu/menus";
import "./Styles/index.css";
import { Ball } from "./components/ball/Ball";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function App() {
  // const [scene1, setScene1] = useAtom(scene1Atom);

  const sheet = getProject("Fly Ball", { state: Ball_animation }).sheet(
    "Scene"
  );
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [currentScene] = useAtom(currentSceneAtom);
  const shouldAnimateScene1 = currentScene === 1;
  const shouldAnimateScene2 = currentScene >= 5;
  const [hiddenState, sethiddenState] = useState("Hidden");
  useEffect(() => {
    if (shouldAnimateScene2) {
      sethiddenState("");
    }
  }, [shouldAnimateScene2]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Logo />
      <Menus />
      <ScrollPageContainer>
        <ContentContainer
          customClassName={`${hiddenState}${
            shouldAnimateScene1 ? "scale-in-hor-center" : "scale-out-horizontal"
          }`}
        >
          <Feature title="MidiTune" description="Best site for Midi" />
        </ContentContainer>
      </ScrollPageContainer>
      <ScrollPageContainer>
        <ContentContainer
          customClassName={`${
            shouldAnimateScene2 ? "scale-in-hor-center" : "scale-out-horizontal"
          }`}
        >
          <Feature title="MidiTune2" description="Best" />
        </ContentContainer>
      </ScrollPageContainer>
      <Canvas gl={{ preserveDrawingBuffer: true, physicalCorrectLights: true }}>
        <ScrollControls pages={10} distance={0.5} damping={1} maxSpeed={1}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </>
  );
}

function Scene() {
  ////////////////////////////////////////////////
  //Scene setup///////////////////////////////////
  const showHelperValue = false;
  const backgroundColorValue = "black";
  const EnvironmentValue = "sky.hdr";
  ///////////////////////////////////////////////

  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  // const [scene1, setScene1] = useAtom(scene1Atom);
  const [currentScene, setCurrentScene] = useAtom(currentSceneAtom);

  const sequenceLength = val(sheet.sequence.pointer.length);
  sheet.sequence.position = scroll.offset * sequenceLength;

  function logCurrentPageCallback(scroll, callback) {
    const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;

    // Determine the current scene based on how far into the page you`ve scrolled
    const positionWithinPage = (scroll.offset * scroll.pages) % 1;

    //The *2 is the multiple of withc the pages is split - thus for more scenes multiple with larger numbers
    const sceneOffsetForCurrentPage = Math.floor(positionWithinPage * 2) + 1;

    //Calculate the total scenes from all previos pages + scenes from the current page
    const computedScene = (currentPage - 1) * 2 + sceneOffsetForCurrentPage;

    console.log("Current Page:", currentPage);
    console.log("Current Scene:", currentScene);
    callback(currentPage);
    setCurrentScene(computedScene);
  }

  useFrame(() => {
    if (scroll) {
      logCurrentPageCallback(scroll, setCurrentPage);
      sheet.sequence.position = scroll.offset * sequenceLength;
    }
  });

  useEffect(() => {
    console.log("Current Scene:", currentScene);
  }, [currentScene]);

  return (
    <>
      <color attach="background" args={[backgroundColorValue]} />
      <Environment files={EnvironmentValue} />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        near={1}
        far={100}
        fov={60}
        zoom={1}
        position={[3.217, 3.314, 0.138]}
        rotation={[1, 1, 1]}
        scale={[1, 1, 1]}
      />

      <SpotLightWithHelper
        theatreKey="spot light 1"
        position={[0, 0, 0]}
        intensity={1}
        showHelper={showHelperValue}
      />
      <SpotLightWithHelper
        theatreKey="spot light 2"
        position={[0, 0, 0]}
        intensity={1}
        showHelper={showHelperValue}
      />
      {/* <Sp1/> */}
      {/* <Sp /> */}
      <Ball />
    </>
  );
}
