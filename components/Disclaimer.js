const Disclaimer = () => {
    return (
        <div
            className="bg-amber-50 border-t border-amber-200 py-6 px-5 sm:px-8 lg:px-[60px]"
            data-name="Disclaimer"
            data-file="components/Disclaimer.js"
        >
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-xs sm:text-sm text-slate-700 leading-6">
                    <span className="font-semibold text-slate-900">
                        Disclaimer:
                    </span>{" "}
                    Super Simon Coin ($SIMON) is a memecoin and is not intended
                    as a safe investment. The content provided on this website,
                    including information about $SIMON, does not constitute
                    financial advice. Cryptocurrencies, including memecoins, are
                    highly speculative and volatile. Always conduct your own
                    research and consult a licensed financial advisor before
                    making any investment decisions. Super Simon Coin is created
                    for entertainment and community-building purposes only, and
                    no guarantee of financial returns is made.
                </p>
            </div>
        </div>
    );
};