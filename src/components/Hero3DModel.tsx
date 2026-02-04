import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#22d3ee"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const OrbitingRing = ({ 
  radius, 
  speed, 
  color, 
  thickness = 0.015,
  segments = 64,
  tilt = 0,
  isHovered = false
}: { 
  radius: number; 
  speed: number; 
  color: string;
  thickness?: number;
  segments?: number;
  tilt?: number;
  isHovered?: boolean;
}) => {
  const ringRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
      
      // Smooth hover animation
      const targetScale = isHovered ? 1.15 : 1;
      ringRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    if (materialRef.current) {
      const targetOpacity = isHovered ? 0.9 : 0.5;
      materialRef.current.opacity += (targetOpacity - materialRef.current.opacity) * 0.1;
    }
  });

  // Create dashed ring effect with multiple small segments
  const dashCount = 24;
  const dashGap = 0.3; // Gap ratio

  return (
    <group ref={ringRef} rotation={[Math.PI / 2 + tilt, 0, 0]}>
      {/* Main dashed ring */}
      {Array.from({ length: dashCount }).map((_, i) => {
        const angle = (i / dashCount) * Math.PI * 2;
        const arcLength = ((1 - dashGap) / dashCount) * Math.PI * 2;
        
        return (
          <mesh key={i} rotation={[0, 0, angle]}>
            <torusGeometry args={[radius, thickness, 8, segments / dashCount, arcLength]} />
            <meshBasicMaterial 
              ref={i === 0 ? materialRef : undefined}
              color={color} 
              transparent 
              opacity={0.5} 
            />
          </mesh>
        );
      })}
      
      {/* Accent dots at intervals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh 
            key={`dot-${i}`} 
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              0
            ]}
          >
            <sphereGeometry args={[thickness * 2, 8, 8]} />
            <meshBasicMaterial color={color} transparent opacity={isHovered ? 1 : 0.7} />
          </mesh>
        );
      })}
    </group>
  );
};

const EnergyArc = ({ 
  radius, 
  color, 
  rotationOffset = 0,
  isHovered = false
}: { 
  radius: number; 
  color: string; 
  rotationOffset?: number;
  isHovered?: boolean;
}) => {
  const arcRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (arcRef.current) {
      arcRef.current.rotation.z = state.clock.elapsedTime * 0.5 + rotationOffset;
      arcRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      
      const targetScale = isHovered ? 1.1 : 1;
      arcRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    }
  });

  return (
    <mesh ref={arcRef} rotation={[Math.PI / 2, 0, rotationOffset]}>
      <torusGeometry args={[radius, 0.008, 8, 32, Math.PI * 0.6]} />
      <meshBasicMaterial color={color} transparent opacity={isHovered ? 0.95 : 0.7} />
    </mesh>
  );
};

const FloatingParticles = ({ isHovered = false }: { isHovered?: boolean }) => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      const targetScale = isHovered ? 1.2 : 1;
      particlesRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={isHovered ? 0.04 : 0.03} color="#22d3ee" transparent opacity={isHovered ? 0.8 : 0.6} sizeAttenuation />
    </points>
  );
};

const Scene = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      
      <AnimatedSphere />
      
      {/* Aesthetic dashed orbital rings */}
      <OrbitingRing radius={3} speed={0.25} color="#22d3ee" thickness={0.012} tilt={0.1} isHovered={isHovered} />
      <OrbitingRing radius={3.4} speed={-0.18} color="#3b82f6" thickness={0.01} tilt={-0.15} isHovered={isHovered} />
      <OrbitingRing radius={3.8} speed={0.12} color="#06b6d4" thickness={0.008} tilt={0.2} isHovered={isHovered} />
      
      {/* Energy arcs */}
      <EnergyArc radius={2.6} color="#22d3ee" rotationOffset={0} isHovered={isHovered} />
      <EnergyArc radius={2.8} color="#3b82f6" rotationOffset={Math.PI * 0.66} isHovered={isHovered} />
      <EnergyArc radius={3} color="#06b6d4" rotationOffset={Math.PI * 1.33} isHovered={isHovered} />
      
      <FloatingParticles isHovered={isHovered} />
    </>
  );
};

const Hero3DModel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-[500px] lg:h-[600px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene isHovered={isHovered} />
      </Canvas>
    </div>
  );
};

export default Hero3DModel;
