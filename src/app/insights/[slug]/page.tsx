interface InsightPageProps {
  params: { slug: string };
}

export default function InsightPage({ params }: InsightPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="font-heading text-3xl mb-4">Insight: {params.slug}</h1>
      <p className="opacity-70">Content for the insight will be fetched from API.</p>
    </div>
  );
}
