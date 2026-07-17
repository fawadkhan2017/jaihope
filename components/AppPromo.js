function AppPromo() {
    return (
        <section id="app-promo" className="py-24 bg-white relative overflow-hidden" data-name="AppPromo">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-12">
                    
                    {/* Left Column: Features */}
                    <div className="flex-1 max-w-xl lg:max-w-sm xl:max-w-md w-full order-2 lg:order-1">
                        <div className="text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-4">
                            Designed for everyone
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Your all-in-one <br/>
                            <span className="text-[var(--primary)]">Web3</span> app.
                        </h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Everything you need. Community, rewards and wallet — all in one place.
                        </p>

                        <div className="space-y-8 mb-10">
                            {/* Feature 1 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                                    <div className="icon-circle-check text-2xl"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Everything in one place</h3>
                                    <p className="text-slate-600">Community, rewards and wallet in one connected experience.</p>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                                    <div className="icon-smartphone text-2xl"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Simple and intuitive</h3>
                                    <p className="text-slate-600">Easy to use for beginners, powerful for everyone.</p>
                                </div>
                            </div>
                            {/* Feature 3 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                                    <div className="icon-shield-check text-2xl"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Transparent by default</h3>
                                    <p className="text-slate-600">All rewards and transactions verified on-chain.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 bg-slate-900 text-white px-2 py-3 rounded-xl hover:bg-slate-800 transition-colors">
                                <i className="fa-brands fa-google-play text-2xl"></i>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-300">Get it on</div>
                                    <div className="text-sm font-semibold">Google Play</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors">
                                <i className="fa-brands fa-apple text-2xl"></i>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-300">Download on the</div>
                                    <div className="text-sm font-semibold">App Store</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Center Column: App Mockup */}
                    <div className="flex-1 flex justify-center w-full max-w-sm lg:max-w-[320px] xl:max-w-sm shrink-0 order-1 lg:order-2">
                        <img
                            src="../assets/img/app-screen2.png"
                            alt="JaihoPe App Interface"
                            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right Column: Stats Ecosystem */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-sm xl:max-w-md bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 order-3">
                        <div className="text-xs font-bold tracking-widest text-[var(--primary)] uppercase mb-2">
                            Live Ecosystem
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Ecosystem at a Glance</h3>
                        <p className="text-slate-500 text-sm mb-8">Real-time stats from the JaiHo ecosystem</p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {/* Stat 1 */}
                            <div className="bg-slate-50/50 rounded-2xl p-5 text-center border border-slate-100 hover:border-[var(--primary)]/30 transition-colors">
                                <div className="w-10 h-10 mx-auto bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mb-4">
                                    <div className="icon-database text-xl"></div>
                                </div>
                                <div className="text-xs text-slate-600 font-medium mb-2">Total Staked</div>
                                <div className="text-xl sm:text-2xl xl:text-3xl font-bold text-[var(--primary)] mb-1">125.4M</div>
                                <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">JAIHO</div>
                            </div>
                            {/* Stat 2 */}
                            <div className="bg-slate-50/50 rounded-2xl p-5 text-center border border-slate-100 hover:border-[var(--primary)]/30 transition-colors">
                                <div className="w-10 h-10 mx-auto bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mb-4">
                                    <div className="icon-chart-line text-xl"></div>
                                </div>
                                <div className="text-xs text-slate-600 font-medium mb-2">Buyback Completed</div>
                                <div className="text-xl sm:text-2xl xl:text-3xl font-bold text-[var(--primary)] mb-1">12.8M</div>
                                <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">JAIHO</div>
                            </div>
                            {/* Stat 3 */}
                            <div className="bg-slate-50/50 rounded-2xl p-5 text-center border border-slate-100 hover:border-[var(--primary)]/30 transition-colors">
                                <div className="w-10 h-10 mx-auto bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mb-4">
                                    <div className="icon-gift text-xl"></div>
                                </div>
                                <div className="text-xs text-slate-600 font-medium mb-2">Today's Prize Pool</div>
                                <div className="text-xl sm:text-2xl xl:text-3xl font-bold text-[var(--primary)] mb-1">85,000</div>
                                <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">JAIHO</div>
                            </div>
                            {/* Stat 4 */}
                            <div className="bg-slate-50/50 rounded-2xl p-5 text-center border border-slate-100 hover:border-[var(--primary)]/30 transition-colors">
                                <div className="w-10 h-10 mx-auto bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mb-4">
                                    <div className="icon-users text-xl"></div>
                                </div>
                                <div className="text-xs text-slate-600 font-medium mb-2">Active Stakers</div>
                                <div className="text-xl sm:text-2xl xl:text-3xl font-bold text-[var(--primary)] mb-1">3,210+</div>
                                <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">JAIHO</div>
                            </div>
                        </div>

                        <button className="w-full bg-[var(--primary)] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary)]/20">
                            Explore Ecosystem <div className="icon-arrow-right"></div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}