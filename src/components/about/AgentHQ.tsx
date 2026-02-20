'use client';

import { useState, Suspense } from 'react';
import { Agent, agents } from '../../data/agents';
import { AgentAvatar } from '../shared/AgentAvatar';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows, Html } from '@react-three/drei';

function AgentModel({ agent, isSelected, onClick, position }: { agent: Agent, isSelected: boolean, onClick: () => void, position: [number, number, number] }) {
    const gltfUrl = `/3d/${agent.id === 'observer' ? 'observer' : agent.id}.glb`;
    const { scene } = useGLTF(gltfUrl);

    return (
        <group position={position} onClick={(e) => { e.stopPropagation(); onClick(); }}>
            <primitive
                object={scene.clone()}
                scale={isSelected ? 0.8 : 0.6}
                position={[0, isSelected ? 0.5 : 0, 0]}
                rotation={[0, Math.PI + Math.PI / 4, 0]}
            />
            {/* Base Ring */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
                <ringGeometry args={[1.2, 1.4, 32]} />
                <meshBasicMaterial color={isSelected ? agent.color : '#ffffff'} opacity={isSelected ? 0.8 : 0.1} transparent />
            </mesh>

            {/* HTML Annotation Label */}
            <Html position={[0, isSelected ? 2.5 : 1.8, 0]} center zIndexRange={[100, 0]}>
                <div onClick={(e) => { e.stopPropagation(); onClick(); }} className={`cursor-pointer transition-all duration-300 text-[10px] font-bold px-2 py-0.5 rounded outline outline-1 shadow-sm mb-2 uppercase tracking-wider whitespace-nowrap ${isSelected ? 'bg-white text-black scale-110 shadow-sketch-sm' : 'bg-black/70 text-white hover:bg-black'}`} style={{ outlineColor: isSelected ? '#111' : agent.color, color: isSelected ? '#111' : agent.color }}>
                    {agent.name}
                </div>
                {isSelected && (
                    <div className="absolute top-8 left-1/2 w-40 bg-white text-vox-dark p-2 rounded-lg text-xs shadow-lg hidden md:block border-2 border-vox-dark font-body font-medium z-50 pointer-events-none -translate-x-1/2">
                        {agent.latestMessage}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l-2 border-t-2 border-vox-dark rotate-45"></div>
                    </div>
                )}
            </Html>
        </group>
    );
}

// Removed preload to prevent SSR crashes. Model loading is fast enough locally.

export default function AgentHQ() {
    const [selectedAgent, setSelectedAgent] = useState(agents[0]);
    const [showDossier, setShowDossier] = useState(false);

    return (
        <div className="w-full max-w-5xl mx-auto mb-20 relative px-4 sm:px-6">
            <div className="w-full h-[400px] md:h-[500px] bg-[#0a0a0a] rounded-t-2xl border-x-2 border-t-2 border-vox-dark relative overflow-hidden flex shadow-sketch font-mono">

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                {/* Header Ribbon */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded flex items-center gap-3 z-20">
                    <span className="text-white text-[10px] font-bold tracking-widest uppercase">VOXYZ AGENT HQ</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-vox-green text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-vox-green rounded-full animate-pulse"></span>
                        UNIT: {selectedAgent.name}
                    </span>
                </div>

                {/* Scene Area */}
                <div className="relative w-full h-full flex items-center justify-center z-10">
                    <Suspense fallback={
                        <div className="flex flex-col items-center justify-center text-vox-yellow animate-pulse font-mono text-sm tracking-widest gap-4">
                            <div className="w-12 h-12 border-4 border-vox-yellow border-t-transparent rounded-full animate-spin"></div>
                            INITIALIZING 3D VOXEL HQ...
                        </div>
                    }>
                        <Canvas camera={{ position: [0, 8, 12], fov: 40 }} className="w-full h-full cursor-grab active:cursor-grabbing">
                            <ambientLight intensity={0.6} />
                            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
                            <Environment preset="city" />

                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                minPolarAngle={Math.PI / 3}
                                maxPolarAngle={Math.PI / 2.5}
                                autoRotate
                                autoRotateSpeed={0.5}
                            />

                            <group position={[0, -1, 0]}>
                                {agents.map((agent, i) => {
                                    const angle = (i * Math.PI) / 3;
                                    const radius = 4;
                                    const x = Math.sin(angle) * radius;
                                    const z = Math.cos(angle) * radius;

                                    return (
                                        <AgentModel
                                            key={agent.id}
                                            agent={agent}
                                            position={[x, 0, z]}
                                            isSelected={selectedAgent.id === agent.id}
                                            onClick={() => setSelectedAgent(agent)}
                                        />
                                    );
                                })}
                                <ContactShadows resolution={512} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />
                            </group>
                        </Canvas>
                    </Suspense>
                </div>

                {/* Dossier Overlay */}
                {showDossier && (
                    <div className="absolute inset-4 bg-vox-dark/95 backdrop-blur-xl border border-white/10 rounded-xl z-30 flex flex-col p-6 text-white animate-fade-in shadow-2xl">
                        <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/10">
                            <div className="flex items-center gap-4">
                                <AgentAvatar src={selectedAgent.avatar} name={selectedAgent.name} size={64} className="border-white/20" />
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-2xl font-bold uppercase tracking-widest">{selectedAgent.name}</h3>
                                        <span className="px-2 py-0.5 bg-white/10 border border-white/20 text-[10px] font-bold rounded">LV.1</span>
                                    </div>
                                    <p className="text-gray-400 text-sm font-mono">{selectedAgent.model} <span className="text-gray-600 px-2">{`//`}</span> {selectedAgent.role}</p>
                                </div>
                            </div>
                            <button onClick={() => setShowDossier(false)} className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2 rounded-lg border border-white/10">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 flex-1 overflow-y-auto pr-2">
                            <div>
                                <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4 flex items-center gap-2"><div className="w-1 h-1 bg-gray-500 rounded-full"></div> Stats</h4>
                                <div className="grid grid-cols-4 gap-2 mb-8 text-center bg-white/5 border border-white/10 rounded-lg p-2">
                                    <div className="p-2 border-r border-white/10 last:border-0"><div className="text-[10px] text-coral font-bold mb-1">WIS</div><div className="font-bold text-lg">{Math.floor(Math.random() * 10) + 10}</div></div>
                                    <div className="p-2 border-r border-white/10 last:border-0"><div className="text-[10px] text-blue-400 font-bold mb-1">TRU</div><div className="font-bold text-lg">{Math.floor(Math.random() * 10) + 10}</div></div>
                                    <div className="p-2 border-r border-white/10 last:border-0"><div className="text-[10px] text-green-400 font-bold mb-1">SPD</div><div className="font-bold text-lg">{Math.floor(Math.random() * 10) + 10}</div></div>
                                    <div className="p-2"><div className="text-[10px] text-purple-400 font-bold mb-1">CRE</div><div className="font-bold text-lg">{Math.floor(Math.random() * 10) + 10}</div></div>
                                </div>

                                <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4 flex items-center gap-2"><div className="w-1 h-1 bg-gray-500 rounded-full"></div> Skills</h4>
                                <ul className="space-y-3 text-sm text-gray-300 font-body">
                                    <li className="flex items-start gap-3"><span className="text-vox-green font-bold text-lg leading-none translate-y-[2px]">✓</span> Unrestricted web access & semantic search</li>
                                    <li className="flex items-start gap-3"><span className="text-vox-green font-bold text-lg leading-none translate-y-[2px]">✓</span> GitHub repository clone & direct commit edit</li>
                                    <li className="flex items-start gap-3"><span className="text-vox-green font-bold text-lg leading-none translate-y-[2px]">✓</span> Vector DB write operations</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-[10px] text-red-500 uppercase tracking-widest font-bold mb-4 flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full"></div> Sealed Abilities (Hard Bans)</h4>
                                <ul className="space-y-3 text-sm text-gray-300 mb-8 font-body bg-red-950/20 border border-red-500/20 rounded-lg p-4">
                                    <li className="flex items-start gap-3"><span className="text-red-500 font-bold text-sm translate-y-[1px]">✕</span> <span className="flex-1">Social media broadcasting (Requires Xalt handshake to publish)</span></li>
                                    <li className="flex items-start gap-3"><span className="text-red-500 font-bold text-sm translate-y-[1px]">✕</span> <span className="flex-1">Direct production Vercel deployment without review</span></li>
                                    <li className="flex items-start gap-3"><span className="text-red-500 font-bold text-sm translate-y-[1px]">✕</span> <span className="flex-1">Adjusting global budget constraints</span></li>
                                </ul>

                                <h4 className="text-[10px] text-amber-500 uppercase tracking-widest font-bold mb-4 flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Escalation Protocol</h4>
                                <ul className="space-y-3 text-sm text-gray-300 font-body bg-amber-950/20 border border-amber-500/20 rounded-lg p-4">
                                    <li className="flex items-start gap-3"><span className="text-amber-500 font-bold">!</span> If failure 3x → Terminate thread & Alert Minion</li>
                                    <li className="flex items-start gap-3"><span className="text-amber-500 font-bold">!</span> If API error → Exponential backoff + Memory cleanup</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Controls Bar */}
            <div className="bg-white border-x-2 border-b-2 border-t border-t-gray-200 border-x-vox-dark border-b-vox-dark rounded-b-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sketch w-full relative -top-20 -mb-20">
                <div className="flex flex-wrap text-[10px] font-mono tracking-widest uppercase font-bold text-gray-500 gap-3 items-center justify-center">
                    <span className="hidden sm:inline">SELECT AGENT</span>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <span className="text-vox-dark bg-gray-100 px-2 py-1.5 rounded border border-gray-200">ARROWS/CLICK TO MOVE</span>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <button
                        className="text-vox-dark bg-vox-yellow px-3 py-1.5 rounded border-2 border-vox-dark shadow-sm cursor-pointer hover:bg-yellow-400 hover:-translate-y-[1px] transition-all"
                        onClick={() => setShowDossier(!showDossier)}
                    >
                        DOSSIER
                    </button>
                </div>

                <div className="flex gap-2 bg-gray-50 p-1.5 rounded-lg border border-gray-200 h-10 overflow-x-auto custom-scrollbar">
                    {agents.map((a) => (
                        <button key={a.id} onClick={() => setSelectedAgent(a)} className={`relative w-7 h-7 shrink-0 rounded border-2 transition-all ${selectedAgent.id === a.id ? 'border-vox-dark scale-110 shadow-sketch-sm' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                            <AgentAvatar src={a.avatar} name={a.name} size={24} className="absolute inset-0" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
