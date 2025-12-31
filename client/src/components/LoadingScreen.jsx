import { useEffect, useState } from "react"

export function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ease-in-out">
            <div className="relative flex items-center justify-center">
                {/* Outer pulse */}
                <div className="absolute h-32 w-32 animate-ping rounded-full bg-white/5 duration-[2000ms]" />

                {/* Main loader ring */}
                <div className="h-24 w-24 rounded-full border-2 border-white/10" />
                <div className="absolute h-24 w-24 animate-spin rounded-full border-t-2 border-white transition-all duration-1000" />

                {/* Inner static indicator */}
                <div className="absolute h-1 w-8 rounded-full bg-white/20" />
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
                <span className="text-[10px] font-medium tracking-[0.4em] text-white/50 uppercase">Initializing Dashboard</span>

                {/* Loading progress bar indicator */}
                <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full origin-left animate-[loading-bar_2s_ease-in-out] bg-white" />
                </div>
            </div>

            <style jsx>{`
        @keyframes loading-bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
        </div>
    )
}
