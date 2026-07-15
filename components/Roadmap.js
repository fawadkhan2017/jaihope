const Roadmap = () => {
    return (
        <section id="roadmap" className="pt-[1rem] pb-[1rem] bg-white text-slate-900 relative overflow-hidden" data-name="Roadmap" data-file="components/Roadmap.js">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-[60px] relative z-10">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-2 block">The Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold">Advanced Roadmap</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Phase 1 */}
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-sm font-semibold text-slate-500">PHASE 1</span>
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Foundation</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="icon-check text-[var(--primary)]"></div> Protocol Dev
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="icon-check text-[var(--primary)]"></div> Smart Contracts
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="icon-check text-[var(--primary)]"></div> Community Setup
                            </li>
                        </ul>
                    </div>

                    {/* Phase 2 */}
                    <div className="bg-white border border-orange-200 rounded-3xl p-8 relative overflow-hidden shadow-lg ring-1 ring-orange-500/30">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full blur-2xl"></div>
                        <div className="flex justify-between items-center mb-8 relative z-10">
                            <span className="text-sm font-semibold text-slate-500">PHASE 2</span>
                            <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 relative z-10">Expansion</h3>
                        <ul className="space-y-4 mb-8 relative z-10">
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="icon-check text-orange-500"></div> Mobile App
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="icon-check text-orange-500"></div> Staking V1
                            </li>
                            <li className="flex items-center gap-3 text-slate-700">
                                <div className="icon-check text-orange-500"></div> Tier 1 CEX
                            </li>
                        </ul>
                        <div className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-200 relative z-10">
                            Current Phase
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-shadow opacity-70">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-sm font-semibold text-slate-400">PHASE 3</span>
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Ecosystem</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="icon-check text-slate-400"></div> Cross-chain
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="icon-check text-slate-400"></div> Governance
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="icon-check text-slate-400"></div> NFT Market
                            </li>
                        </ul>
                    </div>

                    {/* Phase 4 */}
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-shadow opacity-70">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-sm font-semibold text-slate-400">PHASE 4</span>
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Global Reach</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="icon-check text-slate-400"></div> Institutional APIs
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="icon-check text-slate-400"></div> Metaverse
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="icon-check text-slate-400"></div> SDK Release
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};