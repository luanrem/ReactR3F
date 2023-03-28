import { OrbitControls } from '@react-three/drei'
import { useControls, button } from 'leva'

export default function Experience() {
  const { position, color, visible } = useControls('sphere', {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: 'invertY'
    },
    color: '#ff0000',
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5]
    },
    clickMe: button(() => {
      console.log('ok')
    }),
    choice: {
      options: ['a', 'b', 'c']
    }
  })

  const { cubeScale } = useControls('cube', {
    cubeScale: {
      value: 1.5,
      min: 0.1,
      max: 3,
      step: 0.1
    }
  })

  return <>

    <OrbitControls makeDefault />

    <directionalLight position={[1, 2, 3]} intensity={1.5} />
    <ambientLight intensity={0.5} />

    <mesh position={[position.x, position.y, 0]} visible={visible}>
      <sphereGeometry />
      <meshStandardMaterial color={color} />
    </mesh>

    <mesh position-x={2} scale={cubeScale}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>

    <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" />
    </mesh>

  </>
}