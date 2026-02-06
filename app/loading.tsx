export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md flex flex-col items-center gap-6 animate-pulse">
                {/* Profile Image Skeleton */}
                <div className="w-32 h-32 rounded-full bg-white/10" />

                {/* Text Skeleton */}
                <div className="flex flex-col items-center gap-2 w-full">
                    <div className="h-6 w-48 bg-white/10 rounded" />
                    <div className="h-4 w-64 bg-white/10 rounded" />
                </div>

                {/* Links Skeleton */}
                <div className="w-full space-y-3 mt-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-16 w-full bg-white/5 rounded-2xl" />
                    ))}
                </div>

                {/* Socials Skeleton */}
                <div className="grid grid-cols-4 gap-3 w-full mt-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-white/5 rounded-2xl" />
                    ))}
                </div>
            </div>
        </div>
    );
}
