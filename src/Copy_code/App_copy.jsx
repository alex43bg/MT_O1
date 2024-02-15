import {
	Environment,
	ScrollControls,
	useScroll,
	Scroll,
} from '@react-three/drei'

import { Canvas, useFrame } from '@react-three/fiber'
import { getProject, val } from '@theatre/core'
import {
	PerspectiveCamera,
	SheetProvider,
	useCurrentSheet,
	editable as e,
} from '@theatre/r3f'
import './Styles/App.css'
import './components/Logo/Logo.css'

import { Experience } from './components/Experience'
import Ball_animation from './components/ball/Ball_animation.json'
// import { OrbitControls } from '@react-three/drei'

// import { Html } from '@react-three/drei'
import LogoSvg from './components/Logo/LogoSvg'

// import Button from './components/Button/button'
import React from 'react'

import { useAtom } from 'jotai'
import { currentPageAtom, scene1Atom } from './GlobalState'

// import ScrollPageContainer from './UI/ScrollPageContainer'
// import Feature from './UI/Feature'
// import ContentContainer from './UI/ContentContainer'
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function App() {
	const sheet = getProject('Ball', { state: Ball_animation }).sheet('Scene')

	return (
		<>
			<Canvas gl={{ preserveDrawingBuffer: true, physicalCorrectLights: true }}>
				<ambientLight intensity={0.8} />
				<directionalLight position={[10, 5, 5]} intensity={3} />
				<ScrollControls pages={10} damping={0.4} maxSpeed={0.05}>
					<SheetProvider sheet={sheet}>
						<Scene />
					</SheetProvider>
				</ScrollControls>
			</Canvas>
		</>
	)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Scene() {
	const sheet = useCurrentSheet()
	const scroll = useScroll()

	const [currentPage, setCurrentPage] = useAtom(currentPageAtom)
	const [scene1, setScene1] = useAtom(scene1Atom)

	const sequenceLength = val(sheet.sequence.pointer.length)
	sheet.sequence.position = scroll.offset * sequenceLength

	function logCurrentPageCallback(scroll, callback) {
		const currentPage = Math.floor(scroll.offset * scroll.pages) + 1
		console.log('CurrentPage', currentPage)
		callback(currentPage)

		if (currentPage >= 1 && currentPage <= 4) {
			setScene1(true)
		} else {
			setScene1(false)
		}
	}

	useFrame(() => {
		if (scroll) {
			logCurrentPageCallback(scroll, setCurrentPage)
			sheet.sequence.position = scroll.offset * sequenceLength
		}
	})
	console.log('Scene 1:', scene1)

	return (
		<>
			<Experience />
			{/* ////////////////////////////////////////////////////////////////////////
			CAMERA_SETUP
			//////// */}
			<PerspectiveCamera
				theatreKey='Camera'
				makeDefault
				position={[5, 5, -5]}
				fov={75}
			/>
			{/* //////////////////////////////////////////////////////////////////////////////// */}
		</>
	)
}