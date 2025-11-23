import React from 'react';
import Footer from '@/components/layout/Footer';

export default function PortalPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-900 text-white">
            <main className="flex-grow flex items-center justify-center">
                <div className="p-8 border border-slate-700 rounded-xl bg-slate-800/50 backdrop-blur-md text-center shadow-2xl">
                    <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">NeoChain Portal</h1>
                    <p className="text-slate-400 mb-6">SaaS Unified Login</p>
                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all font-medium">
                        Sign In
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
