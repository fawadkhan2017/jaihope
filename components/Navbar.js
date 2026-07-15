const { useState } = React;

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-8 lg:px-[60px]">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <img
                            src="assets/img/logo.png"
                            alt="JaihoPe"
                            className="h-12 md:h-16 w-auto"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-[var(--primary)] font-medium">Home</a>
                        <a href="#ecosystem" className="text-slate-600 hover:text-slate-900">Ecosystem</a>
                        <a href="#network" className="text-slate-600 hover:text-slate-900">Coin Network</a>
                        <a href="#roadmap" className="text-slate-600 hover:text-slate-900">Roadmap</a>
                        <a href="#whitepaper" className="text-slate-600 hover:text-slate-900">Whitepaper</a>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-2.5 rounded-lg">
                            Open App
                        </button>

                        <button className="flex items-center gap-1 text-slate-600 border border-slate-200 px-3 py-2 rounded-lg">
                            <div className="icon-globe"></div>
                            <span>EN</span>
                            <div className="icon-chevron-down"></div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 text-slate-700"
                    >
                        <div className={menuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-200 py-4 space-y-4">
                        <a href="#home" className="block px-4 py-2">Home</a>
                        <a href="#ecosystem" className="block px-4 py-2">Ecosystem</a>
                        <a href="#network" className="block px-4 py-2">Coin Network</a>
                        <a href="#roadmap" className="block px-4 py-2">Roadmap</a>
                        <a href="#whitepaper" className="block px-4 py-2">Whitepaper</a>

                        <div className="px-4 pt-2">
                            <button className="w-full bg-[var(--primary)] text-white py-3 rounded-lg">
                                Open App
                            </button>
                        </div>

                        <div className="px-4">
                            <button className="w-full border border-slate-300 py-3 rounded-lg flex justify-center items-center gap-2">
                                <div className="icon-globe"></div>
                                EN
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};