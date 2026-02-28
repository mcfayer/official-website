import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Auto rotate on Y axis only
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Increased size from 1 → 4 */}
      <sphereGeometry args={[4, 40, 40]} />
      <meshStandardMaterial wireframe color="#ebebeb" />
    </mesh>
  );
}

/* =======================
   NEW: Cards Around Sphere
======================= */

function SphereCards() {
  const groupRef = useRef<THREE.Group>(null!);

  const cards = [
    "Cloud",
    "AI",
    "DevOps",
    "Security",
    "Data",
    "Automation",
    "Analytics",
    "Infra",
  ];

  const radius = 4; // slightly bigger than sphere (4)

  const positions = useMemo(() => {
    const temp: THREE.Vector3[] = [];
    const count = cards.length;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      temp.push(new THREE.Vector3(x, y, z));
    }

    return temp;
  }, []);

  // Rotate cards with sphere
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <group key={index} position={pos}>
          <Html center distanceFactor={10} zIndexRange={[0, 0]} >
            <div className="px-4 py-2 bg-black backdrop-md border border-white/20 rounded-xl text-white text-sm font-medium whitespace-nowrap">
              {cards[index]}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function SphereBackground() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden hidden md:block">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} />

        {/* Your original sphere (unchanged) */}
        <RotatingSphere />

        {/* Added rotating cards */}
        <SphereCards />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}