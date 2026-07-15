const Footer = () => {
    return (
        <footer className="bg-[#0f1219] text-white pt-20 pb-8" data-name="Footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto px-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                        <img src="assets/img/whitelogo.png" alt="JaihoPe" className="h-[8rem] w-auto"/>
                        </div>
                        <p className="text-slate-400 text-sm mb-6 max-w-sm leading-relaxed">
                            A community-first Web3 ecosystem where participation is rewarded and every action creates value.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"><div className="icon-twitter text-lg"></div></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"><div className="icon-send text-lg"></div></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"><div className="icon-disc text-lg"></div></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"><div className="icon-mail text-lg"></div></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"><div className="icon-youtube text-lg"></div></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Ecosystem</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Rewards</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Wallet</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Coin Network</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Gift Cards</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Whitepaper</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Roadmap</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Token Information</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Brand Kit</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-slate-400 mb-8">
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Risk Disclosure</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Cookie Policy</a></li>
                        </ul>
                        
                        <h4 className="font-semibold text-white mb-4">Stay updated</h4>
                        <p className="text-xs text-slate-400 mb-3">Get the latest updates and news from JaihoPe.</p>
                        <div className="flex bg-white/5 border border-white/10 rounded-lg p-1 overflow-hidden">
                            <input type="email" placeholder="Enter your email" className="bg-transparent text-sm text-white px-3 py-2 outline-none w-full" />
                            <button className="bg-[var(--primary)] text-white text-xs px-4 py-2 rounded-md font-medium hover:bg-[var(--primary-hover)] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2026 JaihoPe. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span>Community Driven</span>
                        <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                        <span>Reward Powered</span>
                        <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                        <span>Built on-chain</span>
                    </div>
                    <p>Made with <span className="text-red-500">♥</span> for the community</p>
                </div>
            </div>
        </footer>
    );
};