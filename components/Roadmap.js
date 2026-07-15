const Roadmap = () => {
    return (
        <section id="roadmap" className="pt-[1rem] pb-[1rem] bg-white text-slate-900 relative overflow-hidden" data-name="Roadmap" data-file="components/Roadmap.js">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-[60px] relative z-10">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-2 block">The Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold">Advanced Roadmap</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 relative">

{/* Timeline Line */}
<div className="hidden xl:block absolute top-12 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-orange-400 to-slate-300 z-0"></div>

{/* Phase 1 */}
<div className="relative z-10 group">
    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full">

        <div className="flex justify-between items-center mb-6">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-xl border-4 border-white shadow-lg">
                1
            </div>

            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                Completed
            </span>
        </div>

        <h3 className="text-2xl font-bold mb-6">
            Foundation
        </h3>

        <ul className="space-y-4">
            <li className="flex items-center gap-3">
                <div className="icon-check-circle text-blue-500"></div>
                Protocol Development
            </li>

            <li className="flex items-center gap-3">
                <div className="icon-check-circle text-blue-500"></div>
                Smart Contracts
            </li>

            <li className="flex items-center gap-3">
                <div className="icon-check-circle text-blue-500"></div>
                Community Launch
            </li>
        </ul>
    </div>
</div>

{/* Phase 2 */}
<div className="relative z-10 group">
    <div className="rounded-3xl p-[2px] bg-gradient-to-br from-orange-400 to-[var(--primary)] shadow-2xl">

        <div className="bg-white rounded-3xl h-full p-8">

            <div className="flex justify-between items-center mb-6">

                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-500 text-xl border-4 border-white shadow-lg">
                    2
                </div>

                <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
                    Current
                </span>

            </div>

            <h3 className="text-2xl font-bold mb-6">
                Expansion
            </h3>

            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <div className="icon-loader-circle text-orange-500"></div>
                    Mobile Application
                </li>

                <li className="flex items-center gap-3">
                    <div className="icon-loader-circle text-orange-500"></div>
                    Staking V1
                </li>

                <li className="flex items-center gap-3">
                    <div className="icon-loader-circle text-orange-500"></div>
                    Tier-1 Exchange Listing
                </li>
            </ul>

        </div>
    </div>
</div>

{/* Phase 3 */}
<div className="relative z-10 group">
    <div className="bg-slate-50 rounded-3xl border border-slate-200 hover:border-[var(--primary)] transition-all duration-500 p-8 h-full">

        <div className="flex justify-between items-center mb-6">

            <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xl">
                3
            </div>

            <span className="bg-slate-200 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                Upcoming
            </span>

        </div>

        <h3 className="text-2xl font-bold mb-6">
            Ecosystem
        </h3>

        <ul className="space-y-4">
            <li className="flex items-center gap-3">
                <div className="icon-circle text-slate-400"></div>
                Cross-chain Bridge
            </li>

            <li className="flex items-center gap-3">
                <div className="icon-circle text-slate-400"></div>
                DAO Governance
            </li>

            <li className="flex items-center gap-3">
                <div className="icon-circle text-slate-400"></div>
                NFT Marketplace
            </li>
        </ul>

    </div>
</div>

{/* Phase 4 */}
<div className="relative z-10 group">
    <div className="bg-slate-50 rounded-3xl border border-slate-200 hover:border-[var(--primary)] transition-all duration-500 p-8 h-full">

        <div className="flex justify-between items-center mb-6">

            <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xl">
                4
            </div>

            <span className="bg-slate-200 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                Future
            </span>

        </div>

        <h3 className="text-2xl font-bold mb-6">
            Global Reach
        </h3>

        <ul className="space-y-4">
            <li className="flex items-center gap-3">
                <div className="icon-circle text-slate-400"></div>
                Institutional APIs
            </li>

            <li className="flex items-center gap-3">
                <div className="icon-circle text-slate-400"></div>
                Metaverse Integration
            </li>

            <li className="flex items-center gap-3">
                <div className="icon-circle text-slate-400"></div>
                SDK Release
            </li>
        </ul>

    </div>
</div>

</div>
            </div>
        </section>
    );
};