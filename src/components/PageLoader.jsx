import React from "react";

export default function PageLoader() {
    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <div className="relative">

                {/* Outer slow ring */}
                <div className="
        w-24 h-24 
        border-4 border-red-500 border-t-transparent 
        rounded-full 
        animate-spin 
        shadow-[0_0_20px_#ef4444,0_0_40px_#ef4444]
        "></div>

                {/* Inner fast ring */}
                <div className="
        absolute top-1/2 left-1/2 
        w-16 h-16 
        -translate-x-1/2 -translate-y-1/2
        border-4 border-red-500 border-b-transparent 
        rounded-full 
        animate-[spin_0.8s_linear_infinite]
        shadow-[0_0_15px_#ef4444,0_0_30px_#ef4444]
        "></div>

                {/* Glowing dot */}
                <div className="
        absolute top-1/2 left-1/2 
        w-5 h-5 
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-red-500 
        animate-pulse
        shadow-[0_0_20px_#ef4444,0_0_40px_#ef4444]
        "></div>

            </div>
        </div>
    );
}
