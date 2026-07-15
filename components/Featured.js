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
        <section className="py-20 bg-slate-50 border-t border-b border-slate-200 overflow-hidden" data-name="Featured" data-file="components/Featured.js">
            <div className="max-w-7xl mx-auto px-[60px] mb-12">
                <h2 className="text-3xl font-bold text-center text-[#0f1219]">Featured at</h2>
            </div>
            
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex items-center justify-center md:justify-start gap-8 animate-scroll w-max">
                    {doubledLogos.map((logo, index) => (
                        <div key={index} className="bg-white rounded-full px-8 py-4 shadow-sm border border-slate-100 flex items-center justify-center w-[220px] h-[80px] flex-shrink-0 hover:shadow-md transition-shadow">
                            <img 
                                src={logo.url} 
                                alt={logo.name} 
                                className="max-h-[50px] w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-[60px] mt-24 text-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Be a part of something bigger.</h3>
                <p className="text-slate-600 mb-8">Join thousands of people building the future together.</p>
                <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3.5 rounded-full font-medium transition-colors flex items-center justify-center gap-2 mx-auto">
                    Open the App <div className="icon-arrow-right text-sm"></div>
                </button>
            </div>
        </section>
    );
};