import React from 'react';
import Footer from '@/components/layout/Footer';

export default async function TenantPage({ params }: { params: Promise<{ slug: string }> }) {
    // Decode the slug to display nicely
    const { slug } = await params;
    const clientName = decodeURIComponent(slug).toUpperCase();

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
            <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
                <h1 className="text-xl font-bold tracking-tight">{clientName} WORKSPACE</h1>
            </header>
            <main className="flex-grow p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
                        <div className="text-sm text-slate-500 uppercase font-semibold">System Status</div>
                        <div className="text-2xl font-bold text-emerald-600 mt-2">Online</div>
                    </div>
                    {/* Placeholder for more widgets */}
                </div>
                <div className="p-12 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400">
                    [ 3D Digital Twin Placeholder for {clientName} ]
                </div>
            </main>
            <Footer />
        </div>
    );
}
