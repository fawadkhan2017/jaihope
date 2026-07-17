const CoinNetwork = () => {
    return (
        <section id="network" className="py-24 bg-slate-50" data-name="CoinNetwork" data-file="components/CoinNetwork.js">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8">
            <div className="flex flex-col gap-12 lg:gap-8">
                
                {/* Top Row: Left Header & Right Tokenomics Panel */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-center">
                    
                    {/* Left Column */}
                    <div className="lg:w-[35%] flex flex-col items-center justify-center text-center">
                        <img 
                            src="https://app.trickle.so/storage/app/IMG_20260717_030059_593.jpg" alt="Token Logo" className="w-40 h-40 rounded-full shadow-[0_0_40px_rgba(74,27,217,0.2)] mb-8 border-4 border-[#4a1bd9]/10 object-cover"/>
                        <h2 style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"8px","marginLeft":"0px","fontSize":"38px","color":"rgb(15, 23, 42)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"left","fontWeight":"600","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Powered by Utility.</h2>
                        <h2 style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"24px","marginLeft":"0px","fontSize":"38px","color":"rgb(15, 23, 42)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"600","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Owned by <span className="text-[#4a1bd9]">Community.</span></h2>
                        <p style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"18px","color":"rgb(100, 116, 139)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"500","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-lg text-slate-500 font-medium max-w-sm">A Web3 ecosystem for real rewards and real-world use.</p>
                    </div>
                    
                    {/* Tokenomics Panel */}
                    <div className="lg:w-[65%] w-full">
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 flex flex-col justify-center h-full">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-1.5 h-6 bg-[#4a1bd9] rounded-full"></div>
                                <h3 className="font-bold text-slate-900 tracking-wider">TOKENOMICS</h3>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                {/* Stat 1 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-[#4A1BD91A] flex items-center justify-center text-[#4a1bd9] mb-5">
                                        <div className="icon-database text-2xl"></div>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-700 mb-3">Total Supply</p>
                                    <p className="text-3xl font-extrabold text-slate-900 mb-5">250M</p>
                                    <span className="px-5 py-1.5 bg-[#4a1bd9]/10 text-[#4a1bd9] text-xs font-bold rounded-full w-full max-w-[120px]">Fixed</span>
                                </div>
                                {/* Stat 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-[#4A1BD91A] flex items-center justify-center text-[#4a1bd9] mb-5">
                                        <div className="icon-refresh-cw text-2xl"></div>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-700 mb-3">Circulating Supply</p>
                                    <p className="text-3xl font-extrabold text-slate-900 mb-5">100%</p>
                                    <span className="px-5 py-1.5 bg-[#4a1bd9]/10 text-[#4a1bd9] text-xs font-bold rounded-full w-full max-w-[120px]">In Circulation</span>
                                </div>
                                {/* Stat 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-[#4A1BD91A] flex items-center justify-center text-[#4a1bd9] mb-5">
                                        <div className="icon-lock text-2xl"></div>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-700 mb-3">Max Supply</p>
                                    <p className="text-3xl font-extrabold text-slate-900 mb-5">Fixed</p>
                                    <span className="px-5 py-1.5 bg-[#4a1bd9]/10 text-[#4a1bd9] text-xs font-bold rounded-full w-full max-w-[120px]">No Inflation</span>
                                </div>
                                {/* Stat 4 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-[#4A1BD91A] flex items-center justify-center text-[#4a1bd9] mb-5">
                                        <div className="icon-ban text-2xl"></div>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-700 mb-3">Minting</p>
                                    <p className="text-3xl font-extrabold text-slate-900 mb-5">Disabled</p>
                                    <span className="px-5 py-1.5 bg-[#4a1bd9]/10 text-[#4a1bd9] text-xs font-bold rounded-full w-full max-w-[120px]">Permanently</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 relative group hover:border-[#4a1bd9]/30 transition-colors cursor-default">
                        <div className="w-12 h-12 rounded-xl bg-[#4A1BD91A] flex items-center justify-center text-[#4a1bd9] mb-6">
                            <div className="icon-gift text-2xl"></div>
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-6">Earn</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 mb-8">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Stake</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Invite Friends</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Earn Rewards</li>
                        </ul>
                        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#4a1bd9]/10 flex items-center justify-center text-[#4a1bd9] group-hover:bg-[#4a1bd9] group-hover:text-white transition-colors cursor-pointer">
                            <div className="icon-arrow-right text-base"></div>
                        </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 relative group hover:border-[#4a1bd9]/30 transition-colors cursor-default">
                        <div className="w-12 h-12 rounded-xl bg-[#4A1BD91A] flex items-center justify-center text-[#4a1bd9] mb-6">
                            <div className="icon-credit-card text-2xl"></div>
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-6">Spend</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 mb-8">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Recharge</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Gift Cards</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Merch</li>
                        </ul>
                        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#4a1bd9]/10 flex items-center justify-center text-[#4a1bd9] group-hover:bg-[#4a1bd9] group-hover:text-white transition-colors cursor-pointer">
                            <div className="icon-arrow-right text-base"></div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 relative group hover:border-[#4a1bd9]/30 transition-colors cursor-default">
                        <div className="w-12 h-12 rounded-xl bg-[#4A1BD91A] flex items-center justify-center text-[#4a1bd9] mb-6">
                            <div className="icon-users text-2xl"></div>
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-6">Build</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 mb-8">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Community</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Governance</li>
                        </ul>
                        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#4a1bd9]/10 flex items-center justify-center text-[#4a1bd9] group-hover:bg-[#4a1bd9] group-hover:text-white transition-colors cursor-pointer">
                            <div className="icon-arrow-right text-base"></div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 relative group hover:border-[#4a1bd9]/30 transition-colors cursor-default">
                        <div className="w-12 h-12 rounded-xl bg-[#4A1BD91A] flex items-center justify-center text-[#4a1bd9] mb-6">
                            <div className="icon-shield-check text-2xl"></div>
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-6">Secure</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 mb-8">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Wallet</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Self-Custody</li>
                        </ul>
                        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#4a1bd9]/10 flex items-center justify-center text-[#4a1bd9] group-hover:bg-[#4a1bd9] group-hover:text-white transition-colors cursor-pointer">
                            <div className="icon-arrow-right text-base"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};