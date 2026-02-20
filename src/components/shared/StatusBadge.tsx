export function StatusBadge({ status, text, className = "" }: { status: "live" | "coming-soon" | "building" | "validating" | "watching" | "shipped"; text?: string; className?: string }) {
    const getStyles = () => {
        switch (status) {
            case "live": return "bg-ink text-white border-2 border-vox-dark";
            case "coming-soon": return "bg-vox-dark text-white border-2 border-vox-dark";
            case "building": return "bg-blue-500 text-white border-2 border-vox-dark";
            case "validating": return "bg-amber-500 text-black border-2 border-vox-dark";
            case "watching": return "bg-gray-200 text-black border-2 border-vox-dark";
            case "shipped": return "bg-vox-green text-black border-2 border-vox-dark";
        }
    };
    return (
        <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold shadow-sketch-sm ${getStyles()} ${className}`}>
            {status === "live" && <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-black animate-pulse"></span>}
            {text || status.toUpperCase().replace("-", " ")}
        </div>
    );
}
