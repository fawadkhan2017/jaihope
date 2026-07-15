const CoinNetwork = () => {
    return (
        <section id="network" className="pt-[2rem] pb-[1rem] bg-white" data-name="CoinNetwork" data-file="components/CoinNetwork.js">
            <div className="max-w-7xl mx-auto px-[60px]">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
                    
                    {/* Left Column */}
                    <div className="lg:w-1/3 flex-shrink-0">
                        <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-4 block">THE COIN NETWORK</span>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">The utility layer<br/>of the ecosystem.</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            The Coin Network powers rewards, participation and utility across the entire ecosystem with transparency and security.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <button className="w-full sm:w-auto bg-[var(--primary)] text-white px-3 py-3 rounded-lg font-bold hover:bg-[var(--primary-hover)] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[var(--primary)]/20">
                                View Token Details <div className="icon-arrow-right text-sm"></div>
                            </button>
                            <button className="w-full sm:w-auto text-[var(--primary)] font-bold px-3 py-3 flex items-center justify-center gap-2 hover:bg-slate-50 rounded-lg transition-colors">
                                View Explorer <div className="icon-arrow-right text-sm"></div>
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Column / Large Card */}
                    <div className="lg:w-2/3 w-full">
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                            {/* Top Section */}
                            <div className="p-8 flex flex-col md:flex-row gap-8 border-b border-slate-100 items-center md:items-start">
                                {/* Token Logo */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-white text-5xl mb-4 shadow-lg shadow-orange-500/30">
                                        <div className="icon-hand-metal"></div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">COIN NETWORK</h3>
                                    <p className="text-xs text-slate-500 mt-1">Utility • Governance • Rewards</p>
                                </div>
                                
                                {/* Supply Stats */}
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-4 md:mt-0">
                                    <div>
                                        <p className="text-xs font-semibold text-slate-500 mb-1">Total Supply</p>
                                        <p className="text-2xl font-bold text-slate-900 mb-1">250,000,000</p>
                                        <p className="text-xs text-slate-400">Fixed</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-500 mb-1">Circulating Supply</p>
                                        <p className="text-2xl font-bold text-slate-900 mb-1">250,000,000</p>
                                        <p className="text-xs text-slate-400">100%</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-500 mb-1">Token Holders</p>
                                        <p className="text-2xl font-bold text-slate-900 mb-1">5,210+</p>
                                        <p className="text-xs text-slate-400">On-chain</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Token Utility Features */}
                            <div className="p-8">
                                <p className="text-xs font-bold text-slate-900 mb-6">Token Utility</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                                    <div className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md hover:border-slate-200 transition-all cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[var(--primary)] mb-3">
                                            <div className="icon-users text-xl"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-700">Community<br/>Rewards</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md hover:border-slate-200 transition-all cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-500 mb-3">
                                            <div className="icon-gift text-xl"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-700">Weekly<br/>Prize Pools</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md hover:border-slate-200 transition-all cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-500 mb-3">
                                            <div className="icon-user-plus text-xl"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-700">Referral<br/>Rewards</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md hover:border-slate-200 transition-all cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-500 mb-3">
                                            <div className="icon-layers text-xl"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-700">Staking<br/>Rewards</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md hover:border-slate-200 transition-all cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-green-500 mb-3">
                                            <div className="icon-wallet text-xl"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-700">Payments &<br/>Utilities</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md hover:border-slate-200 transition-all cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-rose-500 mb-3">
                                            <div className="icon-shopping-bag text-xl"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-700">Merchandise<br/>& More</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Row - Features */}
                <div className="bg-slate-50 rounded-2xl p-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--primary)] flex-shrink-0 shadow-sm">
                            <div className="icon-shield-check text-xl"></div>
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--primary)] text-sm mb-1">Secure by design</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Smart contracts audited and infrastructure secured.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--primary)] flex-shrink-0 shadow-sm">
                            <div className="icon-link text-xl"></div>
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--primary)] text-sm mb-1">On-chain transparency</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">All key actions and rewards verified on-chain.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--primary)] flex-shrink-0 shadow-sm">
                            <div className="icon-users text-xl"></div>
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--primary)] text-sm mb-1">Community first</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Built for the community, governed by the community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};