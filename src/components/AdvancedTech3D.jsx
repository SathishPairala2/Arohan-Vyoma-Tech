import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleGlobe() {
    const pointsRef = useRef();

    // Create random points for the particle sphere
    const count = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 2 + Math.random() * 0.5;
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.1;
        pointsRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    });

    return (
        <group>
            <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#a855f7"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>

            {/* Central Core */}
            <mesh scale={[1.8, 1.8, 1.8]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.05} />
            </mesh>
        </group>
    );
}

function ConnectionLines() {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    });

    return (
        <group ref={ref}>
            <mesh>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshBasicMaterial color="#00d4ff" wireframe transparent opacity={0.03} />
            </mesh>
        </group>
    );
}

const AdvancedTech3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <ParticleGlobe />
                    <ConnectionLines />
                </Float>
            </Canvas>
        </div>
    );
};

export default AdvancedTech3D;
