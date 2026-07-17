const Hero = () => {
    return (
        <section id="home" className="pt-[6rem] pb-20 overflow-hidden relative" data-name="Hero" data-file="components/Hero.js">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-[60px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[var(--primary)] uppercase mb-6 bg-[var(--primary)]/10 px-4 py-2 rounded-full">
                            Community • Rewards • Wallet
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                            One ecosystem for <br/>
                            <span className="text-[var(--primary)]">community, rewards</span><br/>
                            and <span className="text-[var(--primary)]">ownership.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                            Participate, earn rewards and manage your<br></br> digital assets through one simple experience.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <button className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                                Explore Ecosystem <div className="icon-arrow-right text-sm"></div>
                            </button>
                            <button className="w-full sm:w-auto text-[var(--primary)] font-medium px-8 py-3.5 flex items-center justify-center gap-2 hover:bg-[var(--primary)]/5 rounded-lg transition-colors">
                                Read Whitepaper <div className="icon-arrow-right text-sm"></div>
                            </button>
                        </div>
                        
                        <div className="border-t border-slate-200 pt-8">
                            <p className="text-sm font-medium text-slate-500 mb-4">Built on a secure and transparent blockchain</p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                                <div className="flex items-center gap-2"><div className="icon-shield-check text-[var(--primary)] text-xl"></div><span className="font-semibold text-sm">Jaiho Chain</span></div>
                                <div className="flex items-center gap-2"><div className="icon-badge-check text-[var(--primary)] text-xl"></div><span className="font-semibold text-sm">Audited</span></div>
                                <div className="flex items-center gap-2"><div className="icon-git-branch text-[var(--primary)] text-xl"></div><span className="font-semibold text-sm">On-chain</span></div>
                                <div className="flex items-center gap-2"><div className="icon-lock text-[var(--primary)] text-xl"></div><span className="font-semibold text-sm">Secure</span></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Hero Image / Phone Mockup */}
                    <div className="flex-1 relative z-10 w-full max-w-md lg:max-w-none perspective-1000">
    <div
        className="relative mx-auto w-[320px] h-[660px] rounded-[3rem] overflow-hidden shadow-[20px_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700 hover:rotate-0"
        style={{
            transform: "rotateY(-18deg) rotateX(3deg) rotateZ(6deg)"
        }}
    >
        <img
            src="../assets/img/app-screen.png"
            alt="JaihoPe App"
            className="w-full h-full"
        />
    </div>
</div>
                    
                </div>
            </div>
            
            {/* Stats Row */}
            <div className="max-w-7xl mx-auto px-[60px] mt-24">
                <div className="text-center mb-8"><span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase">Trusted by a growing community</span></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] icon-users text-2xl"></div>
                        <div>
                            <h4 className="text-2xl font-bold">18,642+</h4>
                            <p className="text-sm text-slate-500">Community Members</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 icon-gift text-2xl"></div>
                        <div>
                            <h4 className="text-2xl font-bold">2.45M</h4>
                            <p className="text-sm text-slate-500">Rewards Distributed</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 icon-arrow-left-right text-2xl"></div>
                        <div>
                            <h4 className="text-2xl font-bold">450K+</h4>
                            <p className="text-sm text-slate-500">On-chain Transactions</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 icon-shield-check text-2xl"></div>
                        <div>
                            <h4 className="text-2xl font-bold">5,210</h4>
                            <p className="text-sm text-slate-500">Coin Holders</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};