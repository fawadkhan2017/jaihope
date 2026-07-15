function Footer() {
    try {
        return (
            <footer className="bg-[#0f1219] text-white pt-20 pb-8" data-name="Footer" data-file="components/Footer.js">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-[60px]">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 lg:gap-12 mb-16">
                        
                        <div className="col-span-2 sm:col-span-4 lg:col-span-2">
                            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                                <img src="assets/img/1000073946.png" alt="JaihoPe" className="h-[8rem] w-auto"/>
                            </div>
                            <p className="text-slate-400 text-sm mb-8 max-w-sm leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                                A community-first Web3 ecosystem where participation is rewarded and every action creates value.
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#229ED9] transition-all">
                                    <i className="fa-brands fa-telegram text-xl"></i>
                                </a>
                                <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all">
                                    <i className="fa-brands fa-facebook text-xl"></i>
                                </a>
                                <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all">
                                    <i className="fa-brands fa-twitter text-xl"></i>
                                </a>
                                <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all">
                                    <i className="fa-brands fa-whatsapp text-xl"></i>
                                </a>
                                <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-all">
                                    <i className="fa-brands fa-youtube text-xl"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="col-span-1">
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
                        
                        <div className="col-span-1">
                            <h4 className="font-semibold text-white mb-6">Resources</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Whitepaper</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Roadmap</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Token Information</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-span-1">
                            <h4 className="font-semibold text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Brand Kit</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <h4 className="font-semibold text-white mb-6">Legal</h4>
                            <ul className="space-y-4 text-sm text-slate-400 mb-8">
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Risk Disclosure</a></li>
                                <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Cookie Policy</a></li>
                            </ul>
                            
                            {/* <h4 className="font-semibold text-white mb-4">Stay updated</h4>
                            <p className="text-xs text-slate-400 mb-3">Get the latest updates and news from JaihoPe.</p>
                            <div className="flex bg-white/5 border border-white/10 rounded-lg p-1 overflow-hidden">
                                <input type="email" placeholder="Enter your email" className="bg-transparent text-sm text-white px-3 py-2 outline-none w-full" />
                                <button className="bg-[var(--primary)] text-black text-xs px-4 py-2 rounded-md font-bold hover:bg-[var(--primary-hover)] transition-colors">
                                    Subscribe
                                </button>
                            </div> */}
                        </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left text-xs text-slate-500">
                        <p>© 2026 JaihoPe. All rights reserved.</p>
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
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
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}