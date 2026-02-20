export function TagBadge({ label, className = "" }: { label: string; className?: string }) {
    return (
        <div className={`inline-flex items-center px-2 py-0.5 border-2 border-vox-dark rounded-full text-[10px] font-bold tracking-widest uppercase bg-white text-vox-dark ${className}`}>
            {label}
        </div>
    );
}
