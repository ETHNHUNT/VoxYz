import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="min-h-screen text-ink selection:bg-accent/30 font-body">
            <Navbar />
            <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">

                <Link href="/" className="inline-flex items-center font-display text-2xl text-coral hover:text-vox-dark transition-colors mb-12 italic">
                    ← Back to home
                </Link>

                <h1 className="font-display text-5xl md:text-[4rem] font-bold text-vox-dark mb-12 border-b-2 border-vox-dark pb-6 inline-block pr-12">
                    Terms
                </h1>

                <div className="prose prose-lg text-gray-700">
                    <p className="lead font-medium text-xl mb-10 text-vox-dark italic border-l-4 border-vox-green pl-4">These terms apply to VoxYZ and VoxYZ Vault.</p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">What you&apos;re buying:</h2>
                            <p>Access to technical documentation, prompt templates, guides, and raw agent architectures (digital products). Or use of our MIT-licensed Open Source software.</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">License:</h2>
                            <p>Premium guides and Prompts are licensed for your personal and commercial use to build products. You cannot resell the guides or templates themselves.</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">Delivery:</h2>
                            <p>Digital files are delivered immediately upon purchase. Access to dynamic repositories requires a valid GitHub account.</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">License terms (Open Source):</h2>
                            <p>Software components marked MIT are provided &quot;as is&quot;, without warranty of any kind. You may modify and distribute them freely.</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">Refunds (digital products):</h2>
                            <p>Due to the irreversible nature of digital downloads, refunds are handled on a case-by-case basis. If the product does not match the description, we will make it right.</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">Support:</h2>
                            <p>We provide commercial support for enterprise configurations, but individual purchases do not include guaranteed 1-on-1 technical support beyond repository access issues.</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-vox-dark text-xl mb-3">Disclaimer:</h2>
                            <p>All AI-generated insights and outputs are provided for educational purposes. We are not liable for autonomous decisions executed by systems derived from our architecture.</p>
                        </section>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
