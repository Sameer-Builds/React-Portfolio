import React, { useEffect, useRef, useState } from "react";

function Bar({ name, percentage }) {
    const barRef = useRef(null);
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                    }
                });
            },
            { threshold: 0.4 }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (visible && barRef.current) {
            barRef.current.style.width = percentage;
        }
    }, [visible, percentage]);

    return (
        <div ref={containerRef} className="w-full mb-5">
            <div className="mt-10 flex justify-between">
                <p className="text-white">{name}</p>
                <p className="text-white">{percentage}</p>
            </div>
            <div className="w-full bg-zinc-900 rounded-full h-2 mt-3 overflow-hidden">
                <div
                    ref={barRef}
                    className="bg-red-500 h-2 rounded-full"
                    style={{
                        width: "0%",
                        transition: "width 1.5s ease",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Bar;
