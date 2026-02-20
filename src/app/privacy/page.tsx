import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen text-ink selection:bg-accent/30 font-body">
            <Navbar />
            <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">

                <Link href="/" className="inline-flex items-center font-display text-2xl text-coral hover:text-vox-dark transition-colors mb-12 italic">
                    ← Back to home
                </Link>

                <h1 className="font-display text-5xl md:text-[4rem] font-bold text-vox-dark mb-12 border-b-2 border-vox-dark pb-6 inline-block pr-12">
                    Privacy
                </h1>

                <div className="prose prose-lg text-gray-700">
                    <p className="lead font-medium text-xl mb-10 text-vox-dark italic">VoxYZ is a personal site.</p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">What we collect:</h2>
                            <p>Minimal analytics via Vercel Web Analytics (no cookies, fully anonymized). If you subscribe to updates, your email address is stored securely through our provider.</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">Why we collect it:</h2>
                            <p>To know if anyone is reading the field notes, and to occasionally send out product updates to those who requested them.</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">Third-party processors:</h2>
                            <p>Vercel (hosting & basic analytics, no PII), Resend/loops (email delivery for subscribers), Stripe (payment processing if applicable).</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">Data retention and deletion:</h2>
                            <p>You can unsubscribe from emails at any time using the link in the footer. For complete data deletion, reach out to <a href="mailto:privacy@voxyz.space" className="text-coral font-bold hover:underline">privacy@voxyz.space</a>.</p>
                        </section>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
