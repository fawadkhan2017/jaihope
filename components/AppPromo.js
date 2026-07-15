const AppPromo = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" data-name="AppPromo" data-file="components/AppPromo.js">
            <div className="max-w-7xl mx-auto px-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                    <div>
                        <p className="text-xs font-bold tracking-widest text-[var(--primary)] uppercase mb-4">Designed for everyone</p>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">Your all-in-one<br />Web3 app.</h2>
                        <div className="space-y-8 mb-10">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mt-1">
                                    <div className="icon-circle-check"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Everything in one place</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Community, rewards and wallet in one connected experience.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mt-1">
                                    <div className="icon-smartphone"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Simple and intuitive</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Easy to use for beginners, powerful for everyone.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 mt-1">
                                    <div className="icon-shield-check"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Transparent by default</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">All rewards and transactions verified on-chain.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-nowrap gap-3 w-full sm:w-auto">
    <button className="flex-1 sm:flex-none bg-slate-900 text-white px-3 sm:px-5 py-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 hover:bg-slate-800 transition-colors">
        <div className="icon-play text-xl sm:text-2xl"></div>
        <div className="text-left">
            <div className="text-[9px] sm:text-[10px] text-slate-300">
                GET IT ON
            </div>
            <div className="text-xs sm:text-sm font-semibold">
                Google Play
            </div>
        </div>
    </button>

    <button className="flex-1 sm:flex-none bg-slate-900 text-white px-3 sm:px-5 py-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 hover:bg-slate-800 transition-colors">
        <div className="icon-apple text-xl sm:text-2xl"></div>
        <div className="text-left">
            <div className="text-[9px] sm:text-[10px] text-slate-300">
                Download on the
            </div>
            <div className="text-xs sm:text-sm font-semibold">
                App Store
            </div>
        </div>
    </button>
</div>
                    </div>
                    
                    <div className="flex justify-center items-center relative z-10 w-full max-w-md lg:max-w-none perspective-1000">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--primary)]/20 blur-3xl rounded-full z-0"></div>
                        <div 
                            className="relative mx-auto w-[320px] h-[660px] bg-white rounded-[3rem] border-[12px] border-slate-900 shadow-[20px_30px_60px_-15px_rgba(79,70,229,0.3)] overflow-hidden flex flex-col transition-all duration-700 hover:rotate-0 z-10 scale-90 lg:scale-100"
                            
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none z-30 mix-blend-overlay"></div>
                            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-40 mx-auto z-20"></div>
                            
                            <div className="flex-1 bg-slate-50 pt-12 px-6">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Total Balance</p>
                                        <h2 className="text-3xl font-bold">12,456.78 <span className="text-[var(--primary)] icon-badge-check text-sm"></span></h2>
                                        <p className="text-sm text-slate-500">≈ $2,345.67</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[var(--primary)] icon-scan text-xl"></div>
                                </div>
                                
                                <div className="grid grid-cols-4 gap-2 mb-8">
                                    <div className="flex flex-col items-center gap-1"><div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 icon-arrow-up-right"></div><span className="text-[10px] font-medium">Send</span></div>
                                    <div className="flex flex-col items-center gap-1"><div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 icon-arrow-down-left"></div><span className="text-[10px] font-medium">Receive</span></div>
                                    <div className="flex flex-col items-center gap-1"><div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 icon-arrow-left-right"></div><span className="text-[10px] font-medium">Swap</span></div>
                                    <div className="flex flex-col items-center gap-1"><div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 icon-layers"></div><span className="text-[10px] font-medium">Stake</span></div>
                                </div>
                                
                                <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-sm font-semibold">Community Pulse</h3>
                                        <span className="text-xs text-[var(--primary)] font-medium">View all</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-orange-500 icon-users text-lg mb-1"></div>
                                            <div className="font-bold text-sm">2.46M</div>
                                            <div className="text-[10px] text-green-500">+12.5%</div>
                                        </div>
                                        <div>
                                            <div className="text-green-500 icon-shield text-lg mb-1"></div>
                                            <div className="font-bold text-sm">16,642</div>
                                            <div className="text-[10px] text-green-500">+8.2%</div>
                                        </div>
                                        <div>
                                            <div className="text-[var(--primary)] icon-activity text-lg mb-1"></div>
                                            <div className="font-bold text-sm">450K+</div>
                                            <div className="text-[10px] text-green-500">+15.2%</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-2xl p-4 shadow-sm flex-1">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-sm font-semibold">Recent Activity</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] icon-gift text-sm"></div>
                                                <div>
                                                    <p className="text-xs font-semibold">Referral Reward</p>
                                                    <p className="text-[10px] text-slate-400">2m ago</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-semibold text-green-500">+100.00</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 icon-layers text-sm"></div>
                                                <div>
                                                    <p className="text-xs font-semibold">Stake Reward</p>
                                                    <p className="text-[10px] text-slate-400">1h ago</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-semibold text-green-500">+25.50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white border-t border-slate-100 px-6 py-4 flex justify-between">
                                <div className="flex flex-col items-center gap-1 text-[var(--primary)]"><div className="icon-house text-xl"></div><span className="text-[9px] font-medium">Home</span></div>
                                <div className="flex flex-col items-center gap-1 text-slate-400"><div className="icon-users text-xl"></div><span className="text-[9px] font-medium">Community</span></div>
                                <div className="flex flex-col items-center gap-1 text-slate-400"><div className="icon-gift text-xl"></div><span className="text-[9px] font-medium">Rewards</span></div>
                                <div className="flex flex-col items-center gap-1 text-slate-400"><div className="icon-wallet text-xl"></div><span className="text-[9px] font-medium">Wallet</span></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-3xl p-6 text-white shadow-xl shadow-[var(--primary)]/20">
                            <p className="text-sm font-medium opacity-90 mb-1">Staking Rewards</p>
                            <h3 className="text-3xl font-extrabold mb-1">100,000</h3>
                            <p className="text-xs opacity-80 mb-6">JAIHO</p>
                            <button className="bg-white text-[var(--primary)] w-full py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors flex justify-center items-center gap-2">
                                Stake Now <div className="icon-arrow-right text-sm"></div>
                            </button>
                        </div>
                        
                        <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="font-bold text-slate-900">Daily Check-in</h4>
                                <span className="bg-orange-100 text-[var(--primary)] text-xs font-bold px-2 py-1 rounded-md">Day 5</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                                    <div key={day} className="flex flex-col items-center gap-2">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                                            day < 5 ? 'bg-[var(--primary)] text-white icon-check' :
                                            day === 5 ? 'bg-[var(--primary)] text-white icon-check border-2 border-orange-200' :
                                            'bg-slate-100 text-slate-400 icon-check'
                                        }`}></div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs font-bold text-slate-800">You're on a streak!</p>
                            <p className="text-xs text-slate-500">Keep it going to earn more rewards.</p>
                        </div>
                        
                        <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Referral Reward</h4>
                                <p className="text-xs text-slate-500">You and your friend<br />both earn 100 JAIHO</p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                <div className="icon-users text-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};