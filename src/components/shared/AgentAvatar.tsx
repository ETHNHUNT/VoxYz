

export function AgentAvatar({ src, name, size = 48, emoji, className = "" }: { src: string; name: string; size?: number; emoji?: string; className?: string }) {
    return (
        <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
            <div className="w-full h-full rounded-full border-2 border-vox-dark overflow-hidden bg-gray-200">
                {src ? (
                    <img src={src} alt={name} width={size} height={size} className="object-cover w-full h-full" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 font-bold">
                        {name.charAt(0)}
                    </div>
                )}
            </div>
            {emoji && (
                <div className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-white border-2 border-vox-dark rounded-full text-xs shadow-sketch-sm">
                    {emoji}
                </div>
            )}
        </div>
    );
}
