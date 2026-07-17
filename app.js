class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('App Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-slate-50">
                    <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-red-100 max-w-md">
                        <div className="icon-circle-alert text-4xl text-red-500 mb-4 mx-auto"></div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h2>
                        <p className="text-slate-600 mb-6">We encountered an unexpected error while loading the page.</p>
                        <button onClick={() => window.location.reload()} className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg font-medium">
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

const App = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white" data-name="App" data-file="app.js">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Features />
                <CoinNetwork />
                <AppPromo />
                
                <Roadmap />
                <Featured />
                <FAQ />
            </main>
            <Footer />
            <Disclaimer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);