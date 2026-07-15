const AppPromo = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" data-name="AppPromo" data-file="components/AppPromo.js">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-[60px]">
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
    className="relative mx-auto w-[320px]   overflow-hidden transition-all duration-700 hover:rotate-0 z-10 scale-90 lg:scale-100"
>
    {/* iPhone Dynamic Island */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 rounded-b-3xl z-20"></div>

    {/* App Screenshot */}
    <img
        src="assets/img/app-screen2.png"
        alt="JaihoPe App"
        className="w-full h-full object-cover"
    />

    {/* Gloss Effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none z-30"></div>
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