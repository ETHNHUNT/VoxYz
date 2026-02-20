import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function SignInPage() {
    return (
        <div className="min-h-screen text-ink selection:bg-accent/30 font-body">
            <Navbar />
            <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 text-center">
                <h1 className="font-display text-5xl font-bold text-vox-dark mb-6">Sign&nbsp;In</h1>
                <p className="text-gray-600 mb-10">This feature is coming soon. In the meantime, feel free to explore the rest of the site.</p>
                <Link href="/" className="text-coral hover:underline font-bold">
                    ← Back to home
                </Link>
            </main>
            <Footer />
        </div>
    );
}
