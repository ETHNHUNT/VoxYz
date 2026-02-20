'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
    LucideLogIn,
    LucideMenu,
    LucideX,
    LucideChevronDown,
    LucideRadioTower,
    LucideTarget,
    LucideZap,
} from 'lucide-react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm border-b-[3px] border-gray-200/50 py-2' : 'bg-transparent py-6 border-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group select-none">
                    <div className="relative flex items-center justify-center w-14 h-14 bg-white border-[3px] border-ink shadow-[3px_3px_0px_0px_#2d2d2d] transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-[5px_5px_0px_0px_#2d2d2d]" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}>
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-[#0e172c]">
                            <img src="/public-logo/voxyz-avatar.svg" alt="VoxYZ logo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="relative">
                        <span className="font-heading font-black text-3xl tracking-tighter text-ink group-hover:text-secondary transition-colors">VoxYZ</span>
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 60 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3C15 5 45 -1 58 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </Link>
                <div className="flex items-center gap-6 text-vox-dark font-display text-lg tracking-wide">
                    <Link href="/#products" className="hidden md:flex font-body text-lg font-bold hover:text-accent hover:underline decoration-wavy decoration-2 underline-offset-4">
                    Products
                </Link>
                <Link href="/insights" className="hidden md:flex font-body text-lg font-bold hover:text-accent hover:underline decoration-wavy decoration-2 underline-offset-4">
                    Insights
                </Link>
                    <div className="relative hidden md:flex"
                        onMouseEnter={() => setIsExploreOpen(true)}
                        onMouseLeave={() => setIsExploreOpen(false)}
                    >
                        <button
                            className="font-body text-lg font-bold hover:text-accent hover:underline decoration-wavy decoration-2 underline-offset-4 flex items-center gap-1"
                        >
                            Explore
                            <LucideChevronDown className="w-4 h-4" />
                        </button>
                        {/* dropdown content */}
                        {isExploreOpen && (
                            <div className="absolute top-full mt-2 w-60 bg-white border-2 border-ink rounded-lg shadow-hard">
                                <ul className="flex flex-col">
                                    <li>
                                        <Link href="/stage" className="flex items-start gap-3 p-3 hover:bg-cream/50">
                                            <div className="w-8 h-8 flex items-center justify-center bg-sunshine/20 rounded">
                                                <LucideRadioTower className="w-5 h-5 text-ink" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-heading font-bold">Stage</span>
                                                <span className="text-xs text-ink/60">Live agent activity feed</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/radar" className="flex items-start gap-3 p-3 hover:bg-cream/50">
                                            <div className="w-8 h-8 flex items-center justify-center bg-sunshine/20 rounded">
                                                <LucideTarget className="w-5 h-5 text-ink" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-heading font-bold">Radar</span>
                                                <span className="text-xs text-ink/60">Ideas we are watching and building</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/swarm" className="flex items-start gap-3 p-3 hover:bg-cream/50">
                                            <div className="w-8 h-8 flex items-center justify-center bg-sunshine/20 rounded">
                                                <LucideZap className="w-5 h-5 text-ink" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-heading font-bold flex items-center">
                                                    Swarm
                                                    <span className="ml-2 bg-purple-100 text-purple-800 text-xs font-bold px-2 py-0.5 rounded-full">
                                                        Soon
                                                    </span>
                                                </span>
                                                <span className="text-xs text-ink/60">Multi-agent task orchestration</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                <Link href="/about" className="hidden md:flex font-body text-lg font-bold hover:text-accent hover:underline decoration-wavy decoration-2 underline-offset-4">
                    About
                </Link>
                {/* sign in as button with no routing */}
                <button className="hidden md:flex font-body text-sm font-bold text-ink/60 flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-ink/5">
                    <LucideLogIn className="w-4 h-4" />
                    <span>Sign In</span>
                </button>
                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden p-2 text-vox-dark ml-auto"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <LucideX className="h-6 w-6" />
                        ) : (
                            <LucideMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-cream border-b-2 border-vox-dark shadow-sketch p-6 flex flex-col gap-6 font-display text-2xl animate-fade-in z-40">
                    <Link href="/#products" onClick={() => setIsMenuOpen(false)} className="hover:text-coral">Products</Link>
                    <Link href="/insights" onClick={() => setIsMenuOpen(false)} className="hover:text-coral">Insights</Link>
                    <button
                        onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
                        className="hover:text-coral flex items-center gap-1"
                    >
                        Explore
                        <LucideChevronDown className="w-4 h-4" />
                    </button>
                    {isMobileExploreOpen && (
                        <div className="flex flex-col pl-4 mt-2 space-y-2">
                            <Link href="/stage" onClick={() => setIsMenuOpen(false)} className="hover:text-coral">
                                Stage
                            </Link>
                            <Link href="/radar" onClick={() => setIsMenuOpen(false)} className="hover:text-coral">
                                Radar
                            </Link>
                            <Link href="/swarm" onClick={() => setIsMenuOpen(false)} className="hover:text-coral">
                                Swarm <span className="ml-1 text-purple-600 text-xs">Soon</span>
                            </Link>
                        </div>
                    )}
                    <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-coral">About</Link>
                    <div className="h-px bg-gray-200 w-full my-2"></div>
                    <button onClick={() => setIsMenuOpen(false)} className="text-left font-bold hover:text-coral w-full">
                        Sign In →
                    </button>
                </div>
            )}
        </header>
    );
}
