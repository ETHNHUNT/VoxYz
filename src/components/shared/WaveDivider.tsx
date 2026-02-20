export function WaveDivider({ className = "" }: { className?: string }) {
    return (
        <div className={`w-full overflow-hidden leading-[0] ${className}`}>
            <svg className="block w-full h-[20px]" viewBox="0 0 1000 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,10 Q25,-10 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10 T450,10 T500,10 T550,10 T600,10 T650,10 T700,10 T750,10 T800,10 T850,10 T900,10 T950,10 T1000,10" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    );
}
