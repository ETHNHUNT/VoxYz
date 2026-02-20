export function SectionLabel({ label, className = "" }: { label: string; className?: string }) {
    return (
        <div className={`inline-flex items-center px-3 py-1 bg-vox-dark/5 dark:bg-white/10 rounded-full text-xs font-bold tracking-wider uppercase border border-vox-dark/10 ${className}`}>
            {label}
        </div>
    );
}
