
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100" data-name="Navbar" data-file="components/Navbar.js">
            <div className="max-w-7xl mx-auto px-[60px]">
                <div className="flex justify-between items-center h-20">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                <img src="assets/img/blacklogo.png" alt="JaihoPe" className="h-[8rem] w-auto"/>
                </div>  
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-[var(--primary)] font-medium border-b-2 border-[var(--primary)] pb-1">Home</a>
                        <a href="#ecosystem" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Ecosystem</a>
                        <a href="#network" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Coin Network</a>
                        <a href="#roadmap" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Roadmap</a>
                        <a href="#whitepaper" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Whitepaper</a>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                            Open App
                        </button>
                        <button className="flex items-center gap-1 text-slate-600 border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="icon-globe text-sm"></div>
                            <span className="text-sm font-medium">EN</span>
                            <div className="icon-chevron-down text-sm"></div>
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-slate-600 p-2">
                            <div className="icon-menu text-2xl"></div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};