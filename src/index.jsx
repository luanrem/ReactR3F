import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { ACESFilmicToneMapping, LinearEncoding } from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [3, 2, 6]
}

root.render(
    <Canvas
        dpr={[1, 2]}
        gl={{
            antialias: true,
            toneMapping: ACESFilmicToneMapping,
            // outputEncoding: LinearEncoding
        }}
        camera={cameraSettings}
    >
        <Experience />
    </Canvas>
)