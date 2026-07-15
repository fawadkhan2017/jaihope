function FAQ() {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        { q: "WHAT IS BLOCKCHAIN?", a: "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network." },
        { q: "WHAT IS A CRYPTO WALLET?", a: "A crypto wallet is a software program or physical device that allows you to store your crypto and allow for the sending and receiving of digital currency." },
        { q: "WHAT ARE TOKENS?", a: "Tokens are a type of cryptocurrency that represents an asset or specific use and reside on their own blockchain." },
        { q: "WHAT IS A MEMECOIN?", a: "A memecoin is a cryptocurrency that originated from an internet meme or has some other humorous characteristic." },
        { q: "WHERE CAN I BUY $NEXUS?", a: "You can buy $NEXUS directly through our official dApp, or on supported decentralized exchanges like Raydium or Uniswap." },
        { q: "WHAT IS STAKING?", a: "Staking is the process of actively participating in transaction validation on a proof-of-stake blockchain." },
        { q: "IS CRYPTO VOLATILE?", a: "Yes, cryptocurrency markets are known for their high volatility. Prices can change rapidly, which presents both opportunities and risks." },
        { q: "IS CRYPTOCURRENCY LEGAL?", a: "The legality of cryptocurrency varies by country and jurisdiction. Please check your local laws regarding digital assets." }
    ];

    return (
        <section className="py-8 bg-slate-50 relative" data-name="faq" data-file="components/FAQ.js">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200 ${isOpen ? 'ring-2 ring-primary-400' : ''}`}
                            >
                                <button 
                                    className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    <div className="flex items-center gap-3 text-left">
                                        <div className={`icon-message-square text-lg ${isOpen ? 'text-yellow-400' : 'text-yellow-400'}`}></div>
                                        <span className={`font-bold text-sm tracking-wide ${isOpen ? 'text-slate-900' : 'text-slate-800'}`}>
                                            {faq.q}
                                        </span>
                                    </div>
                                    <div className={`text-xl text-slate-400 transition-transform duration-200 ${isOpen ? 'icon-minus text-slate-900' : 'icon-plus'}`}></div>
                                </button>
                                
                                {isOpen && (
                                    <div className="px-6 pb-4 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-50 mx-6">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}