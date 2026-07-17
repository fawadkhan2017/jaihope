const Featured = () => {
    const logos = [
        { name: 'DexScreener', url: '../assets/img/DexScreener.svg' },
        { name: 'Dextools', url: '../assets/img/Dextools.svg' },
        { name: 'Birdeye', url: '../assets/img/Birdeye.svg' },
        { name: 'Coinscope', url: '../assets/img/Coinscope.jpg' },
        { name: 'Coincatapult', url: '../assets/img/Coincatapult.jpg' },
        { name: 'Coingem', url: '../assets/img/Coingem.jpg' },
        { name: 'GeckoTerminal', url: '../assets/img/GeckoTerminal.jpg' },
        { name: 'CoinMarketCap', url: '../assets/img/CoinMarketCap.svg' },
        { name: 'CoinGecko', url: '../assets/img/CoinGecko.svg' },
        { name: 'Solana', url: '../assets/img/Solana.svg' }
    ];

    const doubledLogos = [...logos, ...logos];

    return (
        <section className="py-8 bg-slate-50 border-t border-b border-slate-200 overflow-hidden" data-name="Featured" data-file="components/Featured.js">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-[60px] mb-12">
                <h2 className="text-3xl font-bold text-center text-[#0f1219]">Featured at</h2>
            </div>
            
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex items-center justify-center md:justify-start gap-8 animate-scroll w-max">
                    {doubledLogos.map((logo, index) => (
                        <div
                        key={index}
                        className="group bg-white rounded-full px-8 py-4 shadow-sm border border-slate-100 flex items-center justify-center w-[220px] h-[80px] flex-shrink-0 hover:shadow-md transition-all duration-300"
                    >
                        <img
                            src={logo.url}
                            alt={logo.name}
                            className="max-h-[55px] w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    ))}
                </div>
            </div>
            
            <div className="max-w-5xl mx-auto px-5 sm:px-6 mt-24">
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-16 text-center relative overflow-hidden">
                    
                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary)] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                        <div className="icon-users text-lg"></div>
                        Join the Community
                    </div>

                    {/* Heading */}
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Be part of something <span className="text-[var(--primary)]">bigger.</span>
                    </h3>

                    {/* Subheading */}
                    <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto">
                        Join a growing community building, earning and shaping the future together.
                    </p>

                    {/* Avatars */}
                    <div className="flex flex-wrap items-center justify-center mb-12">
                        <div className="flex -space-x-4">
                            <img src="../assets/img/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces" alt="Member" className="w-16 h-16 rounded-full border-4 border-white shadow-sm relative z-50 object-cover" />
                            <img src="../assets/img/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Member" className="w-16 h-16 rounded-full border-4 border-white shadow-sm relative z-40 object-cover" />
                            <img src="../assets/img/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Member" className="w-16 h-16 rounded-full border-4 border-white shadow-sm relative z-30 object-cover" />
                            <img src="../assets/img/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces" alt="Member" className="w-16 h-16 rounded-full border-4 border-white shadow-sm relative z-20 object-cover" />
                            <img src="../assets/img/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" alt="Member" className="w-16 h-16 rounded-full border-4 border-white shadow-sm relative z-10 object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 bg-white flex flex-col items-center justify-center relative z-0 ml-4">
                            <span className="text-[var(--primary)] font-bold text-sm leading-tight">30K+</span>
                            <span className="text-[10px] text-slate-500 font-medium">Members</span>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-10 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2 mx-auto mb-8 shadow-xl shadow-[var(--primary)]/25">
                        Join the Community <div className="icon-arrow-right"></div>
                    </button>

                    {/* Footer Text */}
                    <p className="text-slate-500 text-sm">
                        Open the app and start <span className="font-semibold text-[var(--primary)]">your journey</span> today.
                    </p>
                </div>
            </div>
        </section>
    );
};