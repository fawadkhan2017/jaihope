const Features = () => {
    return (
        <section id="ecosystem" className="pb-[3rem] bg-white" data-name="Features" data-file="components/Features.js">
            <div className="max-w-7xl mx-auto px-[60px]">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-2 block">One Ecosystem. Endless Possibilities</span>
                    <h2 className="text-4xl font-bold text-slate-900">Everything you need, in one ecosystem.</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Feature 1 */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-[var(--primary)] icon-users text-3xl mb-6"></div>
                        <h3 className="text-xl font-bold mb-3">Community</h3>
                        <p className="text-slate-600 mb-6 line-clamp-3">Join discussions, connect and participate in a vibrant community where your voice matters and actions are rewarded.</p>
                        <a href="#" className="text-[var(--primary)] font-medium flex items-center gap-2 hover:underline">Explore Community <div className="icon-arrow-right text-sm"></div></a>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 icon-gift text-3xl mb-6"></div>
                        <h3 className="text-xl font-bold mb-3">Rewards</h3>
                        <p className="text-slate-600 mb-6 line-clamp-3">Earn rewards through daily activities, referrals and special events. Watch your balance grow as you participate.</p>
                        <a href="#" className="text-[var(--primary)] font-medium flex items-center gap-2 hover:underline">Explore Rewards <div className="icon-arrow-right text-sm"></div></a>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-500 icon-wallet text-3xl mb-6"></div>
                        <h3 className="text-xl font-bold mb-3">Wallet</h3>
                        <p className="text-slate-600 mb-6 line-clamp-3">Send, receive, swap, stake and manage your assets securely all in one place with military-grade encryption.</p>
                        <a href="#" className="text-[var(--primary)] font-medium flex items-center gap-2 hover:underline">Explore Wallet <div className="icon-arrow-right text-sm"></div></a>
                    </div>
                </div>
                
                <div className="text-center">
                    <button className="text-[var(--primary)] font-semibold flex items-center gap-2 mx-auto px-6 py-3 rounded-full border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                        Explore all features <div className="icon-arrow-right text-sm"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};